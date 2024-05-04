<template>
  <div>
    <h2 class="fw-lighter">Contador: {{ contador }}</h2>
    <button class="btn btn-lg btn-danger me-2" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contador: 0
    }
  },
  methods: {
    decrementar () {
      this.contador--
    },
    incrementar () {
      this.contador++
    }
  }
}
</script>
