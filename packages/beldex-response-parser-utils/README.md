# @bdxi/beldex-response-parser-utils

Parses raw responses from Beldex light-wallet services (address info, address transactions, unspent outputs) into the normalized structures used by the wallet apps — computing balances with `@bdxi/beldex-bigint`, formatting amounts with `@bdxi/beldex-money-format`, and resolving owned outputs via `@bdxi/beldex-keyimage-cache`.

Designed to run in a background thread/worker so heavy parsing doesn't block the UI.

## Installation

```bash
npm install @bdxi/beldex-response-parser-utils
```

## Usage

```js
const BackgroundResponseParser = require('@bdxi/beldex-response-parser-utils')

const parser = new BackgroundResponseParser({ coreBridge_instance }) // required

parser.Parsed_AddressInfo(rawResponse, address, privViewKey, pubSpendKey, privSpendKey, (err, parsed) => {
  // parsed balances, totals, spent outputs, ...
})
```

## API

| Method | Purpose |
|---|---|
| `Parsed_AddressInfo(...)` | Parse an address-info response into balances and totals |
| `Parsed_AddressTransactions(...)` | Parse an address-transactions response into owned transactions |
| `DeleteManagedKeyImagesForWalletWith(address, fn)` | Drop the wallet's cached key images |

## License

MIT © Beldex
