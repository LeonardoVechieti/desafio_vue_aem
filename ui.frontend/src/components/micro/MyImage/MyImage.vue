<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'MyImage',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style scoped>
img {
  max-width: 40vw;
  @media (max-width: 768px){
    max-width: 70vw;
  }
}
</style>
