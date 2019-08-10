import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
 import Index from './views/index'
 import playList from './views/playList'
 import song from './views/Song'
 import play from './views/play'
 import play1 from './views/play1'
 import mv from './views/Mv'
 import mv1 from './views/Mv1'
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
     { path: '/play', component: play },
     { path: '/play1', component: play1 },
     { path: '/mv', component:mv },
    { path: '/mv1', component:mv1 }
   ]
})
