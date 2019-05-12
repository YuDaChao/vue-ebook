<template>
  <div>
    <transition name="slide-up">
      <div class="ebook-footer" :class="{'hidden-box-shadow': settingVisible >= 0}" v-show="menuVisible">
        <div class="ebook-wrapper">
          <div class="icon-wrapper">
            <span class="icon-menu icon" />
          </div>
          <div class="icon-wrapper">
            <span class="icon-progress icon" />
          </div>
          <div class="icon-wrapper">
            <span class="icon-bright icon" />
          </div>
          <div class="icon-wrapper" @click="handleClickMenu(0)">
            <span class="icon-A icon" />
          </div>
        </div>
      </div>
    </transition>
    <ebook-setting-font />
    <ebook-setting-font-popup />
  </div>
</template>
<script>
import { ebookMixin } from '../../mixin/ebookMixin'
import EbookSettingFont from './EbookSettingFont'
import EbookSettingFontPopup from './EbookSettingFontPopup'

export default {
  name: 'EbookFooterMenu',
  mixins: [ebookMixin],
  components: {
    EbookSettingFont,
    EbookSettingFontPopup
  },
  methods: {
    handleClickMenu (key) {
      this.setSettingVisible(key)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/global.scss';

.ebook-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: px2rem(120);
  background-color: #fff;
  font-size: px2rem(20);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  &.hidden-box-shadow {
    box-shadow: none;
  }
  .ebook-wrapper {
    width: 100%;
    height: 100%;
    @include aroundCenter;
    .icon-wrapper {
      flex: 1;
      text-align: center;
      height: 100%;
      line-height: px2rem(120);
      .icon {
        font-size: px2rem(38);
      }
    }
  }
}
</style>
