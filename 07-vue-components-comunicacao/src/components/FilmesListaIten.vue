<template>
  <li class="d-flex justify-content-between list-group-item">
    <span>{{ filme.titulo }} | {{ filme.ano }}</span>
    <button @click="selecionar" class="btn btn-success float-right">Editar</button>
  </li>
</template>

<script>
export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  },
  methods: {
    selecionar (event) {
      this.$emit('selecionarFilme', this.filme)
    }
  }
}
</script>
