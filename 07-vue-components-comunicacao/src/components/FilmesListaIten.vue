<template>
  <li class="d-flex justify-content-between list-group-item">
    <span>{{ filme.titulo }} | {{ filme.ano }}</span>
    <button @click="selecionar" class="btn btn-secondary float-right">Selecionar</button>
  </li>
</template>

<script>
import { eventBus } from '@/main'

export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  },
  methods: {
    selecionar (event) {
      eventBus.selecionarFilme(this.filme)
    }
  }
}
</script>
