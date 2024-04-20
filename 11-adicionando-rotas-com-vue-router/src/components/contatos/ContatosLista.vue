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

export default {
  components: {
    ContatosListaItem
  },
  props: ['busca'],
  data () {
    return {
      contatos: [{
        id: 1,
        nome: 'Isaac Newton',
        email: 'isaac@email.com'
      },
      {
        id: 2,
        nome: 'Albert Einstein',
        email: 'einstein@email.com'
      },
      {
        id: 3,
        nome: 'Stephen Hawking',
        email: 'stephen@email.com'
      },
      ]
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
