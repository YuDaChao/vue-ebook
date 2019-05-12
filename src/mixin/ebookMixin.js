import { mapState, mapActions, mapMutations } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapState({
      fileName: state => state.book.fileName,
      menuVisible: state => state.book.menuVisible,
      settingVisible: state => state.book.settingVisible,
      defaultFontSize: state => state.book.defaultFontSize,
      currentBook: state => state.book.currentBook,
      defaultFontFamily: state => state.book.defaultFontFamily,
      settingFontFamilyViible: state => state.book.settingFontFamilyViible
    })
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuVisible',
      'setSettingVisible'
    ]),
    ...mapMutations({
      setDefaultFontSize: 'SET_DEFAULT_FONTSIZE',
      setCurrrentBook: 'SET_CURRENT_BOOK',
      setFontFamily: 'SET_DEFAULT_FONTFAMILY',
      setFontFamilyVisible: 'SET_FONTFAMILY_VISIBLE'
    })
  }
}
