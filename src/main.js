import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Button } from '@nutui/nutui'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'

// Vue.use(Button)
Vue.use(NutUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
