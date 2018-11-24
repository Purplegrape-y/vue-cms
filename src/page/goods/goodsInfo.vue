<template>
    <div class="goodsInfo-container">
         <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipe :bannerList="bannerList" :isfull = 'false'></swipe>
        </div>
      </div>
    </div>


    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p> -->
        </div>
      </div>
    </div>


    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <!-- <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
        </div> -->
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain >图文介绍</mt-button>
        <mt-button type="danger" size="large" plain >商品评论</mt-button>
      </div>
    </div>

    </div>
    
</template>

<script>
import swipe from '../../components/swipe/'

export default {
    data(){
        return{
            id:this.$route.params.id,
            bannerList:[]
        }
    },
    created() {
      this.getBanner();
    },
     methods: {
      getBanner() {
        //获取轮播图数据的方法
        this.$http
          .get("api/getthumimages/"+this.id).then(result => {
                // console.log(result.body)
            if (result.body.status == 0) {
              //成功
              result.body.message.forEach(element => {
                  element.img = element.src
                  element.url=''
              });
              this.bannerList = result.body.message;
          //     console.log(this.bannerList)
            } else {
              Toast("加载图片失败....");
            }
          });
      }
    },
    components:{
      swipe
    }
}
</script>

<style lang="less">
    .goodsInfo-container {
        background-color: #eee;
        overflow: hidden;

        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }

        .mui-card-footer {
            display: block;
            button {
            margin: 15px 0;
            }
        }

        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top: 390px;
            left: 146px;
        }
    }
</style>
