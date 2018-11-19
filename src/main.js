import Vue from 'vue'
//导入app根组件
import App from './App'
//导入路由模块
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

//引入header组件
import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//引入mui
import './lib/mui/css/mui.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

//引入自己的样式
import './common/css/base.css'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
