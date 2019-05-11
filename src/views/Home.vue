<template>
  <div class="home">
    <span class="icon-book"></span>
    <span class="text">asdfghj</span>
  </div>
</template>

<script>

export default {
  name: 'home',
  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.text {
  font-size: px2rem(20);
  color: orange;
}
</style>
