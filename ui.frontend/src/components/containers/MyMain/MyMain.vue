<template>
  <div class="main">
    <div class="main-image">
      <MyImage :src="src" class="image" />
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
import MyImage from '../../micro/MyImage/MyImage.vue'
export default {
  // eslint-disable-next-line
    name: "MyMain",
  components: {
    MyTitle,
    MyText,
    MyButton,
    MyImage
  },
  props: {
    src: {
      type: String,
      default: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./MyMain.scss";
</style>
