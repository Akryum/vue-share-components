# {{ name }}

[![npm](https://img.shields.io/npm/v/{{ name }}.svg) ![npm](https://img.shields.io/npm/dm/{{ name }}.svg)](https://www.npmjs.com/package/{{ name }})
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

{{ description }}

# Installation

```
npm install --save {{ name }}
```

# Usage

```javascript
import Vue from 'vue'
import {{ library }} from '{{ name }}'

Vue.use({{ library }})
```

```javascript
import Vue from 'vue'
import { Test } from '{{ name }}'

Vue.component('test', Test)
```

```javascript
import '{{ name }}/dist/test.css'
import {{ library }} from '{{ name }}/dist/test'

Vue.use({{ library }})
```

---

# Plugin Development

## Installation

```
npm install
```

## Watch and compile

```
npm run dev
```

## Publish to npm

```
npm publish
```

## Manual build

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
