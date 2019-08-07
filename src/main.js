import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/header'
import footer from './components/footer'

Vue.component("my-header",header)
Vue.component("my-footer",footer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
