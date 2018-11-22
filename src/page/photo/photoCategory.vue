<template>
    <div class="photoCategory-contanier">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="{'mui-control-item':true, 'mui-active':item.id == 0}" v-for="item in photoCategory" :key="item.id" @click="getPhotoList(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
		</div>

        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in photoList" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img src="item.img_url">
                <div class="info">
                <h1 class="info-title">{{ item.title }}</h1>
                <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>


<script>
import mui from '../../lib/mui/js/mui.js'

export default {
    data(){
        return{
            photoCategory:[],
            photoList:[]
        }
    },
    methods:{
        getPhotoCategory(){
            this.$http.get('api/getimgcategory').then(result => {
                if(result.body.status == 0){
                    // console.log(result.body.message)
                    result.body.message.unshift({title:"全部",id:0})
                    this.photoCategory = result.body.message
                    // console.log(this.photoCategory)
                }
            })
        },
        getPhotoList(cateId){
            this.$http.get('api/getimages/'+cateId).then(result => {
                if(result.body.status == 0){
                    this.photoList = result.body.message
                    console.log(this.photoList)
                }

            })
        }
    },
    created(){
        this.getPhotoCategory()
        this.getPhotoList(0)
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style lang="less">
    .photoCategory-contanier{
       a{
           text-decoration: none;
       }
    }
</style>

