<template>
  <van-grid :gutter="8" :column-num="2">
    <van-grid-item v-for="(item,index) in goods" :to="clickable?{name:'Detail',params:{iid:item.iid}}:''" :key="index">
      <van-image width="100%" height="100%" fit="cover" :src="showImage(item)" @load="loadFinished">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error></template>
      </van-image>
      <div class="text">
        <!-- <p class="title">{{item.title}}</p> -->
        <div class="van-ellipsis title">{{item.title}}</div>
        <span class="price">￥{{item.price}}</span>
        <van-icon class="like" name="like" color="red" />
        <span>{{item.cfav}}</span>
      </div>
    </van-grid-item>
  </van-grid>
</template>
<script>
  export default {
    data() {
      return {
        active: 0
      }
    },
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      },
      clickable: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    computed: {
      showImage() {

        return item => item.image || item.show.img
      }
    },
    methods: {
      loadFinished() {
        // this.$bus.$emit('imageLoadFinished')
        this.$emit('goods-image-load')
      }
    }
  }
</script>
<style scoped>
  .van-grid-item {
    overflow: hidden;
  }

  .van-grid-item .text {
    width: 100%;
    /* text-align: center; */
    font-size: 16px;
    margin-top: 5px;
  }

  .price {
    color: red;
  }

  .like {
    margin-left: 10px;
    margin-right: 3px;
  }
</style>