import { Api, ContentType } from './Api';
export * from './Api';

/**
 * Creates a new LCD (Light Client Daemon) client instance for interacting with the API.
 *
 * @param apiUrl - The base URL of the API endpoint to connect to
 * @returns A new Api instance configured with JSON content type and format
 *
 * @example
 * ```typescript
 * const client = createLCDClient('https://api.example.com');
 * ```
 */
export function createLCDClient(apiUrl: string) {
  return new Api({
    baseUrl: apiUrl,
    baseApiParams: { type: ContentType.Json, format: 'json' },
  });
}
