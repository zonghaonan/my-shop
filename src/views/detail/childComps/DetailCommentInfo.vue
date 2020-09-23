<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{$moment(commentInfo.created*1000).format('YYYY年MM月DD日 HH:mm:ss')}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img v-for="(item,index) in commentInfo.images" :src="item" alt="" :key="index">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      commentInfo: {
        type: Object,
        default () {
          return {}
        }
      },
    },
    methods: {}
  }
</script>
<style scoped>
  .comment-info {
    padding: 10px;
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .header-title {
    float: left;
    font-size: 15px;
  }

  .header-more {
    float: right;
    font-size: 15px;
  }

  .header-more .van-icon {
    position: relative;
    top: 2px;
  }

  .info-user {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .info-user img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .info-detail,
  .info-other {
    margin-top: 10px;
  }

  .date {
    font-size: 13px;
    margin-right: 10px;
  }

  .info-imgs img {
    width: 80px;
    height: 80px;
    padding: 10px 5px;
    object-fit: cover;
  }
</style>