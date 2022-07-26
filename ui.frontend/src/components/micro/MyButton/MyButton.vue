<template>
<div class="containerButton">
    <button :class="classButton" @click.prevent="event">{{ text }}</button>
</div>
</template>

<script>

export default {
  name: 'MyButton',
  props: {
    text: {
      type: String,
      default: 'defaut'
    },
    classButton: {
      type: String
    }
  },
  methods: {
    event () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './MyButton.scss';
</style>
