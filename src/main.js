import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/header'
import footer from './components/footer'
import axios from 'axios'

Vue.component("my-header",header)
Vue.component("my-footer",footer)

 axios.defaults.withCredentials=true;
 axios.defaults.baseURL="http://127.0.0.1:3000/";
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
