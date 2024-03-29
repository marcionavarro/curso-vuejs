import Vue from 'vue'

Vue.component('mn-component', {
  data: function () {
    return {
      titulo: 'Curso de VueJs'
    }
  },
  template: '<h1>{{ titulo }}</h1>'
})

new Vue({
  el: '#app',
})
