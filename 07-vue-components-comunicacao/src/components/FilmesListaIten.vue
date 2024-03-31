<template>
  <div>
    <input type="text" :value="titulo" :placeholder="$attrs.placeholder">
  </div>
  <!-- <li class="d-flex justify-content-between list-group-item">
    <span>{{ filmeTituloConcatenado }} | {{ ano }}</span>
    <button class="btn btn-success float-right">Editar</button>
  </li> -->
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    titulo: {
      type: String,
      required: true
    },
    ano: {
      type: Number,
      required: true
    }
  },
  computed: {
    filmeTituloConcatenado () {
      return `Titulo: ${this.titulo}`
    }
  },
  created () {
    console.log('Attrs: ', this.$attrs)
  }
}
</script>
