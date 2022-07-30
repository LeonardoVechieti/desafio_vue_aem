<template>
  <div>
    <p type="text" :class="textClass" :style="{ 'font-family': fontText , 'color': textColor }">{{ msg }}</p>
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
    },
    fontText: {
      type: String,
      default: 'Space Mono'
    },
    textColor: {
      type: String,
      default: '#000000'
    }
  }
}
</script>

<style lang="scss" scooped>
@import "./MyText.scss";
</style>
