<template>
  <div class="textContainer">
    <p type="text" :class="textClass">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "MyText",
  props: {
    msg: {
      type: String,
      default: 'null'
    },
    textClass: {
      type: String,
      default: 'textClass'
    }
  }
}
</script>

<style lang="scss" scooped>
@import "./MyText.scss";
</style>
