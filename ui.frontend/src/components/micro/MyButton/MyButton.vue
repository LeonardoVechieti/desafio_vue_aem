<template>
<div >
    <button class="button" :style="{ 'color': textColor , 'font-family': fontButton , 'background-color': colorButton , 'border-radius': borderRadius }" @click.prevent="event" >{{ textButton }}</button>
</div>
</template>

<script>

export default {
  name: 'MyButton',
  props: {
    textButton: {
      type: String,
      default: 'Button'
    },
    textColor: {
      type: String,
      default: '#ffffff'
    },
    fontButton: {
      type: String,
      default: 'Space Mono'
    },
    colorButton: {
      type: String,
      default: '#333333'
    },
    borderRadius: {
      type: String,
      default: '0'
    }
  },
  methods: {
    event () {
      // this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './MyButton.scss';
</style>
