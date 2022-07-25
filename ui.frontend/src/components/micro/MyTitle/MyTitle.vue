<template>
  <div class="title">
    <h1 :class="nameClass" v-if="type === 'h1'">{{ titleMsg }}</h1>
    <h2 :class="nameClass" v-if="type === 'h2'">{{ titleMsg }}</h2>
    <h3 :class="nameClass" v-if="type === 'h3'">{{ titleMsg }}</h3>
    <h4 :class="nameClass" v-if="type === 'h4'">{{ titleMsg }}</h4>
    <h5 :class="nameClass" v-if="type === 'h5'">{{ titleMsg }}</h5>
    <h6 :class="nameClass" v-if="type === 'h6'">{{ titleMsg }}</h6>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "MyTitle",
  props: {
    type: {
      type: String,
      default: 'h1',
      require: true
    },
    nameClass: {
      type: String,
      default: 'nameClass'
    },
    titleMsg: {
      type: String,
      default: 'Messagen default'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./MyTitle.scss";
</style>
