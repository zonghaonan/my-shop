<template>
  <div class="detail">
    <detail-nav-bar ref='myNav' @titleClick='titleClick'></detail-nav-bar>
    <scroll :style="height" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <!-- <div v-for="item in $store.state.cartList" :key="item.iid">
        {{ item }}
      </div> -->
      <detail-swipe :topImages='topImages'></detail-swipe>
      <detail-base-info :goods="goods"></detail-base-info>
      <div style="background-color: rgba(100,100,100,.1);height: 4px;"></div>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <div style="background-color: rgba(100,100,100,.1);height: 4px;"></div>
      <detail-image-info :detailInfo='detailInfo' @detail-image-load="imageLoaded" />
      <detail-params-info ref="params" :params-info="paramsInfo" @params-image-load="imageLoaded" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <show-goods ref="recommend" :goods="recommend" @goods-image-load="imageLoaded"></show-goods>
    </scroll>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" :badge="cartLength" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="" />
    </van-goods-action>
    <BackTop @click.native="backClick(0)" v-show="isShowBackTop"></BackTop>
  </div>
</template>
<script>
  import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
  import DetailSwipe from '@/views/detail/childComps/DetailSwipe'
  import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
  import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo'
  import DetailImageInfo from '@/views/detail/childComps/DetailImageInfo'
  import DetailParamsInfo from '@/views/detail/childComps/DetailParamsInfo'
  import DetailCommentInfo from '@/views/detail/childComps/DetailCommentInfo'
  import ShowGoods from '@/views/home/childComps/ShowGoods'
  import Scroll from 'components/Scroll'
  import {
    debounce
  } from 'common/utils.js'
  import {
    backTopMixin
  } from 'common/mixins.js'
  import {
    mapGetters
  } from 'vuex'
  import {
    mapActions
  } from 'vuex'
  import {
    getDetail,
    getRecommend,
    Goods,
    Shop,
  } from 'network/detail.js'
  export default {
    name: 'Detail',
    data() {
      return {
        height: {
          height: "",
        },
        iid: '',
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramsInfo: {},
        commentInfo: {},
        recommend: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        isTitleClick: false
      }
    },
    components: {
      DetailNavBar,
      DetailSwipe,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImageInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      ShowGoods,
      Scroll
    },
    mixins: [backTopMixin],
    mounted() {
      this.height.height = window.innerHeight - 50 - this.$refs.myNav.$el.offsetHeight + "px";
      this.iid = this.$route.params.iid
      getDetail(this.iid).then((res) => {
        console.log(res);
        const result = res.data.result
        this.topImages = result.itemInfo.topImages
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
        this.shop = new Shop(result.shopInfo)
        this.detailInfo = result.detailInfo
        this.paramsInfo = result.itemParams
        if (result.rate.cRate !== 0) {
          this.commentInfo = result.rate.list[0]
        }
      })
      getRecommend().then(res => {
        console.log(res);
        this.recommend = res.data.data.list
      })
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 46)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 46)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 46)
        this.themeTopYs.push(Number.MAX_VALUE)
        console.log(this.themeTopYs);
      }, 200)
    },
    computed: {
      ...mapGetters(['cartLength']),
    },
    methods: {
      ...mapActions(['addCart']),
      imageLoaded() {
        // console.log('finish');
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      contentScroll(position) {
        const ps = (-position.y)
        console.log(ps);
        // console.log(!this.isTitleClick);
        if (this.themeTopYs.length === 5 && !this.isTitleClick) {
          for (let i = 0; i < this.themeTopYs.length - 1; i++) {
            if (this.currentIndex !== i) {
              // if (i !== this.themeTopYs.length - 1) {
              //   // console.log(i);
              //   if (ps >= this.themeTopYs[i] && ps < this.themeTopYs[i + 1]) {
              //     this.currentIndex = i
              //     console.log(this.currentIndex);
              //     this.$refs.nav.currentIndex = i
              //   }
              // } else if (ps >= this.themeTopYs[i]) {
              //   this.currentIndex = i
              //   console.log(this.currentIndex);
              //   this.$refs.nav.currentIndex = i
              // }
              if (ps >= this.themeTopYs[i] && ps < this.themeTopYs[i + 1]) {
                console.log(i);
                this.currentIndex = i
                this.$refs.myNav.currentIndex = i
                break
              }
            }
          }
        }
        this.isShowBackTop = (-position.y) > 1000
      },
      titleClick(index) {
        this.isTitleClick = true
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
        setTimeout(() => {
          this.isTitleClick = false
        }, 500);
      },
      addToCart() {
        if (this.topImages[0]) {
          const product = {}
          product.iid = this.iid
          product.image = this.topImages[0]
          product.title = this.goods.title
          product.price = this.goods.realPrice
          product.desc = this.goods.desc
          this.addCart(product).then(res => {
            console.log(res);
          })
          // this.$store.dispatch('addCart', product).then(res => {
          //   console.log(res);
          // })
        }
        // this.productCount = this.$store.state.cartList.length
      },
      toCart() {
        this.$router.push('/cart')
        this.$store.state.tabBarActive = 2
      }
    }
  }
</script>
<style scoped>
  .detail {
    position: relative;
    background-color: #fff;
    z-index: 10;
  }

  .van-goods-action {
    /* position: relative; */
  }
</style>