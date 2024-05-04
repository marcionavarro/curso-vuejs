<template>
  <div id="app">
    <main>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
            <img src="./assets/logo.png" alt="VueJS" width="32" />
            <span class="fs-4 ms-2">Vuex</span>
          </a>
        </header>

        <div class="mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Requisições HTTP no vue</h1>
            <p class="col-md-8 fs-4">Padrão de Gerenciamento de Estado Centralizado no Vue.</p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-9 border-end">
              <TarefasLista />
            </div>
            <div class="col-sm-3">
              <Contador />
            </div>
          </div>
        </div>

        <footer class="pt-3 mt-5 text-body-secondary border-top">
          &copy; 2024
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
import Contador from '@/components/Contador.vue'
import TarefasLista from '@/components/TarefasLista.vue'

export default {
  components: {
    Contador,
    TarefasLista
  }
}
</script>
