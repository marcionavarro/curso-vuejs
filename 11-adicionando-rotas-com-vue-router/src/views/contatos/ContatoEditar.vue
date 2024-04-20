<template>
  <div v-if="contato">
    <h3 class="fw-lighter mb-4">Nome: {{ contato.nome }}</h3>

    <form @submit.prevent="salvar">
      <div class="form-floating">
        <input type="text" class="form-control mb-2" id="floatingNome" placeholder="Nome" v-model="contato.nome">
        <label for="floatingNome">Nome</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="contato.email">
        <label for="floatingInput">Email</label>
      </div>

      <div class="d-flex justify-content-between mt-4 mb-4">
        <button class="btn btn-outline-success" type="submit">Salvar</button>
        <button class="btn btn-outline-secondary" @click="$router.back()">Voltar</button>
      </div>
    </form>
  </div>
</template>

<script>
import EventBus from '@/event-bus'

export default {
  props: ['id'],
  data () {
    return {
      contato: undefined,
      estaCancelando: true
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.contato = EventBus.buscarContato(+to.params.id)
    })
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    this.estaCancelando
      ? next(window.confirm('Deseja realmente sair?'))
      : next()
  },
  methods: {
    salvar () {
      EventBus.editarContato(this.contato)
      this.estaCancelando = false
      this.$router.push('/contatos')
    }
  }
}
</script>