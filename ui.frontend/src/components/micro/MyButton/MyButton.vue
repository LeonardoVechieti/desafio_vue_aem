<template>
<div >
    <button class="button" @click.prevent="event">{{ text }}</button>
</div>
</template>

<script>

export default {
  name: 'MyButton',
  props: {
    text: {
      type: String,
      default: 'defaut'
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
