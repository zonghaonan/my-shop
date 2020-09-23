<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length!==0">
    <table class="rule-table" v-for="(table,index) in paramsInfo.rule.tables" :key="index">
      <tr :class="['bdbottom',indey===0?'bdtop':'']" v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-table">
      <tr class="bdbottom" v-for="(tr,index) in paramsInfo.info.set" :key="index">
        <td v-for="(td,indey) in tr">{{td}}</td>
      </tr>
    </table>
    <van-image v-if="paramsInfo.info.images" width="100%" height="100%" fit="cover" :src="paramsInfo.info.images[0]" @load="loadFinished">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      <template v-slot:error></template>
    </van-image>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      paramsInfo: {
        typ: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      loadFinished(){
        // this.$bus.$emit('imageLoadFinished')
        this.$emit('params-image-load')
      }
    }
  }
</script>
<style scoped>
  .params-info {
    padding: 10px 20px;
  }

  .rule-table,
  .info-table {
    width: 100%;
    border-collapse: collapse;
  }

  .info-table td:nth-child(even) {
    color: red;
  }

  .info-table td:nth-child(odd) {
    width: 100px;
  }

  .bdbottom {
    border-bottom: 1px rgba(100, 100, 100, .3) solid;
  }

  .bdtop {
    border-top: 1px rgba(100, 100, 100, .3) solid;
  }

  table td {
    padding: 15px 0;
  }
  .van-image{
    margin-top: 10px;
  }
</style>