const book = {
  // namespaced: true,
  state: {
    fileName: '',
    headerVisible: false
  },
  getters: {
    fileName: state => state.fileName
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_HEADER_VISIBLE: (state, visible) => {
      state.headerVisible = visible
    }
  },
  actions: {
    setFileName ({ commit }, fileName) {
      return commit('SET_FILENAME', fileName)
    },
    setHeaderVisible ({ commit }, visible) {
      commit('SET_HEADER_VISIBLE', visible)
    }
  }
}

export default book
