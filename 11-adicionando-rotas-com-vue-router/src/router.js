
import Vue from 'vue'
import VueRouter from "vue-router"

import ContatosPage from './views/contatos/ContatosPage'
import ContatosHome from './views/contatos/ContatosHome'
import ContatoDetalhes from './views/contatos/ContatoDetalhes'
import ContatoEditar from './views/contatos/ContatoEditar'
import ErroPage404 from './views/ErroPage404'
import ErroPage404Contatos from './views/ErroPage404Contatos.vue'
import HomePage from './views/HomePage'




Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      component: ContatosPage,
      alias: ['/meus-contatos', '/lista-de-contatos'],
      children: [
        {
          path: ':id',
          component: ContatoDetalhes,
          name: 'contato',
          props: true
        }, // meus-contatos.com/contatos/2
        {
          path: ':id/editar',
          alias: ':id/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: true,
            'contato-detalhes': true
          }
        },  // meus-contatos.com/contatos/2/editar
        { path: '', component: ContatosHome, name: 'contatos' },
        { path: '*', component: ErroPage404Contatos },
      ]
    }, // meus-contatos.com/contatos
    { path: '/home', component: HomePage }, // meus-contatos.com
    // { path: '/', redirect: '/contatos' },
    // { path: '/', redirect: { name: 'contatos' } },
    {
      path: '/',
      redirect: () => {
        // return '/contatos'
        return { name: 'contatos' }
      }
    },
    { path: '*', component: ErroPage404 }
  ]
})