<template>
  <div>
    <h2>Editar filme</h2>

    <div class="form-group">
      <label class="mb-1">Título:</label>
      <input type="text" class="form-control" placeholder="Insira o título" v-model="filme.titulo">
    </div>

    <div class="form-group mt-2">
      <label class="mb-1">Ano:</label>
      <input type="text" class="form-control" placeholder="Insira o ano" v-model="filme.ano">
    </div>

  </div>
</template>

<script>
export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  }
}
</script>
