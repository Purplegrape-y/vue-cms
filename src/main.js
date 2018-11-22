import Vue from 'vue'
//导入app根组件
import App from './App'
//导入路由模块
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入moment模块
import moment from 'moment'

// 定义全局filter
Vue.filter("dateFormat",(dateStr,pattern) => {
    return moment(dateStr).format(pattern)
})

Vue.http.options.root = 'http://www.lovegf.cn:8899/';

//引入header组件
import {Header,Swipe, SwipeItem,Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

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
