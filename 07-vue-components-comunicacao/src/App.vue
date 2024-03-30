<template>
  <div class="container py-4">
    <header class="pb-3 mb-4 border-bottom">
      <div class="d-flex align-items-center text-body-emphasis ">
        <img src="./assets/vue-logo.svg" class="thumbnail" width="30px"/>
        <span class="fs-4 ms-2">Curso de VueJS</span>
      </div>
    </header>

    <div class="mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Lista de Filmes</h1>
        <p class="col-md-8 fs-4">Treinando comunicação entre components no Vue</p>
      </div>
    </div>

    <div class="container">
      <FilmesLista />
    </div>

  </div>
</template>

<script>
import FilmesLista from './components/FilmesLista.vue'

export default {
  components: {
    FilmesLista
  }
}
</script>
