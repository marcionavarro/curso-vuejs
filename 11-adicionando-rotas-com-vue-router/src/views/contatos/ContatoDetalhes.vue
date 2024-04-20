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
  data () {
    return {
      id: this.$route.params.id
    }
  },
  /*  watch: {
     '$route' (to, from) {
       this.id = to.params.id
     }
   }, */
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
  },
  created () {
    console.log('Parâmetros da rota: ', this.$route.params)
  }
}
</script>