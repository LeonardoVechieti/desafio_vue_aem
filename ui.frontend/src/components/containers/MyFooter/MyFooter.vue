<template>
  <div class="footer">
    <MyText msg="created by Leonardo Vechieti" textClass="footerText" class="footer-text"/>
  </div>
</template>

<script>
import MyText from '../../micro/MyText/MyText.vue'
export default {
  // eslint-disable-next-line
  name: "MyFooter",
  components: {
    MyText
  }

}
</script>

<style lang="scss" scoped>
@import "./MyFooter.scss";
</style>
