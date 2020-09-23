<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="image-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item1,index1) in detailInfo.detailImage">
      <h4 class="key">{{item1.key}}</h4>
      <div v-for="(item2,index2) in item1.list" class="list">
        <van-image width="100%" height="100%" fit="cover" :src="item2" @load="loadFinished">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error></template>
        </van-image>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      detailInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      loadFinished(){
        // this.$bus.$emit('imageLoadFinished')
        this.$emit('detail-image-load')
      }
    }
  }
</script>
<style scoped>
  .image-info {
    padding: 10px;
  }

  .start {
    float: left;
    background-color: rgba(100, 100, 100, .5);
    width: 100px;
    height: 1px;
    position: relative;
  }

  .end {
    float: right;
    background-color: rgba(100, 100, 100, .5);
    width: 100px;
    height: 1px;
    position: relative;
  }

  .start::before,
  .end::after {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
  }

  .end::after {
    right: 0;
  }

  .desc {
    padding: 10px 0;
  }

  .key {
    padding: 10px 0;
  }
</style>