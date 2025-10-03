import * as path from 'node:path';
import { generateApi } from 'swagger-typescript-api';

await generateApi({
  input: path.resolve(import.meta.dirname, '..', 'swagger.yaml'),
  generateClient: true,
  output: path.resolve(import.meta.dirname, '..', 'src'),
});
