<template>
    <div class="comment-container">
        <h4>评论专区</h4>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
          <div class="cmt-item" v-for="(item, i) in commentList" :key="item.add_time">
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
export default {
    data(){
        return {
           pageIndex:1,
           commentList:[]
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
                    console.log(this.commentList)

                }
            })
        },
        getMore(){
            this.pageIndex++
            this.getComment()
        }
    },
    props: ["id"]
}
</script>

<style lang="less">
 .comment-container{
    h3 {
        font-size: 18px;
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


