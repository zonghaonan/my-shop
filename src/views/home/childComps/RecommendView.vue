<template>
  <van-grid :gutter="10" :border="false">
    <van-grid-item v-for="(item,index) in recommends" :url="item.link" :key="index">
      <img width="100%" :src="item.image" alt="">
      <div>{{item.title}}</div>
    </van-grid-item>
  </van-grid>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      recommends: {
        type: Array,
        default: []
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .van-grid {
    padding: 20px 0;
    border-bottom: 10px #eee solid;
  }

  .van-grid-item div {
    font-size: 15px;
    margin-top: 10px;
  }
</style>