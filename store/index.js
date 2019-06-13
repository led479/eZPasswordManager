export const state = () => ({
    modoVisualizacao: 'icones'
  })
  
  export const mutations = {
    SET_MODO_VISUALIZACAO (state, value) {
      console.log('SET_VAR_1', value)
      state.modoVisualizacao = value
    }
  }