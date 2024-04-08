import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* Vue.component('AssincronoTester', (resolve) => {
  setTimeout(() => {
    resolve({
      template: '<h2>Component Assincrono</h2>'
    })
  }, 2000)

  // chamar reject caso der erro 

}) */

/* Vue.component('AssincronoTester',
  () => import('./components/AssincronoTester.vue')
) */

new Vue({
  render: h => h(App),
}).$mount('#app')
