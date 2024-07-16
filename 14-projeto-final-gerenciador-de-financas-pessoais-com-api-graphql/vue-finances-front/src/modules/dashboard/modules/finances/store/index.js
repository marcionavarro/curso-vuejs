import actions from './actions'
import mutations from './mutations'

const state = {
  filters: undefined,
  isFilterring: false,
  month: undefined
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
