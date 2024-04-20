<template>
  <div>
    <h3 class="fw-lighter mb-4">Editar Contato id: {{ id }}</h3>
    <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">Voltar</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      curso: 'Curso de VueJS'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    // console.log('Curso: ', this.curso)
    if (to.query.autenticado === 'true') {
      return next((vm) => {
        console.log('Curso: ', vm.curso)
      })
    }
    next('/contatos')
  }
}
</script>