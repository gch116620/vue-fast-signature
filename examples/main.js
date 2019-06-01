import Vue from 'vue'
import App from './App.vue'
import signature from '../packages/index'
Vue.use(signature)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
