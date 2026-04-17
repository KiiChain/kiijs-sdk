/**
 * Shared build script for all packages.
 * Uses Bun's JS API for ESM/CJS bundling and tsc for type declarations.
 *
 * Usage: bun run scripts/build.ts
 * Run from within a package directory.
 */
import { rmSync, existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const cwd = process.cwd();
const pkg = JSON.parse(readFileSync(resolve(cwd, 'package.json'), 'utf-8'));
const entrypoint = resolve(cwd, 'src/index.ts');

if (!existsSync(entrypoint)) {
  console.error(`Entry point not found: ${entrypoint}`);
  process.exit(1);
}

// Collect all external dependencies (libraries should not bundle deps)
const externals: string[] = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.optionalDependencies || {}),
];

// Clean dist
const distDir = resolve(cwd, 'dist');
if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true });
}

console.log(`Building ${pkg.name}...`);

async function build() {
  // Build ESM with Bun's JS API
  console.log('  → ESM bundle');
  const esmResult = await Bun.build({
    entrypoints: [entrypoint],
    outdir: resolve(cwd, 'dist/esm'),
    target: 'node',
    format: 'esm',
    splitting: true,
    sourcemap: 'external',
    external: externals,
  });

  if (!esmResult.success) {
    console.error('ESM build errors:');
    for (const log of esmResult.logs) {
      console.error(log);
    }
    process.exit(1);
  }

  // Build CJS with Bun's JS API (no splitting — CJS doesn't support it)
  console.log('  → CJS bundle');
  const cjsResult = await Bun.build({
    entrypoints: [entrypoint],
    outdir: resolve(cwd, 'dist/cjs'),
    target: 'node',
    format: 'cjs',
    splitting: false,
    sourcemap: 'external',
    external: externals,
  });

  if (!cjsResult.success) {
    console.error('CJS build errors:');
    for (const log of cjsResult.logs) {
      console.error(log);
    }
    process.exit(1);
  }

  // Write CJS package.json so Node resolves .js files as CommonJS
  // even when the parent package has "type": "module"
  const cjsDir = resolve(cwd, 'dist/cjs');
  mkdirSync(cjsDir, { recursive: true });
  writeFileSync(
    resolve(cjsDir, 'package.json'),
    JSON.stringify({ type: 'commonjs' }, null, 2) + '\n',
  );

  // Build type declarations with tsc (still needs CLI — no JS API for tsc)
  console.log('  → Type declarations');
  const tscResult = Bun.spawnSync(
    ['npx', 'tsc', '--project', './tsconfig.declaration.json'],
    { cwd, stdio: ['inherit', 'inherit', 'inherit'] },
  );

  if (tscResult.exitCode !== 0) {
    throw new Error('tsc failed');
  }
}

build()
  .then(() => console.log(`✓ ${pkg.name} built successfully`))
  .catch(() => {
    console.error(`✗ ${pkg.name} build failed`);
    process.exit(1);
  });
