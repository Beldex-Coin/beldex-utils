# @bdxi/beldex-yat-lookup

Resolve Beldex addresses and subaddresses from [Yat](https://y.at) emoji handles, and validate Yat handles against the permitted emoji set from Yat's EmojiID service.

Ships both CommonJS (`index.js`) and ES module (`index.esm.js`) builds.

## Installation

```bash
npm install @bdxi/beldex-yat-lookup
```

## Usage

```js
const YatBeldexLookup = require('@bdxi/beldex-yat-lookup')

const yat = new YatBeldexLookup({
  debugMode: false,   // true = use Yat's test API instead of the live one
  remoteLookup: false // true = fetch the emoji list from the Yat server; false = use the bundled static list
})

if (yat.isValidYatHandle('🐶🍼💃')) {
  yat.lookupMoneroAddresses('🐶🍼💃').then(addresses => {
    // resolved Beldex address / subaddress records
  })
}
```

## API

| Method | Purpose |
|---|---|
| `getSupportedEmojis()` | Fetch the permitted emoji list from the Yat API |
| `isValidYatHandle(handle)` | Validate a handle (1–10 characters, all permitted emojis) |
| `isValidYatCharacter(char)` | Validate a single emoji |
| `lookupMoneroAddresses(handle)` | Resolve the address records associated with a Yat handle |

See `examples.js` for more usage examples.

## License

MIT © Beldex
