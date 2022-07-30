<template>
  <div class="footer">
    <MyText :msg="textFooter" textClass="footerText" class="footer-text"/>
  </div>
</template>

<script>
import MyText from '../../micro/MyText/MyText.vue'
export default {
  // eslint-disable-next-line
  name: "MyFooter",
  components: {
    MyText
  },
  props: {
    textFooter: {
      type: String,
      default: 'created by Administrador'
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./MyFooter.scss";
</style>
