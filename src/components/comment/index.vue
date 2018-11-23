<template>
    <div class="comment-container">
        <h4>评论专区</h4>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment" >发表评论</mt-button>

        <div class="cmt-list">
          <div class="cmt-item" v-for="(item, i) in commentList" :key="i">
            <div class="cmt-title">
              第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat('YYYY-MM-DD') }}
            </div>
            <div class="cmt-body">
              {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
            </div>
          </div>
        </div>

        <mt-button type="danger" size="large" plain @click = "getMore">加载更多</mt-button> 
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
           pageIndex:1,
           commentList:[],
           msg:''
        }
    },
    created(){
        this.getComment()
    },
    methods:{
        getComment(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex= '+ this.pageIndex).then(result => {
                if(result.body.status == 0){
                    this.commentList = this.commentList.concat(result.body.message)
                    // console.log(this.commentList)

                }
            })
        },
        getMore(){
            this.pageIndex++
            this.getComment()
        },
        postComment(){

             // 校验是否为空内容
            if (this.msg.trim().length === 0) {
                return Toast("评论内容不能为空！");
            }

            this.$http.post('api/postcomment/'+this.id,{content:this.msg}).then(result =>{
                if(result.body.status == 0){
                    this.pageIndex = 1
                    this.commentList = []
                    this.getComment()
                    this.msg = ''
                    return Toast(result.body.message)
                }
            })
        }
    },
    props: ["id"]
}
</script>

<style lang="less">
 .comment-container{
    h4 {
        text-align: center;
        font-weight: 700;
        font-size: 18px;
        margin-top:10px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
 }
</style>


