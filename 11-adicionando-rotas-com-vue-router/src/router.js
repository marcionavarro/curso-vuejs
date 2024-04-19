
import Vue from 'vue'
import VueRouter from "vue-router"

import HomePage from './views/HomePage'
import ContatosPage from './views/contatos/ContatosPage'
import ContatoDetalhes from './views/contatos/ContatoDetalhes'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: HomePage },
    { path: '/contatos', component: ContatosPage },
    { path: '/contatos/:id', component: ContatoDetalhes },
  ]
})