<template>
  <van-swipe :indicator-color="$store.state.tabColor" width="100%" height="300" :autoplay="4000" :stop-propagation="false">
    <van-swipe-item v-for="(item, index) in topImages" :key="index">
      <!-- <a :href="item.link"> -->
        <van-image lazy-load fit="cover" width="100%" height="100%" :src="item" @load="loadFinished">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error></template>
        </van-image>
      <!-- </a> -->
    </van-swipe-item>
  </van-swipe>
</template>
<script>
  export default {
    data() {
      return {
        isLoad:false
      }
    },
    props: {
      topImages: {
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
</style>