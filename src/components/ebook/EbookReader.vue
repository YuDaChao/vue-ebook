<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>
<script>
import Epub from 'epubjs'
import { ebookMixin } from '../../mixin/ebookMixin'
import config from '../../config'

global.epub = Epub

export default {
  name: 'EbookReader',
  mixins: [ebookMixin],
  methods: {
    // 上一页
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
        this.hiddenMenu()
        this.hiddenFontFamily()
      }
    },
    // 下一页
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
        this.hiddenMenu()
        this.hiddenFontFamily()
      }
    },
    // 控制是否显示菜单
    toggleMenu () {
      this.setMenuVisible(!this.menuVisible)
      this.hiddenSetting()
      this.hiddenFontFamily()
    },
    // 隐藏菜单
    hiddenMenu () {
      this.setMenuVisible(false)
      if (this.settingVisible >= 0) {
        this.hiddenSetting()
      }
    },
    // 隐藏设置菜单
    hiddenSetting () {
      if (this.settingVisible >= 0) {
        this.setSettingVisible(-1)
      }
    },
    // 隐藏字体设置菜单
    hiddenFontFamily () {
      if (this.settingFontFamilyViible) {
        this.setFontFamilyVisible(false)
      }
    },
    initEpub () {
      const fullPath = `${config.ePubPath}${this.fileName}.epub`
      this.book = new Epub(fullPath)
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
        // method: 'default' // 新版本中需要删除此处 不然 touchstart touchend无法执行
      })
      this.setCurrrentBook(this.book)
      this.rendition.display()
      this.rendition.on('touchstart', event => {
        // event.preventDefault()
        event.stopPropagation()
        this.touchstartX = event.changedTouches[0].clientX
        this.timeStamp = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        // event.preventDefault()
        event.stopPropagation()
        this.offsetx = event.changedTouches[0].clientX - this.touchstartX
        this.timeDiff = event.timeStamp - this.timeStamp
        if (this.offsetx < -40 && this.timeDiff < 500) {
          this.nextPage()
        } else if (this.offsetx > 40 && this.timeDiff < 500) {
          this.prevPage()
        } else {
          this.toggleMenu()
        }
      })
    }
  },
  async mounted () {
    const { fileName } = this.$route.params
    if (fileName) {
      const filePath = fileName.split('|').join('/')
      this.setFileName(filePath).then(() => {
        this.initEpub()
      })
    }
  }
}
</script>
