<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>
<script>
import Epub from 'epubjs'
import { mapActions, mapState } from 'vuex'
import config from '../../config'

global.epub = Epub

export default {
  name: 'EbookReader',
  computed: {
    ...mapState({
      fileName: state => state.book.fileName,
      menuVisible: state => state.book.menuVisible
    })
  },
  methods: {
    ...mapActions(['setFileName', 'setMenuVisible']),
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
        this.hiddenMenu()
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
        this.hiddenMenu()
      }
    },
    toggleMenu () {
      this.setMenuVisible(!this.menuVisible)
    },
    hiddenMenu () {
      this.setMenuVisible(false)
    },
    initEpub () {
      const fullPath = `${config.ePubPath}${this.fileName}.epub`
      this.book = new Epub(fullPath)
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
        // method: 'default' // 新版本中需要删除此处 不然 touchstart touchend无法执行
      })
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
