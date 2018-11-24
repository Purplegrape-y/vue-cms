<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.img">
        <a :href="item.url"><img :src="item.img" alt="" /> </a>
      </mt-swipe-item>
      <!--
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      -->
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <img src="../../assets/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoCategory">
          <img src="../../assets/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="../../assets/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    
    </ul>
  </div>
</template>

<script>
  import { Toast } from "mint-ui";

  export default {
    data() {
      return {
        bannerList: []
      };
    },
    created() {
      this.getBanner();
    },
    methods: {
      getBanner() {
        //获取轮播图数据的方法
        this.$http
          .get("api/getlunbo")
          .then(result => {
                // console.log(result.body)
            if (result.body.status == 0) {
              //成功
              this.bannerList = result.body.message;
          //     console.log(this.bannerList)
            } else {
              Toast("加载图片失败....");
            }
          });
      }
    }
  };
</script>

<style lang="less">
  .home-container {
    .mint-swipe {
      height: 200px;
      .mint-swipe-item{
           &:nth-child(1){
               background-color: yellow;
          }
          &:nth-child(2){
               background-color: pink;
          }
          a {
               display: block;
               width: 100%;
               height: 100%;
               img {
                    display: block;
                    width: 100%;
                    height: 100%;
               }
          }
      }
      
    }

    .mui-grid-view.mui-grid-9 {
          background-color: #fff;
          border: none;
          .mui-table-view-cell{
               border:0;
               img {
                    width: 60px;
                    height: 60px;
               }
                .mui-media-body{
                    font-size: 13px;
               }
          }        
     }
  }
</style>
