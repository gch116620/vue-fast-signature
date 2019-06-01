import signature from './main.vue'

signature.install = function (Vue) {
    Vue.component(signature.name, signature)
}

export default signature