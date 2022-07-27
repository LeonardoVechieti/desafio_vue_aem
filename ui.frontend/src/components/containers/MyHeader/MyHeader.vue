<template>
  <div class="header">
    <MyText msg="404 NOT FOUND" textClass="headerText" class="header-text"/>
  </div>
</template>

<script>
import MyText from '../../micro/MyText/MyText.vue'
export default {
  // eslint-disable-next-line
  name: "MyHeader",
  components: {
    MyText
  }

}
</script>

<style lang="scss" scoped>
@import "./MyHeader.scss";
</style>
