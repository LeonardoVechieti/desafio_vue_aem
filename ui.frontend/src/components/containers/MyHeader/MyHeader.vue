<template>
  <div class="header">
    <MyText :msg="textHeader" textClass="headerText" class="header-text" :textColor="textColor" :fontText="fontText"/>
  </div>
</template>

<script>
import MyText from '../../micro/MyText/MyText.vue'
export default {
  // eslint-disable-next-line
  name: "MyHeader",
  components: {
    MyText
  },
  props: {
    textHeader: {
      type: String,
      default: '404 NOT FOUND'
    },
    fontText: {
      type: String,
      default: 'Inconsolata'
    },
    textColor: {
      type: String,
      default: '#000000'
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./MyHeader.scss";
</style>
