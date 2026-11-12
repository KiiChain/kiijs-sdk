/**
 * Shared build for every package: an ESM-only bundle from Bun.build, plus .d.ts files from tsc.
 * Run it from a package directory (each package's `build` script does).
 *
 * Entrypoints come from the package's `exports` map: an export whose `default` is `./dist/foo/index.js` is built from
 * `src/foo/index.ts`. Dependencies stay external, so consumers dedupe them.
 *
 * Declarations come from tsc with the package's tsconfig.build.json, which also type-checks src, so a type error
 * fails the build.
 */
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

type ExportEntry = { types: string; default: string };

const cwd = process.cwd();
const pkg = JSON.parse(readFileSync(resolve(cwd, 'package.json'), 'utf-8'));
const distDir = resolve(cwd, 'dist');

function fail(message: string): never {
  console.error(message);
  console.error(`✗ ${pkg.name} build failed`);
  process.exit(1);
}

const exportsMap: Record<string, ExportEntry> = pkg.exports;
const entrypoints = Object.values(exportsMap).map((entry) => {
  const source = entry.default
    .replace(/^\.\/dist\//, './src/')
    .replace(/\.js$/, '.ts');
  if (!existsSync(resolve(cwd, source))) {
    fail(`${pkg.name}: no source ${source} for export ${entry.default}`);
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
  });
} catch (error) {
  fail(
    ((error as AggregateError).errors ?? [error])
      .map((log) => String(log))
      .join('\n')
  );
}

const tsc = Bun.spawnSync(['tsc', '--project', 'tsconfig.build.json'], {
  cwd,
  stdio: ['inherit', 'inherit', 'inherit'],
});
if (tsc.exitCode !== 0) {
  fail('tsc failed');
}

// tsc keeps relative specifiers as written (`./cosmjs`), but in a `"type": "module"` package Node-style resolution
// (TypeScript's node16/nodenext) needs the full path. Point each one at the .js file its declaration sits next to.
const relativeSpecifier =
  /((?:from|import)\s*\(?\s*['"])(\.{1,2}\/[^'"]*?)(['"])/g;

for (const file of new Bun.Glob('**/*.d.ts').scanSync(distDir)) {
  const path = resolve(distDir, file);
  const dir = dirname(path);
  const source = readFileSync(path, 'utf-8');
  const rewritten = source.replace(
    relativeSpecifier,
    (match, before: string, specifier: string, after: string) => {
      if (/\.(js|json)$/.test(specifier)) return match;
      if (existsSync(resolve(dir, `${specifier}.d.ts`))) {
        return `${before}${specifier}.js${after}`;
      }
      if (existsSync(resolve(dir, specifier, 'index.d.ts'))) {
        return `${before}${specifier}/index.js${after}`;
      }
      fail(`${file}: can't resolve ${specifier}`);
    }
  );
  if (rewritten !== source) writeFileSync(path, rewritten);
}

console.log(`✓ ${pkg.name} built`);
