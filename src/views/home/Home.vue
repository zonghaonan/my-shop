<template>
  <div class="home">
    <van-nav-bar ref='myNav' title="首页">
    </van-nav-bar>
    <van-tabs class="top-tab" v-if="showTopTab" :border="false" v-model="active" :color="$store.state.tabColor"
      :title-active-color="$store.state.tabColor" @change="tabChange">
      <van-tab v-for="(item,index) in goods" :title="item.title" :key="index">
        <!-- 内容 -->
      </van-tab>
    </van-tabs>
    <scroll :style="height" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll"
      @load-more="loadMore">
      <home-swipe :banners="banners" @swipe-image-load="swipeImageLoad"></home-swipe>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <van-tabs ref="tab" :border="false" v-model="active" animated :color="$store.state.tabColor"
        :title-active-color="$store.state.tabColor" @change="tabChange">
        <van-tab v-for="(item,index) in goods" :title="item.title" :key="index">
          <show-goods :clickable='true' :goods="item.list" @goods-image-load="goodsImageLoad"></show-goods>
        </van-tab>
      </van-tabs>
    </scroll>
    <BackTop @click.native="backClick(-tabOffsetTop)" v-show="isShowBackTop"></BackTop>
  </div>
</template>
<script>
  import HomeSwipe from '@/views/home/childComps/HomeSwipe'
  import RecommendView from '@/views/home/childComps/RecommendView'
  import FeatureView from '@/views/home/childComps/FeatureView'
  import ShowGoods from '@/views/home/childComps/ShowGoods'
  import Scroll from 'components/Scroll'
  import {
    backTopMixin
  } from 'common/mixins.js'
  import {
    Toast
  } from 'vant';
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'
  import {
    debounce
  } from 'common/utils.js'
  export default {
    data() {
      return {
        height: {
          height: "",
        },
        banners: [],
        recommends: [],
        goods: [{
            type: 'pop',
            title: '流行',
            page: 0,
            list: []
          },
          {
            type: 'new',
            title: '新款',
            page: 0,
            list: []
          },
          {
            type: 'sell',
            title: '精选',
            page: 0,
            list: []
          }
        ],
        active: 0,
        tabOffsetTop: 0,
      }
    },
    mixins: [backTopMixin],
    components: {
      HomeSwipe,
      RecommendView,
      FeatureView,
      ShowGoods,
      Scroll,
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods(0)
      this.getHomeGoods(1)
      this.getHomeGoods(2)
    },
    mounted() {
      this.height.height = window.innerHeight - 60 - this.$refs.myNav.$el.offsetHeight + "px";
      console.log(this.height.height);
      // const refresh = debounce(this.$refs.scroll.refresh, 500)
      // this.$bus.$on('imageLoadFinished', () => {
      //   console.log(this.$refs.scroll);
      //  refresh()
      // })
    },
    destroyed() {
      // this.$bus.$off('imageLoadFinished')
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(result => {
          const res = result.data.data
          this.banners = res.banner.list
          this.recommends = res.recommend.list
          // console.log(res);
        })
      },
      getHomeGoods(index) {
        const page = this.goods[index].page + 1
        getHomeGoods(this.goods[index].type, page).then(result => {
          this.goods[index].list.push(...result.data.data.list)
          this.goods[index].page++
        })
      },
      tabChange() {
        if (this.showTopTab)
          this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 0)
      },
      goodsImageLoad() {
        // console.log(this.$refs.scroll);
        this.$refs.scroll.refresh()
      },
      swipeImageLoad() {
        console.log(this.$refs.tab.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tab.$el.offsetTop - 46
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
        this.showTopTab = (-position.y) >= this.tabOffsetTop
      },
      loadMore() {
        console.log('loadmore');
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
        });
        this.getHomeGoods(this.active)
      }
    }
  }
</script>
<style scoped>
  /* .home {
    position: relative;
    height: 100vh;
  } */

  /* .scroll {
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 60px;
  } */

  .top-tab {
    position: absolute;
    width: 100%;
    top: 46px;
    z-index: 9;
  }
</style>