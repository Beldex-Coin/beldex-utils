# @bdxi/beldex-request-utils

Parser for Beldex payment request URIs and address strings. Turns a `beldex:` URI (or a plain address / OpenAlias string) into a structured payload the wallet send screen can consume.

## Installation

```bash
npm install @bdxi/beldex-request-utils
```

## Usage

```js
const requestUtils = require('@bdxi/beldex-request-utils')

const payload = requestUtils.New_ParsedPayload_FromPossibleRequestURIString(
  'beldex:bxc...?tx_amount=1.5&tx_description=coffee',
  'MAINNET',
  coreBridgeInstance // passed in so the call stays synchronous
)
// -> { address, amount, description, ... }
```

Accepted inputs: full `beldex:` URIs with query parameters, bare Beldex addresses, and strings containing a period (treated as possible OpenAlias addresses). Unrecognized formats throw an `Error`.

## API

| Function | Purpose |
|---|---|
| `New_ParsedPayload_FromPossibleRequestURIString(string, nettype, coreBridge)` | Parse a request URI / address string into a payload object; throws on invalid input |

## License

MIT © Beldex
