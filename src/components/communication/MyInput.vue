<template>
  <div ref="div" class="my-input"
    @input="inputEvent($event.target.innerText)"></div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      value: {
        type: String,
        default: ''
      },
    },
    watch: {
      value() {
        if (!this.value) {
          this.$refs.div.innerText = this.value;
        }
      },
    },
    methods: {
      inputEvent(value) {
        this.$emit('input', value)
      },
      // onClick() {
      //   this.$refs.div.focus()
      // }
    }
  }
</script>
<style scoped>
  .my-input {
    min-height: 37px;
    max-height: 140px;
    line-height: 27px;
    padding: 5px 3px;
    overflow: auto;
    background-color: white;
    -webkit-user-modify: read-write-plaintext-only;
  }

  .my-input:focus {
    outline: none;
  }

  .my-input::-webkit-scrollbar {
    width: 0;
  }
</style>