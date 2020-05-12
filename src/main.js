import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import VueHighlightJS from 'vue-highlightjs'

import './assets/arta.css'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(VueHighlightJS)

new Vue({
  render: h => h(App),
}).$mount('#app')
