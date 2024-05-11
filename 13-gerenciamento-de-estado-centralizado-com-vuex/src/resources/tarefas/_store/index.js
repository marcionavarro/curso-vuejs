import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  erro: undefined,
  tarefas: [],
  tarefaSelecionada: undefined
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
