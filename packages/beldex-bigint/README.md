
<p align="center">
  Big Interger library used in the Beldex packages
</p>


> :warning: This project is under heavy development. Expect bugs & breaking changes.

## Installation

```bash
npm i @bdxi/beldex-bigint
```

## Usage

```js
const JSBigInt = require('@bdxi/beldex-bigint').BigInteger;
const amount = new JSBigInt('12300000');
const beldex_amount_format_utils = require('@bdxi/beldex-money-format')

const amount_str = beldex_amount_format_utils.formatMoney(amount);
```

-----

## License

See `LICENSE.txt` for license.

All source code copyright © 2023 by Beldex. All rights reserved.