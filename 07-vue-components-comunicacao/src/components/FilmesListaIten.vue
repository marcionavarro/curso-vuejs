<template>
  <li class="d-flex justify-content-between list-group-item">
    <span>{{ filmeTituloConcatenado }}</span>
    <button class="btn btn-success float-right">Editar</button>
  </li>
</template>

<script>
export default {
  props: ['filmeTitulo'],
  computed: {
    filmeTituloConcatenado () {
      return `Titulo: ${this.filmeTitulo}`
    }
  },
  created () {
    console.log('Filme Titulo: ', this.filmeTitulo)
  }
}
</script>
