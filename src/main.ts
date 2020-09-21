import { createApp } from 'vue'
import App from './App.vue'
import prism from './directives/prism'

const app = createApp(App)
app.directive('prism', prism)
app.mount('#app')

export {
  app
}
