import { resolve } from 'node:path';

import { defineConfig } from 'vitest/config';

// Each package's vitest.config.ts re-exports this, and Vitest runs from that package's folder.
export default defineConfig({
  test: {
    include: ['{test,tests}/**/*.test.ts'],
    environment: 'node',
    setupFiles: [resolve(import.meta.dirname, 'vitest.setup.ts')],
  },
});
