<template>
  <div class="ebook">
    <ebook-header-menu />
    <ebook-reader />
    <ebook-footer-menu />
  </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookHeaderMenu from '../../components/ebook/EbookHeaderMenu'
import EbookFooterMenu from '../../components/ebook/EbookFooterMenu'

export default {
  name: 'Ebook',
  components: {
    EbookReader,
    EbookHeaderMenu,
    EbookFooterMenu
  }
}
</script>
