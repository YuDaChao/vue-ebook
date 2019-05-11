<template>
  <transition name="slide-down" mode="out-in">
    <div class="ebook-header" v-show="menuVisible">
      <div class="header-wrapper">
        <div class="left">
          <span class="icon-back icon" />
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon-shelf icon" />
          </div>
          <div class="icon-wrapper">
            <span class="icon-cart icon" />
          </div>
          <div class="icon-wrapper">
            <span class="icon-more icon" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'EbookHeader',
  computed: {
    ...mapState({
      menuVisible: state => state.book.menuVisible
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/global.scss';

.ebook-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: px2rem(96);
  background-color: #fff;
  font-size: px2rem(20);
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    .icon {
      font-size: px2rem(38);
    }
    .left {
      flex: 0 0 px2rem(80);
      height: 100%;
      @include center;
    }
    .right {
      flex: 1;
      height: 100%;
      @include center;
      justify-content: flex-end;
      .icon-wrapper {
        height: 100%;
        width: px2rem(100);
        text-align: center;
        line-height: px2rem(96);
      }
    }
  }
}
</style>
