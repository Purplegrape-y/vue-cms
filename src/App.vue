<template>
  <div id="app-container">
    <!-- 头部区域 -->
    <mt-header fixed title="cms">
        <mt-button icon="back" slot="left" @click="back" v-show="flag">返回</mt-button>   
    </mt-header>

    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="my-mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="my-mui-tab-item" to="/memble">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="my-mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="my-mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>


    <!-- 中间区域 -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag:false
    }
  },
  updated(){
      this.flag=!(this.$route.fullPath === "/home")
      // console.log(1)
      // console.log(this.$route.fullPath);
      console.log(this)
  },
  methods:{
    back(){
      window.history.go(-1)  
    },
  }
};
</script>

<style lang='less'>
  #app-container {
    padding: 40px 0 60px 0;
    overflow-x: hidden;
    .v-enter,{
      opacity: 0;
      transform: translateX(100%);
    }
    .v-leave-to{
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s ease;
    }

    .mui-bar-tab .my-mui-tab-item.mui-active {
      color: #007aff;
    }
    .mui-bar-tab .my-mui-tab-item {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon ~ .mui-tab-label {
      font-size: 11px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mint-header-button.is-left{
      height: 100%;
    }
  }
</style>
