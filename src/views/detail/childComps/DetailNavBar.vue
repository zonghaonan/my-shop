<template>
  <van-nav-bar @click-left="$router.go(-1)">
    <template #left>
      <van-icon name="arrow-left" />
    </template>
    <template #title>
      <van-row gutter="20">
        <van-col class="title" :class="{active:index===currentIndex}" @click="titleClick(index)" v-for="(item,index) in titles"
          span="6" :key="index">{{item}}
        </van-col>
      </van-row>
    </template>
  </van-nav-bar>
</template>
<script>
  export default {
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      };
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick',index)
      }
    },
  };
</script>
<style scoped>
  .van-nav-bar {
    background-color: white;
  }

  .van-nav-bar .van-icon {
    font-size: 22px;
    color: black;
  }

  .title{
    color: black;
  }
  .active {
    color: var(--color-high-text);
  }
</style>