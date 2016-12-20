# {{ name }}

{{ description }}

# Installation

```
npm install --save {{ name }}
```

# Usage

```
import Vue from 'vue'
import {{ library }} from '{{ name }}'

Vue.use({{ library }})
```

```
import Vue from 'vue'
import { Test } from '{{ name }}'

Vue.component('test', Test)
```

```
import '{{ name }}/dist/test.css'
import Test from '{{ name }}/dist/test'

Vue.use(Test)
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
