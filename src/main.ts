import Vue from 'vue'
import App from './App.vue'
import './directives/prism.ts'

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
