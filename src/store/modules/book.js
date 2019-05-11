const book = {
  // namespaced: true,
  state: {
    fileName: '',
    menuVisible: false
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
    }
  },
  actions: {
    setFileName ({ commit }, fileName) {
      return commit('SET_FILENAME', fileName)
    },
    setMenuVisible ({ commit }, visible) {
      commit('SET_MENU_VISIBLE', visible)
    }
  }
}

export default book
