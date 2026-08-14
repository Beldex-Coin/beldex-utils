# @bdxi/beldex-tx-parsing-utils

Helpers for interpreting Beldex transactions on the client: determining ownership, confirmation status, and unlock status of transactions returned by the light-wallet service.

## Installation

```bash
npm install @bdxi/beldex-tx-parsing-utils
```

## Usage

```js
const txParsing = require('@bdxi/beldex-tx-parsing-utils')

const ownedTx = txParsing.ownedParsedTxFrom__orNil(tx, wallet, coreBridgeInstance)

txParsing.IsTransactionConfirmed(tx, blockchainHeight)  // -> boolean
txParsing.IsTransactionUnlocked(tx, blockchainHeight)   // -> boolean
txParsing.TransactionLockedReason(tx, blockchainHeight) // -> string
```

## API

| Function | Purpose |
|---|---|
| `ownedParsedTxFrom__orNil(...)` | Parse a raw transaction into an owned-transaction object, or `nil` if it doesn't belong to the wallet |
| `IsTransactionConfirmed(tx, height)` | Whether the tx has enough confirmations |
| `IsTransactionUnlocked(tx, height)` | Whether the funds are spendable yet |
| `TransactionLockedReason(tx, height)` | Human-readable reason a tx is still locked |

## License

MIT © Beldex
