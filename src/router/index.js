import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '../page/home/'
import membleComponent from '../page/memble/'
import shopcarComponent from '../page/shopcar/'
import seachComponent from '../page/search/'
import newListComponent from '../page/new/newList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/home",component:homeComponent},
    {path:"/memble",component:membleComponent},
    {path:"/shopcar",component:shopcarComponent},
    {path:"/search",component:seachComponent},
    {path:"/",redirect:'/home'},
    {path:'/home/newList',component:newListComponent}
  ],
  linkActiveClass:'mui-active'
})
