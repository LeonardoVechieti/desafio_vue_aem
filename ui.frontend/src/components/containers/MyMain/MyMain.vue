<template>
  <div class="main">
    <div class="main-image">
      <!-- <MyImage :src="src" class="image" /> -->
    </div>
    <div class="main-content">
      <div class="title">
        <MyTitle :msg="textTitle" :titleClass="fontTitle" :type="nivelTitle"/>
      </div>
      <div class="text">
        <MyText :msg="textDescription" textClass="mainText" :fontText="fontText"/>
      </div>
      <MyButton :textButton="textButton" :fontButton="fontButton" :textColor="textColor" :colorButton="colorButton"/>
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
  },
  props: {
    textTitle: {
      type: String,
      default: 'I have bad news for you'
    },
    fontTitle: {
      type: String,
      default: 'space-mono'
    },
    nivelTitle: {
      type: String,
      default: 'h1'
    },
    fontText: {
      type: String,
      default: 'Space Mono'
    },
    textDescription: {
      type: String,
      default: 'The page you are looking for might be removed or is temporarily unavailable'
    },
    textButton: {
      type: String,
      default: 'BACK TO HOMEPAGE'
    },
    fontButton: {
      type: String,
      default: 'Space Mono'
    },
    textColor: {
      type: String,
      default: '#ffffff'
    },
    colorButton: {
      type: String,
      default: '#000000'
    }

  }

}
</script>

<style lang="scss" scoped>
@import "./MyMain.scss";
</style>
