<template>
  <div class="footer">
    <MyText :msg="textFooter" textClass="footerText" class="footer-text" :fontText="fontText" :textColor="textColor"/>
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
    },
    fontText: {
      type: String,
      default: 'Montserrat'
    },
    textColor: {
      type: String,
      default: '#BDBDBD'
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./MyFooter.scss";
</style>
