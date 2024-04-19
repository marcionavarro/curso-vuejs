<template>
  <div>
    <h3 class="fw-lighter mb-4">Contatos</h3>

    <ul class="list-group list-group-flush" v-if="contatos.length > 0">
      <ContatosListaItem class="list-group-item" v-for="contato in contatos" :key="contato.id" :contato="contato" />
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
  methods: {
    voltar () {
      this.$router.back()
    }
  }
}
</script>
