<template>
  <div>
    <MyHeader :textHeader="textHeader"/>
    <MyMain />
    <MyFooter :textFooter="textFooter"/>
  </div>
</template>

<script>
import MyHeader from '../../containers/MyHeader/MyHeader.vue'
import MyMain from '../../containers/MyMain/MyMain.vue'
import MyFooter from '../../containers/MyFooter/MyFooter.vue'
export default {
  name: 'PageError404',
  components: {
    MyHeader,
    MyMain,
    MyFooter
  },
  props: {
    textHeader: {
      type: String,
      default: '404 NOT FOUND'
    },
    textFooter: {
      type: String,
      default: 'created by Administrador'
    }
  }

}
</script>
