import Vue from 'vue'
import App from './App'
import router from './router'

//引入header组件
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)

//引入mui
import './lib/mui/css/mui.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
