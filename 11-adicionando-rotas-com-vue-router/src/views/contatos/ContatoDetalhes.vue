<template>
  <div>
    <h3 class="fw-lighter">Detalhes sobre o Contato id: {{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  created () {
    console.log('Parâmetros da rota: ', this.$route.params)
  }
}
</script>