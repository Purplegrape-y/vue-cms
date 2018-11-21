<template>
    <div class="newlist-container">
        <!-- <h1>新闻列表页</h1> -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <router-link :to="'/home/newInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4 class='mui-ellipsis'>{{ item.title }}</h4>
                        <p >
                            <span class="ctime">发表时间：{{ item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                            <span class="star mui-pull-right">点击:{{ item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
	    </ul>
    </div>
    
</template>



<script>
 import { Toast } from "mint-ui";

export default {
    data(){
        return {
            newList:[]
        }
    },
   created() {
      this.getnewList();
    },
    methods:{
        getnewList(){
            this.$http.get('api/getnewslist').then((result => {
                if(result.body.status == 0){
                    this.newList = result.body.message
                    // console.log(this.newList)
                }else {
                    Toast("加载失败....");
                }
            }))
        }
    }
}
</script>


<style lang="less">
.newlist-container{
    .mui-table-view{
        .mui-ellipsis{
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        p{
            font-size: 12px;
            color:#0094ff;
        }
    }
}
</style>

