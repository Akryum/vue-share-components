import Vue from 'vue'
import App from './App.vue'

/* import '../../template/dist/test.css'
import Test from '../../template/dist/test' */

import T from '../../template/dist/test'
console.log(T)

import Plugin, { Test } from '../../template'
console.log(Plugin)
console.log(Test)

// Vue.use(Plugin)
Vue.component('test', Test)

new Vue({
  el: '#app',
  render: h => h(App)
})
