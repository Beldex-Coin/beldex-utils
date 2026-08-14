# @bdxi/beldex-app-bridge

WASM bridge to the shared Beldex C++ core library, used by the Beldex wallet apps (web, desktop, mobile, and browser extension). It loads `BeldexLibAppCpp_WASM.wasm` and exposes the core wallet functionality (key derivation, address handling, transaction construction) to JavaScript.

The embind glue code is MV3-CSP-safe: it contains no `eval`/`new Function()` dynamic code generation, so it can run inside Chrome extension (Manifest V3) pages where `'unsafe-eval'` is not permitted.

## Installation

```bash
npm install @bdxi/beldex-app-bridge
```

## Usage

```js
const beldexAppBridge = require('@bdxi/beldex-app-bridge')

beldexAppBridge({}).then(bridge => {
  // bridge exposes the Beldex core wallet functions
})
```

The exported factory takes an `options` object (e.g. a custom `locateFile` for resolving the `.wasm` asset path in bundled environments) and returns a promise resolving to the bridge instance. Platform detection (web / Node / Capacitor) and asm.js fallback handling are performed automatically via `@bdxi/beldex-bridge-utils`.

## Files

| File | Purpose |
|---|---|
| `index.js` | Entry point; environment detection and WASM loading |
| `BeldexLibAppCpp_WASM.js` / `.wasm` | Emscripten-compiled Beldex core library |
| `MyMoneroLibAppBridgeClass.js` | High-level bridge API class |
| `MyMoneroCoreBridgeEssentialsClass.js` | Shared bridge essentials |
| `MyMoneroBridge_utils.js` | Bridge helper utilities |

## License

MIT © Beldex
