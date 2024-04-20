<template>
  <div>
    <h3 class="fw-lighter">Detalhes sobre o Contato id: {{ id }}</h3>
    <p>Parâmetros: {{ parametros }}</p>
    <router-link :to="`/contatos/${id}/editar`" class="link-info">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  // props: ['id'],
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      parametros: this.$route.params
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    this.parametros = to.params
    next()
  }
}
</script>