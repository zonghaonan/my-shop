<template>
  <div>
    <van-nav-bar ref="myNav">
      <template #title>
        购物车({{cartLength}})
      </template>
    </van-nav-bar>
    <scroll :style='height' ref="scroll" :probe-type="3" @scroll="">
      <cart-list :cartList="cartList"></cart-list>
    </scroll>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox checked-color="red" v-model="checked" @click="allChecked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
  import CartList from '@/views/cart/childComps/CartList'
  import Scroll from '@/components/Scroll'
  import {
    mapGetters
  } from 'vuex'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        height: {
          height: ''
        },
      }
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList']),
      // ...mapGetters({
      //   length:'cartLength',
      //   list:'cartList'
      // })
      totalPrice() {
        let price = 0
        for (const item of this.cartList) {
          if (item.isChecked) {
            price += item.price * item.count
          }
        }
        return price * 100
      },
      checked: {
        get() {
          if (this.cartList.length === 0) return false
          return !this.cartList.find(item => !item.isChecked)
        },
        set() {}
      }
    },
    components: {
      CartList,
      Scroll,
    },
    mounted() {
      this.height.height = window.innerHeight - 110 - this.$refs.myNav.$el.offsetHeight + 'px'
    },
    activated() {
      console.log('activated');
      this.$refs.scroll.refresh()
    },
    methods: {
      onSubmit() {
        if (this.cartList.find(item => item.isChecked)) {
          console.log('结算');
        } else {
          Toast('请选择商品')
        }
      },
      allChecked() {
        if (this.checked)
          this.cartList.forEach(item => item.isChecked = false)
        else
          this.cartList.forEach(item => item.isChecked = true)
      }
    }
  }
</script>
<style scoped>
  .van-submit-bar {
    /* height: 40px; */
    position: relative;
    background-color: #eee;
    box-shadow: 0 -1px 10px rgba(100, 100, 100, .3);
  }
</style>