<template>
  <div id="app">
    <keep-alive exclude='Detail'>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
  import TabBar from 'components/TabBar'

  export default {
    data() {
      return {}
    },
    components: {
      TabBar
    },
    methods: {},
    // created() {
    //   let str=['111','222']
    //   let str2=str;
    //   str2=['111','222','333']
    //   console.log('str='+str,'str2='+str2);
    // },
  }
</script>
<style scoped>
  #app {
    padding-bottom: 60px;
    overflow-x: hidden;
  }

  #app::-webkit-scrollbar {
    width: 0;
  }

  /* #app::-webkit-scrollbar-thumb {
    background-color: lightgray;
  } */

  /* 进入组件的样式 */
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  /* 出去组件的样式 */
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
</style>