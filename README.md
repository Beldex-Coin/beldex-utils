# beldex-utils

A [Lerna](https://lerna.js.org/) monorepo of JavaScript utility packages powering the Beldex wallet apps (desktop, web, and mobile). It includes the WASM bridge to the shared C++ core, cryptography helpers, transaction parsing, exchange integrations, UI components, and more.

> :warning: This project is under heavy development. Expect bugs & breaking changes.

## Packages

| Package | Version | Description |
|---|---|---|
| [@bdxi/beldex-app-bridge](packages/beldex-app-bridge) | 3.0.0 | WASM bridge to the Beldex C++ core library (MV3 CSP-safe) |
| [@bdxi/beldex-bigint](packages/beldex-bigint) | 1.0.0 | Fork of the BigInt package adding `lowVal` and exposing `CONSTRUCT` |
| [@bdxi/beldex-bridge-utils](packages/beldex-bridge-utils) | 1.0.0 | Bridge utils for the Beldex wallet |
| [@bdxi/beldex-capacitor-file-picker](packages/beldex-capacitor-file-picker) | 1.4.0 | Capacitor plugin presenting the native UI for picking a file |
| [@bdxi/changenow-exchange-integration](packages/beldex-changenow-exchange-integration) | 1.0.0 | ChangeNow integration for exchanging BDX into other cryptocurrencies |
| [@bdxi/beldex-client](packages/beldex-client) | 3.0.0 | JS transpilation of the shared library behind the Beldex apps |
| [@bdxi/beldex-config](packages/beldex-config) | 1.0.0 | Beldex configuration |
| [@bdxi/beldex-cryptor](packages/beldex-cryptor) | 1.0.0 | Encryption and decryption library used across Beldex packages |
| [@bdxi/beldex-exchange](packages/beldex-exchange) | 1.0.0 | In-app exchange of BDX into other cryptocurrencies |
| [@bdxi/beldex-exchange-helper](packages/beldex-exchange-helper) | 1.3.0 | Helper functions for rendering the in-app exchange |
| [@bdxi/beldex-hosted-api](packages/beldex-hosted-api) | 1.4.0 | Connector for Beldex-compatible services |
| [@bdxi/beldex-keyimage-cache](packages/beldex-keyimage-cache) | 1.0.0 | Key image cache |
| [@bdxi/beldex-locales](packages/beldex-locales) | 1.0.0 | List of supported locales |
| [@bdxi/beldex-money-format](packages/beldex-money-format) | 1.2.0 | Formatter for crypto values |
| [@bdxi/beldex-net-service-utils](packages/beldex-net-service-utils) | 1.3.0 | Network service utilities |
| [@bdxi/beldex-nettype](packages/beldex-nettype) | 1.0.0 | Definitions of the Beldex network types |
| [@bdxi/beldex-openalias](packages/beldex-openalias) | 1.0.0 | Converts OpenAlias addresses to Beldex addresses |
| [@bdxi/beldex-page-templates](packages/beldex-page-templates) | 1.3.0 | Lit element templates for various page layouts |
| [@bdxi/beldex-paymentid-utils](packages/beldex-paymentid-utils) | 1.0.0 | Validates Beldex payment IDs |
| [@bdxi/beldex-request-utils](packages/beldex-request-utils) | 1.0.0 | Request utilities |
| [@bdxi/beldex-response-parser-utils](packages/beldex-response-parser-utils) | 1.2.0 | Response parsing utilities |
| [@bdxi/beldex-sendfunds-utils](packages/beldex-sendfunds-utils) | 1.0.0 | Utils for managing the send funds process |
| [@bdxi/beldex-tx-parsing-utils](packages/beldex-tx-parsing-utils) | 1.2.0 | Transaction parsing utilities |
| [@bdxi/beldex-web-components](packages/beldex-web-components) | 1.1.0 | Lit web components |
| [@bdxi/beldex-yat-lookup](packages/beldex-yat-lookup) | 1.0.0 | Resolves Beldex addresses via Yat's EmojiID service |

## Getting started

```bash
git clone https://github.com/Beldex-Coin/beldex-utils.git
cd beldex-utils
npm install
npm run bootstrap   # link local packages together via Lerna
```

## Scripts

| Command | Description |
|---|---|
| `npm run bootstrap` | Bootstrap packages with Lerna (`--hoist --force-local`) |
| `npm test` | Run unit tests for all packages with coverage (nyc + mocha) |
| `npm run test:lite` | Run unit tests without coverage |
| `npm run lint` | Lint and auto-fix with [standard](https://standardjs.com/) |
| `npm run coverage` | Report coverage to Coveralls |

## License

[MIT](LICENSE) © Beldex
