import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import HomePage from './views/HomePage'
import ContatosPage from './views/contatos/ContatosPage'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage},
        {path: '/contatos', component: ContatosPage}
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
