import { mapState } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapState({
      menuVisible: state => state.book.menuVisible
    })
  }
}
