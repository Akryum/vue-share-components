import Vue from 'vue'
import App from './App.vue'

/* import '../../dist/test.css'
import Test from '../../dist/test' */

import Plugin, { Test } from '../../template'
console.log(Plugin)
console.log(Test)

// Vue.use(Plugin)
Vue.component('test', Test)

new Vue({
  el: '#app',
  render: h => h(App)
})
