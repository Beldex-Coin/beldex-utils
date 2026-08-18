# @bdxi/beldex-keyimage-cache

Synchronous, lazily-populated cache for Beldex key images. Key image generation is expensive, so this module memoizes results per `(txPublicKey, address, outputIndex)` and manages one cache per wallet.

## Installation

```bash
npm install @bdxi/beldex-keyimage-cache
```

## Usage

```js
const keyImageCache = require('@bdxi/beldex-keyimage-cache')

const cache = keyImageCache.Lazy_KeyImageCacheForWalletWith(address)

const keyImage = keyImageCache.Lazy_KeyImage(
  cache,
  txPublicKey,
  outputIndex,
  publicAddress,
  privateViewKey,
  publicSpendKey,
  privateSpendKey,
  coreBridgeInstance // so the call can remain synchronous
)

// when a wallet is removed:
keyImageCache.DeleteManagedKeyImagesForWalletWith(address)
```

## API

| Function | Purpose |
|---|---|
| `Lazy_KeyImage(cache, txPubKey, outIndex, addr, privView, pubSpend, privSpend, coreBridge)` | Return the cached key image, generating and caching it on first use |
| `Lazy_KeyImageCacheForWalletWith(address)` | Get (or create) the managed cache dictionary for a wallet |
| `DeleteManagedKeyImagesForWalletWith(address)` | Drop a wallet's cached key images (call on logout/removal) |

## License

MIT © Beldex
