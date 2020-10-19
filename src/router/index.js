import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import("../pages/home/home"),
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import("../pages/login/login"),
    },
    {
      path:"/city",
      name:'city',
      component:()=>import("../pages/city/city"),
    },
    {
      path:"/msite",
      name:'msite',
      component:()=>import("../pages/msite/msite"),
    }
  ]
})
