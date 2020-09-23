<template>
  <div>
    <scroll :style="height" ref='scroll' :probe-type="3">
    </scroll>
  </div>
</template>
<script>
  import Scroll from '@/components/Scroll'
  export default {
    data() {
      return {
        height: {
          height: "",
        },
      }
    },
    components: {
      Scroll
    },
    mounted() {
      this.height.height = window.innerHeight - 60 + "px";
    },
    methods: {}
  }
</script>
<style scoped>

</style>