<template>
  <div class="main">
    <div class="main-image">
      <p>ola Image</p>
    </div>
    <div class="main-content">
      <div class="title">
        <MyTitle msg="I have bad news for you" titleClass="title-main"/>
      </div>
      <div class="text">
        <MyText msg="The page you are looking for might be removed or is temporarily unavailable" textClass="mainText"/>
      </div>
      <MyButton text="BACK TO HOMEPAGE"/>
    </div>
  </div>
</template>

<script>
import MyTitle from '../../micro/MyTitle/MyTitle.vue'
import MyText from '../../micro/MyText/MyText.vue'
import MyButton from '../../micro/MyButton/MyButton.vue'
export default {
  // eslint-disable-next-line
    name: "MyMain",
  components: {
    MyTitle,
    MyText,
    MyButton
  }

}
</script>

<style lang="scss" scoped>
@import "./MyMain.scss";
</style>
