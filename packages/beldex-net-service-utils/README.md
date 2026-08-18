# @bdxi/beldex-net-service-utils

Networking helpers shared by the Beldex wallet apps. Provides a uniform HTTP request layer that works in the browser (`xhr`), Node, and Capacitor apps (`@capacitor-community/http`, which also allows bypassing CORS on mobile).

## Installation

```bash
npm install @bdxi/beldex-net-service-utils
```

## Usage

```js
const netUtils = require('@bdxi/beldex-net-service-utils')

const params = netUtils.New_ParametersForWalletRequest(address, privateViewKey)
netUtils.AddUserAgentParamters(params, 'beldex-wallet', '1.0.0')

netUtils.HTTPRequest(apiAddress, endpointPath, params, (err, data) => {
  // ...
})
```

## API

| Function | Purpose |
|---|---|
| `New_ParametersForWalletRequest(address, privViewKey)` | Build the base `{ address, view_key }` request payload |
| `AddUserAgentParamters(params, product, version)` | Attach `app_name` / `app_version` fields (kept in the body so the server can control delivery) |
| `HTTPRequest(...)` | Perform an HTTP request using the environment-appropriate transport |
| `HTTPRequestBypassCORS(...)` | Perform a request via the native Capacitor HTTP plugin to bypass CORS |

## License

MIT © Beldex
