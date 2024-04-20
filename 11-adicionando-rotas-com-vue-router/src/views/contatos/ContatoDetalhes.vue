<template>
  <div v-if="contato">
    <h3 class="fw-lighter">Nome: {{ contato.nome }}</h3>
    <p>E-mail {{ contato.email }}</p>
    <button class="btn btn-outline-secondary btn-sm me-3" @click="$router.back()">
      voltar
    </button>
    <router-link :to="`/contatos/${id}/editar`" class="btn btn-outline-info btn-sm">
      Editar
    </router-link>
  </div>
</template>

<script>
import EventBus from '@/event-bus'

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
      contato: undefined
    }
  },
  /* created () {
    this.contato = EventBus.buscarContato(this.id)
  }, */
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.contato = EventBus.buscarContato(vm.id)
      vm.contato = EventBus.buscarContato(+to.params.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.contato = EventBus.buscarContato(+to.params.id)
    next()
  }
}
</script>