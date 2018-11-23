import Vue from 'vue'
//导入app根组件
import App from './App'
//导入路由模块
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

//引入vue-lazylad模块
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)

//导入图片预览组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// Vue.use(VuePreview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })


//设置接口跟路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/';
//设置表单数据提交格式
Vue.http.options.emulateHTTP = true;

//导入moment模块
import moment from 'moment'

// 定义全局filter
Vue.filter("dateFormat",(dateStr,pattern) => {
    return moment(dateStr).format(pattern)
})



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
