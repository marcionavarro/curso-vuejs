<template>
  <li class="d-flex justify-content-between list-group-item">
    <span>{{ filmeTituloConcatenado }}</span>
    <button class="btn btn-success float-right">Editar</button>
  </li>
</template>

<script>
export default {
  props: {
    filmeTitulo: {
      type: String,
      // required: true,
      default () {
        return 'Vingadores'
      },
      validator (filmeTitulo) {
        return filmeTitulo.includes('Marvel')
      }
    }
  },
  computed: {
    filmeTituloConcatenado () {
      return `Titulo: ${this.filmeTitulo}`
    }
  },
  created () {
    console.log(typeof this.filmeTitulo)
  }
}
</script>
