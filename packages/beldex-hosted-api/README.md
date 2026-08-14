# @bdxi/beldex-hosted-api

HTTP connector for Beldex-compatible light-wallet services. Wraps the hosted API endpoints used by the Beldex wallet apps for logging in, syncing balances and transactions, and submitting transactions.

## Installation

```bash
npm install @bdxi/beldex-hosted-api
```

## Usage

```js
const HostedAPIClient = require('@bdxi/beldex-hosted-api')

const client = new HostedAPIClient(options, context)

client.LogIn(address, privateViewKey, generatedLocally, (err, newAddress) => {
  // ...
})
```

## API

All request methods use Node-style callbacks and return a `RequestHandle` that can be used to abort the in-flight request.

| Method | Purpose |
|---|---|
| `LogIn(address, privViewKey, generatedLocally, fn)` | Log a wallet in to the service |
| `AddressInfo_returningRequestHandle(...)` | Fetch balance / account info |
| `AddressTransactions_returningRequestHandle(...)` | Fetch the wallet's transactions |
| `ImportRequestInfoAndStatus(address, privViewKey, fn)` | Wallet import request info |
| `UnspentOuts(reqParams, fn)` | Fetch unspent outputs for spending |
| `RandomOuts(reqParams, fn)` | Fetch random outputs (decoys) for ring signatures |
| `SubmitRawTx(reqParams, fn)` | Broadcast a signed raw transaction |

## License

MIT © Beldex
