import Vue from 'vue'

/* Vue.component('mn-component', {
  data: function () {
    return {
      titulo: 'Curso de VueJs',
      contador: 0
    }
  },
  methods: {
    incrementar: function () {
      this.contador++
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{ contador }} vezes</button>
    </div>
  `
}) */

const mnComponent = {
  data: function () {
    return {
      titulo: 'Curso de VueJs',
      contador: 0
    }
  },
  methods: {
    incrementar: function () {
      this.contador++
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{ contador }} vezes</button>
    </div>
  `
}

new Vue({
  el: '#app1',
  components: {
    'mn-component': mnComponent
  }
})

new Vue({
  el: '#app2'
})
