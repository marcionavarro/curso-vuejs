<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{ contato.nome }}</span>
    <router-link :to="`/contatos/${contato.id}`" class="link-info">Detalhes</router-link>
  </li>
</template>

<script>
export default {
  props: {
    contato: {
      type: Object,
      required: true
    }
  }
}
</script>