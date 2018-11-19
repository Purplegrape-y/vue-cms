import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '../page/home/'
import membleComponent from '../page/memble/'
import shopcarComponent from '../page/shopcar/'
import seachComponent from '../page/search/'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/home",component:homeComponent},
    {path:"/memble",component:membleComponent},
    {path:"/shopcar",component:shopcarComponent},
    {path:"/search",component:seachComponent},
    {path:"/",redirect:'/home'}
  ],
  linkActiveClass:'mui-active'
})
