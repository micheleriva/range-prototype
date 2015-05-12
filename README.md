# Range Prototype

[![Build Status](https://travis-ci.org/micheleriva/range-prototype.svg?branch=master)](https://travis-ci.org/micheleriva/range-prototype)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Extend your JavaScript `Number` type with a **100 bytes** polyfill:

```js
require('range-prototype')

const list = [...10] // => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

# Installation

**yarn**
```sh
$ yarn add range-prototype
```

**npm**
```sh
$ npm install range-prototype
```

then simply require it in your project:
```js
require('range-prototype')
```

**For old browsers**
```html
<script src="https://cdn.jsdelivr.net/npm/range-prototype@0.0.1/es5.js"></script>

<script>
[...5] // => [ 0, 1, 2, 3, 4 ]
</script>
```

# License
[MIT](/LICENSE.md)