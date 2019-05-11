<template>
  <div class="ebook">
    <ebook-header />
    <ebook-reader />
  </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookHeader from '../../components/ebook/EbookHeader'

export default {
  name: 'Ebook',
  components: {
    EbookReader,
    EbookHeader
  }
}
</script>
