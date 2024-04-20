<template>
  <div>
    <h3 class="fw-lighter">Detalhes sobre o Contato id: {{ id }}</h3>
    <router-link :to="`/contatos/${id}/editar`" class="link-info">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created () {
    console.log('Parâmetros da rota: ', this.$props)
  }
}
</script>