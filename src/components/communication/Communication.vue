<template>
  <div class="communication">
    <van-nav-bar title="昵称" @click-left="returnHome">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-image fit="cover" v-show="true" width="100%" height="100%"
      src="http://pic54.photophoto.cn/20200117/0005018363378700_b.jpg"></van-image>
    <scroll :style="height" ref="scroll" :scrollbar="true">
      <div class="ct" :style="paddingBottom">
        <div class="ct-item" v-for="(item,index) in contents" :key="index">
          <div class="ct-title">
            <div>昵称:</div>
            <div>{{item.time}}</div>
          </div>
          <div class="ct-body">{{item.content}}</div>
          <hr>
        </div>
      </div>
    </scroll>
    <div class="foot">
      <my-input v-model="inputContent"></my-input>
      <van-button :disabled="inputContent?false:true" type="primary" @click="send">发送</van-button>
    </div>
  </div>
</template>
<script>
  import MyInput from './MyInput.vue'
  import Scroll from 'components/Scroll'
  export default {
    data() {
      return {
        height: {
          height: "",
        },
        bottom: '',
        inputContent: '',
        contents: [],
      }
    },
    computed: {
      paddingBottom() {
        return {
          'padding-bottom': this.bottom
        }
      }
    },
    components: {
      MyInput,
      Scroll
    },
    created() {
      this.$store.state.bgColor = 'rgba(255,255,255,0.5)'
      this.$store.state.fontColor = 'black'
    },
    mounted() {
      this.height.height = window.innerHeight - 46 + "px";
      // this.h()
    },
    updated() {
      this.h()
    },
    methods: {
      h() {
        console.log(document.getElementsByClassName('foot')[0].offsetHeight);
        this.bottom = document.getElementsByClassName('foot')[0].offsetHeight + 'px'
        this.$refs.scroll.refresh()
        // this.$refs.scroll.scrollToEndFlag(0)
      },
      send() {
        let date = new Date()
        const message = {
          time: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date
            .getHours() +
            ':' + date.getMinutes() + ':' + date.getSeconds(),
          content: this.inputContent
        }
        this.inputContent = ''
        setTimeout(() => {
          this.contents.push(message)
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
            this.$refs.scroll.scrollToEndFlag(300)
          })
        }, 100);
      },
      returnHome() {
        this.$router.replace('/home')
        this.$store.state.tabBarActive = 0
      }
    },
  }
</script>
<style scoped>
  .van-nav-bar .van-icon {
    font-size: 22px;
    color: white;
  }

  .ct-item {
    padding: 10px;
  }

  .ct-title {
    display: flex;
    justify-content: space-between;
  }

  .ct-body {
    width: 78%;
    padding: 10px 0;
    white-space: pre-line;
  }

  .van-image {
    position: fixed;
    left: 0;
    top: 0;
  }

  .foot {
    width: 100%;
    display: flex;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    background-color: rgba(240, 235, 235, 0.9);
  }

  .van-button {
    width: 60px;
    height: 33px;
    margin-right: 10px;
    margin-bottom: 12px;
  }

  .my-input {
    flex: 1;
    margin: 10px;
  }

  .scroll {
    position: relative;
    z-index: 0;
  }

  .communication {
    position: relative;
    background-color: #fff;
    z-index: 10;
  }
</style>