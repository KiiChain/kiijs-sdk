/**
 * Shared build for every package: an ESM-only bundle plus .d.ts files, both from Bun.build.
 * Run it from a package directory (each package's `build` script does).
 *
 * Entrypoints come from the package's `exports` map: an export whose `default` is `./dist/foo/index.js` is built from
 * `src/foo/index.ts`. Dependencies stay external, so consumers dedupe them.
 *
 * `dts` needs a Bun canary for now (see `packageManager` in the root package.json). It also type-checks the
 * entrypoints, so a type error fails the build.
 */
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

type ExportEntry = { types: string; default: string };

const cwd = process.cwd();
const pkg = JSON.parse(readFileSync(resolve(cwd, 'package.json'), 'utf-8'));
const distDir = resolve(cwd, 'dist');

const exportsMap: Record<string, ExportEntry> = pkg.exports;
const entrypoints = Object.values(exportsMap).map((entry) => {
  const source = entry.default
    .replace(/^\.\/dist\//, './src/')
    .replace(/\.js$/, '.ts');
  if (!existsSync(resolve(cwd, source))) {
    throw new Error(
      `${pkg.name}: no source ${source} for export ${entry.default}`
    );
  }
  return source;
});

rmSync(distDir, { recursive: true, force: true });

try {
  await Bun.build({
    entrypoints,
    root: './src',
    outdir: distDir,
    target: 'node',
    format: 'esm',
    packages: 'external',
    splitting: true,
    sourcemap: 'linked',
    dts: true,
  });
} catch (error) {
  for (const log of (error as AggregateError).errors ?? [error]) {
    console.error(log);
  }
  console.error(`✗ ${pkg.name} build failed`);
  process.exit(1);
}

// `dts` also writes an index.aot.ts per entry, for `bun build --compile`. A library doesn't need them.
for (const file of new Bun.Glob('**/*.aot.ts').scanSync(distDir)) {
  rmSync(resolve(distDir, file));
}

console.log(`✓ ${pkg.name} built`);
