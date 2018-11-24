<template>
     <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.img">
        <a :href="item.url"><img :src="item.img" alt="" /> </a>
      </mt-swipe-item>
      <!--
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      -->
    </mt-swipe>
</template>


<script>
export default {
    props:['bannerList']
}
</script>

<style lang="less">
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
                    height: 100%;
               }
               .full{
                   width: 100%;
               }
          }
      }
      
    }
</style>
