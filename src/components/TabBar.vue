<template>
  <van-tabbar v-model="$store.state.tabBarActive" active-color="blue" inactive-color="#000">
    <van-tabbar-item replace to="/home" class="iconfont icon-shouye"><span class="icon-title">首页</span>
    </van-tabbar-item>
    <van-tabbar-item replace to="/category" class="iconfont icon-fenlei"><span class="icon-title">分类</span>
    </van-tabbar-item>
    <van-tabbar-item replace to="/cart" class="iconfont icon-caigou-xianxing"><span class="icon-title">购物车</span>
    </van-tabbar-item>
    <van-tabbar-item replace to="/communication" class="iconfont icon-gerenzhongxin"><span class="icon-title">我的</span>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .iconfont {
    font-size: 22px;
  }

  .icon-title {
    font-size: 16px;
  }

  .van-tabbar {
    padding: 5px 0;
    background-color: var(--color-tint);
    /* 导航栏抖动问题，加如下两个样式 */
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
</style>