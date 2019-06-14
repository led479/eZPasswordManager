export const state = () => ({
    modoVisualizacao: 'icones',
    senhaNova: {}
})
  
export const mutations = {
  SET_MODO_VISUALIZACAO (state, value) {
    console.log('SET_VAR_1', value)
    state.modoVisualizacao = value
  },
  CRIA_SENHA_NOVA (state, value) {
    console.log('CRIA_SENHA_NOVA', value)
    state.senhaNova = Object.assign({}, value)
    console.log(state.senhaNova)
  }
}