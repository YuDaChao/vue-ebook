const book = {
  // namespaced: true,
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1不显示 0:字号 1: 主题 2: 进度 3: 目录
    settingFontFamilyViible: false,
    defaultFontSize: 16,
    currentBook: null,
    defaultFontFamily: 'Default'
  },
  getters: {
    fileName: state => state.fileName
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENU_VISIBLE: (state, visible) => {
      state.menuVisible = visible
    },
    SET_SETTING_VISBLE: (state, visible) => {
      state.settingVisible = visible
    },
    SET_DEFAULT_FONTSIZE: (state, fontSize) => {
      state.defaultFontSize = fontSize
    },
    SET_CURRENT_BOOK: (state, book) => {
      state.currentBook = book
    },
    SET_DEFAULT_FONTFAMILY: (state, fontFamily) => {
      state.defaultFontFamily = fontFamily
    },
    SET_FONTFAMILY_VISIBLE: (state, visible) => {
      state.settingFontFamilyViible = visible
    }
  },
  actions: {
    setFileName ({ commit }, fileName) {
      return commit('SET_FILENAME', fileName)
    },
    setMenuVisible ({ commit }, visible) {
      commit('SET_MENU_VISIBLE', visible)
    },
    setSettingVisible ({ commit }, visible) {
      commit('SET_SETTING_VISBLE', visible)
    }
  }
}

export default book
