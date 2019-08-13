import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
 import Index from './views/index'
 import playList from './views/playList'
 import song from './views/Song'
 import play from './views/play'
 import mv from './views/Mv'
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
     { path: '/play/:lid', component: play,props:true },
     { path: '/mv', component:mv }
   ]
})
