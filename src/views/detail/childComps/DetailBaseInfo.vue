<template>
  <div class="base" v-if="Object.keys(goods).length!==0">
    <h3 class="title">{{goods.title}}</h3>
    <div class="price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <van-tag v-if="goods.discount" size="large" round class="discount" :color="goods.discountColor">{{goods.discount}}</van-tag>
    </div>
    <div class="other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service">
      <div class="service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
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
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {}
  }
</script>
<style scoped>
.base{
  padding: 10px;
}
.title{
  padding-bottom: 10px;
}
.n-price{
  font-size: 24px;
  color: var(--color-high-text);
  margin-right: 5px;
}
.o-price{
  margin-right: 5px;
  text-decoration: line-through;
}
.discount{
  position: relative;
  top: -5px;
}
.other{
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  border-bottom: 1px rgba(100,100,100,.1) solid;
}
.service{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 40px;
}
.service img{
  width: 15px;
  height: 15px;
  position: relative;
  top: 2px;
}
.service span{
  color: #000;
  font-size: 15px;
}
</style>