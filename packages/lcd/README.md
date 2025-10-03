# kiijs-lcd

## install

```sh
npm install @kiichain/kiijs-lcd
```

## Usage

You can utilize the types to query the Kiichain LCD client.

### LCD Client

To create an LCD client you can import the following helper and utilize it:

```js
import { createLCDClient } from '@kiichain/kiijs-lcd';

const client = createLCDClient(LCD_ENDPOINT);

// now you can query the cosmos modules
const balance = await client.cosmos.balance('kiichain1addresshere', {
  denom: 'akii',
});
```

Explore the types to find out what types of queries are available and how to utilized them.

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
