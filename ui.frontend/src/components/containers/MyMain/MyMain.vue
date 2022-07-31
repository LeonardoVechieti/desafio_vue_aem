<template>
  <div class="main">
    <div class="main-image">
    </div>
    <div class="main-content">
      <div class="title">
        <MyTitle :msg="textTitle" :titleClass="fontTitle" :type="nivelTitle" :titleColor="titleColor"/>
      </div>
      <div class="text">
        <MyText :msg="textDescription" textClass="mainText" :fontText="fontText" :textColor="contentColor"/>
      </div>
      <div class="button">
        <MyButton :textButton="textButton" :buttonClass="buttonClass" :buttonColor="buttonColor" :fontText="fontText"/>
      </div>
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
      default: '#333333'
    },
    titleColor: {
      type: String,
      default: '#000000'
    },
    contentColor: {
      type: String,
      default: '#000000'
    }

  }

}
</script>

<style lang="scss" scoped>
@import "./MyMain.scss";
</style>
