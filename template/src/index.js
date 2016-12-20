import _Test from './components/Test.vue'

export function install (Vue) {
  Vue.directive('test', _Test)
}

export const Test = _Test

export default {
  install,
}
