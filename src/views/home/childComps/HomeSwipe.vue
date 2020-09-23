<template>
  <van-swipe :indicator-color="$store.state.tabColor" width="100%" height="200" :autoplay="4000" :stop-propagation="false">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <van-image lazy-load fit="cover" width="100%" height="100%" :src="item.image" @load="loadFinished">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error></template>
        </van-image>
      </a>
    </van-swipe-item>
  </van-swipe>
  <!-- <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <van-image lazy-load fit="cover" width="100%" height="100%" :src="item.image">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error></template>
        </van-image>
      </a>
    </mt-swipe-item>
  </mt-swipe> -->
</template>
<script>
  export default {
    data() {
      return {
        isLoad:false
      }
    },
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    methods: {
      loadFinished(){
        if(!this.isLoad){
          this.$emit('swipe-image-load')
          this.isLoad=true
        }
      }
    }
  }
</script>
<style scoped>
  .mint-swipe {
    height: 200px;
  }
</style>