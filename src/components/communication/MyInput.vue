<template>
  <div ref="div" class="my-input" contenteditable="true" @input="inputEvent($event.target.innerText)"></div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ['inputContent'],
    model: {
      prop: 'inputContent',
      event: 'change'
    },
    watch: {
      inputContent() {
        if (!this.inputContent) {
          this.$refs.div.innerText = this.inputContent
        }
      }
    },
    methods: {
      inputEvent(value) {
        this.$emit('change', value)
      },
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
  }

  .my-input:focus {
    outline: none;
  }

  .my-input::-webkit-scrollbar {
    width: 0;
  }
</style>