# {{ name }}

[![npm](https://img.shields.io/npm/v/{{ name }}.svg) ![npm](https://img.shields.io/npm/dm/{{ name }}.svg)](https://www.npmjs.com/package/{{ name }})
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

{{ description }}

# Installation

```
npm install --save {{ name }}
```

## Default import

Install all the components:

```javascript
import Vue from 'vue'
import {{ library }} from '{{ name }}'

Vue.use({{ library }})
```

Use specific components:

```javascript
import Vue from 'vue'
import { Test } from '{{ name }}'

Vue.component('test', Test)
```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Distribution import

```javascript
import '{{ name }}/dist/{{ name }}.css'
import {{ library }} from '{{ name }}/dist/{{ name }}'

Vue.use({{ library }})
```

## Browser

```html
<link rel="stylesheet" href="{{ name }}/dist/{{ name }}.css"/>

<script src="vue.js"></script>
<script src="{{ name }}/dist/{{ name }}.js"></script>
```

Install all the components:

```javascript
Vue.use({{ library }})
```

Use specific components:

```javascript
Vue.component('test', {{ library }}.Test)
```

## Source import

Install all the components:

```javascript
import Vue from 'vue'
import {{ library }} from '{{ name }}/src'

Vue.use({{ library }})
```

Use specific components:

```javascript
import Vue from 'vue'
import { Test } from '{{ name }}/src'

Vue.component('test', Test)
```

**⚠️ You need to configure your bundler to compile `.vue` files.** More info [in the official documentation](https://vuejs.org/v2/guide/single-file-components.html).

# Usage

> TODO

# Example

> TODO

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
