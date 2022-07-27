<template>
  <div class="title">
    <h1 :class="titleClass" v-if="type === 'h1'">{{ msg }}</h1>
    <h2 :class="titleClass" v-if="type === 'h2'">{{ msg }}</h2>
    <h3 :class="titleClass" v-if="type === 'h3'">{{ msg }}</h3>
    <h4 :class="titleClass" v-if="type === 'h4'">{{ msg }}</h4>
    <h5 :class="titleClass" v-if="type === 'h5'">{{ msg }}</h5>
    <h6 :class="titleClass" v-if="type === 'h6'">{{ msg }}</h6>
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
    titleClass: {
      type: String,
      default: 'titleClass'
    },
    msg: {
      type: String,
      default: 'Messagen default'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./MyTitle.scss";
</style>
