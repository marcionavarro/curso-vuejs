
import Vue from 'vue'
import VueRouter from "vue-router"

import HomePage from './views/HomePage'
import ContatosPage from './views/contatos/ContatosPage'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: HomePage },
    { path: '/contatos', component: ContatosPage }
  ]
})