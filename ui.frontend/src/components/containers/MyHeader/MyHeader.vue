<template>
  <div class="header">
    <MyText :msg="textHeader" textClass="headerText" class="header-text"/>
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
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./MyHeader.scss";
</style>
