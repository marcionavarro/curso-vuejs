<template>
  <div>
    <h2 class="fw-lighter">Contador: {{ contador }}</h2>
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
  computed: {
    ...mapState({
      contador: state => state.contador.contador
      // contador: 'contador'
    })
  },
  methods: {
    decrementar () {
      this.$store.state.contador.contador--
    },
    incrementar () {
      this.$store.state.contador.contador++
    }
  }
}
</script>
