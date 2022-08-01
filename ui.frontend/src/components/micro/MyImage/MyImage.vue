<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'MyImage',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./MyImage.scss";
</style>
