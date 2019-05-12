<template>
  <transition name="popup-slide-up">
    <div class="ebook-popup-list" v-show="settingFontFamilyViible">
      <div class="ebook-popup-title" @click="handleVisibleFontFamily">
        <div class="ebook-popup-icon">
          <span class="icon-down2"/>
        </div>
        <div class="ebook-popup-title-text">选择字体</div>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div class="ebook-popup-item" v-for="item in fontFamilyList" :key="item.font" @click="handleSetFontFamily(item.font)">
          <div class="ebook-popup-item-title" :class="{checked: item.font === defaultFontFamily}">{{ item.font }}</div>
          <div class="ebook-popup-item-check" v-show="item.font === defaultFontFamily">
            <span class="icon-check" :class="{checked: item.font === defaultFontFamily}"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../mixin/ebookMixin'
import { FONT_FAMILY_LIST } from '../../config/variables'
export default {
  name: 'EbookSettingFontPopup',
  mixins: [ebookMixin],
  data () {
    return {
      fontFamilyList: FONT_FAMILY_LIST
    }
  },
  computed: {},
  methods: {
    handleSetFontFamily (fontFamily) {
      this.setFontFamily(fontFamily)
    },
    handleVisibleFontFamily () {
      this.setFontFamilyVisible(false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.ebook-popup-list {
  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  .ebook-popup-title {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: px2rem(20) px2rem(30);
    .ebook-popup-icon {
      flex: 0 0 px2rem(40)
    }
    .ebook-popup-title-text {
      flex: 1;
      text-align: center;
    }
  }
  .ebook-popup-list-wrapper {
    padding: 0 px2rem(30);
    .ebook-popup-item {
      @include betweenCenter;
      padding: px2rem(20) 0;
      .ebook-popup-item-title {
        &.checked {
          color: #e93b3d;
          font-weight: 600;
        }
      }
      .ebook-popup-item-check {
        .checked {
          color: #e93b3d;
        }
      }
    }
  }
}
</style>
