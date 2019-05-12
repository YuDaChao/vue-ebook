<template>
  <transition name="slide-up-setting">
    <div class="setting-font-wrapper" v-show="settingVisible === 0">
      <div class="setting-font-content">
        <div class="preview" :style="{fontSize: minFontSize}">A</div>
        <div class="select-wrapper">
          <div class="select-content" v-for="item in fontSizeList" :key="item.fontSize" @click="handleSetFontSize(item.fontSize)">
            <div class="line" />
            <div class="point-wrapper">
              <div class="point" v-show="item.fontSize === defaultFontSize">
                <div class="small-point" />
              </div>
            </div>
            <div class="line" />
          </div>
        </div>
        <div class="preview" :style="{fontSize: maxFontSize}">A</div>
      </div>
      <div class="setting-font-family" @click="handleVisibleFontFamily">
        <div class="setting-font-family-text-wrapper">
          <div class="setting-font-family-text">{{defaultFontFamily}}</div>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="icon-forward"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { FONT_SIZE_LIST } from '../../config/variables'
import { ebookMixin } from '../../mixin/ebookMixin'
export default {
  name: 'EbookSettingFont',
  mixins: [ebookMixin],
  data () {
    return {
      fontSizeList: FONT_SIZE_LIST
    }
  },
  computed: {
    minFontSize () {
      return `${this.fontSizeList[0].fontSize}px`
    },
    maxFontSize () {
      return `${this.fontSizeList[this.fontSizeList.length - 1].fontSize}px`
    }
  },
  methods: {
    handleSetFontSize (fontSize) {
      this.setDefaultFontSize(fontSize)
      if (this.currentBook) {
        this.currentBook.rendition.themes.fontSize(`${fontSize}px`)
      }
    },
    handleVisibleFontFamily () {
      // 显示字体菜单
      this.setFontFamilyVisible(true)
      // 隐藏底部菜单
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';

.setting-font-wrapper {
  position: fixed;
  bottom: px2rem(116);
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: px2rem(180);
  background-color: #fff;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  .setting-font-content {
    height: 100%;
    @include center;
    flex: 2;
    .preview {
      flex: 0 0 px2rem(80);
      text-align: center;
    }
    .select-wrapper {
      @include center;
      flex: 1;
      .select-content {
        display: flex;
        align-items: center;
        flex: 1;
        padding: px2rem(20) 0;
        .line {
          flex: 1;
          height: 0;
          border-top: 1px solid #ccc;
        }
        .point-wrapper {
          position: relative;
          flex: 0 0 0;
          width: 0;
          height: px2rem(10);
          border-left: 1px solid #ccc;
          .point {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            width: px2rem(40);
            height: px2rem(40);
            border-radius: 50%;
            border: 1px solid #ccc;
            background-color: #fff;
            box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, 0.15);
            @include center;
            .small-point {
              width: px2rem(6);
              height: px2rem(6);
              border-radius: 50%;
              background-color: #000;
            }
          }
        }
        &:first-child {
          .line:first-child {
            border-top: none;
          }
        }
        &:last-child {
          .line:last-child {
            border-top: none;
          }
        }
      }
    }
  }
  .setting-font-family {
    flex: 1;
    @include center;
    .setting-font-family-text {
      font-size: px2rem(24);
      @include center;
    }
    .setting-font-family-icon-wrapper {
      @include center;
      .icon-forward {
        font-size: px2rem(24);
      }
    }
  }
}
</style>
