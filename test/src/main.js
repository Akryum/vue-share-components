import Vue from 'vue'
import App from './App.vue'

/* import '../../template-test/dist/test.css'
import Test from '../../template-test/dist/test' */

import T from '../../template-test/dist/test'
console.log(T)

import Plugin, { Test } from '../../template-test'
console.log(Plugin)
console.log(Test)

// Vue.use(Plugin)
Vue.component('test', Test)

new Vue({
  el: '#app',
  render: h => h(App)
})
