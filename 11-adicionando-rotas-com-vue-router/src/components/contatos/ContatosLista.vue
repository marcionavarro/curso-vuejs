<template>
  <div>
    <h3 class="fw-lighter mb-4">Contatos</h3>

    <div class="form-group mb-3">
      <input type="search" class="form-control" placeholder="Buscar contatos" @keyup.enter="buscar" :value="busca">
    </div>

    <ul class="list-group list-group-flush" v-if="contatosFiltrados.length > 0">
      <ContatosListaItem class="list-group-item" v-for="contato in contatosFiltrados" :key="contato.id"
        :contato="contato" />
    </ul>

    <div class="alert alert-info" v-else>Nenhum contato cadastrado.</div>
    <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import ContatosListaItem from './ContatosListaItem.vue'
import EventBus from '@/event-bus'

export default {
  components: {
    ContatosListaItem
  },
  props: ['busca'],
  data () {
    return {
      contatos: []
    }
  },
  computed: {
    contatosFiltrados () {
      const busca = this.busca
      return !busca
        ? this.contatos
        : this.contatos.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()))
    }
  },
  created () {
    this.contatos = EventBus.contatos
  },
  methods: {
    buscar (event) {
      this.$router.push({
        path: '/contatos',
        query: { busca: event.target.value }
      })
    },
    voltar () {
      this.$router.back()
    },
  }
}
</script>
