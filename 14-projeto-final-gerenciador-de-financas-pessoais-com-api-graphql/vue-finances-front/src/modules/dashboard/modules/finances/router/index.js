import RecordsHome from './../views/RecordsHome.vue'
import RecordsAdd from './../views/RecordsAdd.vue'
// const RecordsHome = () => import('./../views/RecordsHome.vue')
// const RecordsAdd = () => import('./../views/RecordsAdd.vue')

export default [
  {
    path: 'records',
    component: RecordsHome,
    meta: { requiresAuth: true },
    alias: ['home', '']
  },
  {
    path: 'records/add',
    name: 'recordsAdd',
    meta: { requiresAuth: true },
    component: RecordsAdd
  }
]
