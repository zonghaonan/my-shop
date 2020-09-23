<template>
  <van-icon size="20" class="check-button" :class="{check:isChecked}" name="success" color="white" />
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      isChecked: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .check-button {
    border-radius: 50%;
    border: 1px rgba(100, 100, 100, .7) solid;
  }

  .check {
    background-color: red;
    border-color: red;
  }
</style>