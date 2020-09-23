<template>
  <div class="scroll" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  import ScrollBar from '@better-scroll/scroll-bar'
  // 注册插件
  BScroll.use(Pullup)
  BScroll.use(ScrollBar)
  export default {
    data() {
      return {
        scroll: '',
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      scrollbar: {
        type: Boolean,
        default: false
      },
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        scrollbar: this.scrollbar,
        click: true,
      })
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', position => {
          // console.log(position);
          this.$emit('scroll', position)
        })
      }
      if (this.pullUpLoad) {
        //pullUpLoad必须设置为true才可以调用pullingUp
        this.scroll.on('pullingUp', () => {
          console.log('下拉加载更多');
          this.$emit('load-more')
          console.log('加载完成');
          //必须调用下面的方法，才能监听下次下拉到底部
          this.scroll.finishPullUp()
        })
      }
    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        console.log("----");
        this.scroll && this.scroll.refresh()
      },
      //滑动到最底部
      scrollToEndFlag(time) {
        this.scroll && this.scrollTo(0, this.scroll.maxScrollY, time)
      }
    }
  }
</script>
<style scoped>
</style>