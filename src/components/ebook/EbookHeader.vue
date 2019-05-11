<template>
  <transition name="fade" mode="out-in">
    <div class="ebook-header" v-show="headerVisible">
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
      headerVisible: state => state.book.headerVisible
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.fade-enter-active {
  transition: all 0.3s ease-out;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-100%);
}

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
