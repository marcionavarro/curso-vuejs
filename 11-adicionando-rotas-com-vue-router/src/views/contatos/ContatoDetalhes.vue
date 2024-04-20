<template>
  <div>
    <h3 class="fw-lighter">Detalhes sobre o Contato id: {{ id }}</h3>
    <div style="height: 900px;"></div>
    <p id="parametros">Parâmetros: {{ parametros }}</p>
    <p>Hash: {{ $route.hash }}</p>
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