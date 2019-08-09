import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
 import Index from './views/index'
import playList from './views/playList'
import song from './views/Song'
// import Login from './views/Login'
// import NotFound from './views/NotFound'
//ES6

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  //   { path: '/', component: Home, children:[
         { path:"/", component: Index },
        { path:"/playList", component: playList },
        { path:"/song", component: song },
  //   ]},
  //   { path: '/login', component: Login },
  //   { path: '/*', component:NotFound }
   ]
})
