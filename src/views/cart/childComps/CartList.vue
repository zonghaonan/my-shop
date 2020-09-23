<template>
  <div>
    <div class="cart-list-item" v-for="(item,index) in cartList" :key="index">
      <div class="item-selector">
        <check-button :isChecked="item.isChecked" @click.native="checkClick(item)"></check-button>
      </div>
      <img :src="item.image" alt="商品图片" class="item-img">
      <div class="item-info">
        <h3>{{item.title}}</h3>
        <p>{{item.desc}}</p>
        <div class="info-bottom">
          <div class="price">￥{{item.price}}</div>
          <div class="count">x{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CheckButton from '@/components/CheckButton'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {}
    },
    components: {
      CheckButton
    },
    props: {
      cartList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      checkClick(item) {
        item.isChecked = !item.isChecked
        console.log(this.cartList);
      }
    }
  }
</script>
<style scoped>
  .item-img {
    width: 80px;
    height: 100px;
    object-fit: cover;
  }

  .cart-list-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px rgba(100, 100, 100, .2) solid;
  }

  .item-selector {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .item-info {
    flex: 1;
    position: relative;
    overflow: hidden;
    padding: 5px 10px;
  }

  .item-info h3,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
  }

  .info-bottom {
    position: absolute;
    bottom: 5px;
    left: 10px;
    right: 10px;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
  }

  .info-bottom .price {
    color: orangered;
  }
</style>