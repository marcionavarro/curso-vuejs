<template>
  <div id="app">
    <main>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
            <img src="./assets/logo.png" alt="VueJS" width="32" />
            <span class="fs-4">VueJS</span>
          </a>
        </header>

        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Animações</h1>
            <p class="col-md-8 fs-4">Treinando transição/animação de elementos/components no Vue.</p>
          </div>
        </div>

        <div class="container">
          <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alterar</button>
          <transition name="zoom">
            <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
          </transition>
        </div>

        <footer class="pt-3 mt-5 text-body-secondary border-top">
          &copy; 2024
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mostrar: true
    }
  }
}
</script>

<style scoped>
/* entrada/saida */
.zoom-enter,
.zoom-leave-to {
  transform: scale(0);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
