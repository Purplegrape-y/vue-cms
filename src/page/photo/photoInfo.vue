<template>
    <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat('YYYY-MM-DD') }}</span>
      <span class="mui-pull-right">点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <!-- <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
    </div> -->
    <vue-preview :slides="photoImg" ></vue-preview>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <comment :id="id"></comment>
  </div>
</template>

<script>
//引入评论组件
import commentList from '../../components/comment/'

export default {
    data(){
        return {
            id:this.$route.params.cateid,
            photoinfo:[],
            photoImg:[]
        }
    },
    created(){
        this.getPhotoInfo()
        this.getImg()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result => {
                // console.log(this.id)
                if(result.body.status == 0){
                    //  console.log(result.body)
                    this.photoinfo = result.body.message[0]   
                }
            })
        },
        getImg(){
            this.$http.get('api/getthumimages/'+this.id).then(result => {
                if(result.body.status == 0){
                    // console.log(result.body)
                    // result.body.message.forEach(item => {
                    //     item.w = 600;
                    //     item.h = 400;
                    // });
                    // this.photoImg = result.body.message
                    this.photoImg = [
                        {
                            src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1521291370,24601344&fm=200&gp=0.jpg',
                            msrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1521291370,24601344&fm=200&gp=0.jpg',
                            w: 600,
                            h: 400,
                            title:11
                        },
                        {
                            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2050541434,3011690791&fm=200&gp=0.jpg',
                            msrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2050541434,3011690791&fm=200&gp=0.jpg',
                            w: 600,
                            h: 400,
                            title:222
                        },
                        {
                            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2748694675,4287383598&fm=26&gp=0.jpg',
                            msrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2748694675,4287383598&fm=26&gp=0.jpg',
                            w: 600,
                            h: 400,
                            title:333
                        },
                    ]

                    console.log(this.photoImg)
                }
            })
        }
    

    },
    components:{
        comment:commentList
    }
}
</script>

<style lang="less">
    .photoinfo-container{
        padding:5px;
        h3{
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
        .my-gallery{
            figure{
                display: inline;
                margin:0;
                a{
                    img{
                        width: 100px;
                       
                    }
                }
            }
            
        }
    }
</style>
