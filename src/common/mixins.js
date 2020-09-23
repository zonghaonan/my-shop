import BackTop from 'components/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
      showTopTab: false,
    }
  },
  methods: {
    backClick(offset) {
      this.$refs.scroll.scrollTo(0, offset, 500)
    },
  },
}