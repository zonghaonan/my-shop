<template>
  <div class="shop" v-if="Object.keys(shop).length!==0">
    <div class="logo-name">
      <img class="logo" :src="shop.logo" alt="">
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="other">
      <div class="other-item">
        <div class="sell">
          <div class="sl">{{shop.sells|sellsFilter}}</div>
          <div>总销量</div>
        </div>
        <div class="goods-count">
          <div class="gc">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div style="background-color: rgba(100,100,100,.1);width: 2px;height: 40px;"></div>
      <div class="other-item">
        <table class="score-table">
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}} </td>
            <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span> </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      shop: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters: {
      sellsFilter(value) {
        let result = value
        if (result > 10000) {
          result = (result / 10000).toFixed(1) + '万'
        }
        return result
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .shop {
    padding: 10px;
  }

  .logo-name {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border: 1px rgba(100, 100, 100, .2) solid;
    border-radius: 50%;
  }

  .name {
    font-size: 18px;
  }

  .other {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .other-item {
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px;
  }

  .score-table {
    font-size: 14px;
  }

  .score-table td {
    padding: 5px;
  }

  .sell,
  .goods-count {
    flex: 1;
    font-size: 15px;
  }

  .sl,
  .gc {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .score {
    color: green;
  }

  .score-better {
    color: red;
  }

  .better span {
    color: white;
    background-color: green;
  }

  .better-more span {
    background-color: red;
  }

  .shop-bottom {
    margin: 0 0 15px 0; 
  }

  .enter-shop {
    width: 100px;
    text-align: center;
    padding: 5px;
    margin: 0 auto;
    background-color: lightgray;
    border-radius: 50px;
    
  }
</style>