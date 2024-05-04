<template>
  <div>
    <h2 class="fw-lighter">Contador: {{ contador }}</h2>
    <h4 class="fw-lighter">ContadorAlias: {{ contadorAlias }}</h4>
    <h4 class="fw-lighter">ContadorMultiplicado: {{ contadorMultiplicado }}</h4>
    <button class="btn btn-lg btn-danger me-2" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {
      contadorLocal: 2
    }
  },
  // computed: mapState(['contador']),
  computed: {
    ...mapState({
      // contador: state => state.contador
      contador: 'contador',
      contadorAlias: 'contador',
      contadorMultiplicado (state) {
        return state.contador * this.contadorLocal
      }
    })
    // outras computed properties
  },
  methods: {
    decrementar () {
      this.$store.state.contador--
    },
    incrementar () {
      this.$store.state.contador++
    }
  }
}
</script>
