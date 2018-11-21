<template>
    <div class="newInfo-container">
        <h4 class='title'>{{newInfo.title}}</h4>
        <p >
            <span class="ctime">发表时间：{{ newInfo.add_time | dateFormat('YYYY-MM-DD')}}</span>
            <span class="star mui-pull-right">点击:{{newInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html= 'newInfo.content'></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newid:this.$route.params.newid,
            newInfo:[]
        }
    },
    created(){
        this.getNewInfo()
    },
    methods:{
        getNewInfo(){
            this.$http.get('api/getnew/'+ this.newid).then(result => {
                if(result.body.status == 0){
                    this.newInfo = result.body.message[0]
                    console.log(this.newInfo)
                   
                }
            })
        }
    }
}
</script>

<style lang="less">
 .newInfo-container{
     margin: 0 5px;
     .title{
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        margin: 15px 0;
        color: red;
     }
     >p{
        font-size: 13px;
        color: #226aff;
     }
 }
</style>


