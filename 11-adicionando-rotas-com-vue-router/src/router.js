
import Vue from 'vue'
import VueRouter from "vue-router"

import ContatosPage from './views/contatos/ContatosPage'
import ContatosHome from './views/contatos/ContatosHome'
import ContatoDetalhes from './views/contatos/ContatoDetalhes'
import ContatoEditar from './views/contatos/ContatoEditar'
import ErroPage404 from './views/ErroPage404'
import ErroPage404Contatos from './views/ErroPage404Contatos.vue'
import HomePage from './views/HomePage'
import LoginPage from './views/login/LoginPage'

import EventBus from './event-bus'


Vue.use(VueRouter)

const extrairParametroId = route => ({
  id: +route.params.id
})
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      component: ContatosPage,
      alias: ['/meus-contatos', '/lista-de-contatos'],
      props: (route) => {
        const busca = route.query.busca
        return busca ? { busca } : {}
      },
      children: [
        {
          path: ':id(\\d+)',
          component: ContatoDetalhes,
          name: 'contato',
          // props: true
          props: extrairParametroId,
          // props: { id: '10' }
        }, // meus-contatos.com/contatos/2
        {
          // path: ':id(\\d+)/editar/:opcional?',
          // path: ':id(\\d+)/editar/:zeroOuMais*',
          // path: ':id(\\d+)/editar/:umOuMais+',
          path: ':id(\\d+)/editar',
          alias: ':id(\\d+)/alterar',
          meta: { requerAutenticacao: true },
          beforeEnter (to, from, next) {
            console.log('beforeEnter')
            next() // continuar
            // next(true) // continuar
            // next(false) // bloquear
            // next('/contatos') // redirecionar
            // next({ name: 'contatos' }) // redirecionar
            // next(new Error(`Permissões insuficientes para acessar o recurso "${to.fullPath}"`))
          },
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: extrairParametroId,
            'contato-detalhes': extrairParametroId
          }
        },  // meus-contatos.com/contatos/2/editar
        { path: '', component: ContatosHome, name: 'contatos' },
        { path: '*', component: ErroPage404Contatos },
      ]
    }, // meus-contatos.com/contatos
    { path: '/home', component: HomePage }, // meus-contatos.com
    // { path: '/', redirect: '/contatos' },
    // { path: '/', redirect: { name: 'contatos' } },
    { path: '/login', component: LoginPage },
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  console.log('Requer Autenticação?', to.meta.requerAutenticacao)
  const estaAutenticado = EventBus.autenticado
  if (to.matched.some(rota => rota.meta.requerAutenticacao)) {
    if (!estaAutenticado) {
      next({
        path: '/login',
        query: { redirecionar: to.fullPath }
      })
      return
    }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach(() => {
  console.log('afterEach')
})

router.onError(erro => {
  console.log(erro)
})

export default router