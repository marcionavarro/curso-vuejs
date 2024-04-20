<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{ contato.nome }}</span>
    <router-link :to="{ path: `/contatos/${contato.id}` }" class="link-info">
      Detalhes
    </router-link>
    <!-- <a href="#" class="link-info" @click.prevent="verDetalhes">Detalhes</a> -->
  </li>
</template>

<script>
export default {
  props: {
    contato: {
      type: Object,
      required: true
    }
  },
  methods: {
    verDetalhes () {
      // this.$router.push(`/contatos/${this.contato.id}`)
      // this.$router.push({ path: `/contatos/${this.contato.id}` })
      // this.$router.push({ path: `/contatos/${this.contato.id}` })
      // this.$router.push({ path: '/contatos', params: { id: this.contato.id } }) // forma Errada
      // this.$router.push({ name: 'contato', params: { id: this.contato.id } })
      // this.$router.replace({ name: 'contato', params: { id: this.contato.id } })
    }
  }
}
</script>