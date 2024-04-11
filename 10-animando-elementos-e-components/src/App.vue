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
          <div class="form-group mb-3">
            <select class="form-control" v-model="animacaoSelecionada">
              <option value="fade">Fade</option>
              <option value="zoom">Zoom</option>
              <option value="slide">Slide</option>
            </select>
          </div>

          <div class="form-group">
            <label>Component:</label>
            <select class="form-control my-3" v-model="componentSelecionado">
              <option value="AppHome">Home</option>
              <option value="AppSobre">Sobre</option>
            </select>
          </div>

          <transition :name="animacaoSelecionada" mode="out-in">
            <component :is="componentSelecionado"></component>
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
  components: {
    AppHome: () => import('./components/AppHome.vue'),
    AppSobre: () => import('./components/AppSobre.vue')
  },
  data () {
    return {
      mostrar: true,
      animacaoSelecionada: 'fade',
      alertAtual: 'info',
      componentSelecionado: 'AppHome'
    }
  },
  computed: {
    classeDeAlerta () {
      return {
        alert: true,
        [`alert-${this.alertAtual}`]: true
      }
    }
  }
}
</script>

<style>
body {
  overflow: hidden;
}
</style>

<style scoped>
/* slide */
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 0.7s cubic-bezier(.17, .67, .8, .31);
  transition: 0.7s cubic-bezier(.17, .67, .8, .31);
}

.slide-leave-active {
  animation: slide 0.7s reverse;
  transition: opacity 2s;
}

@keyframes slide {
  0% {
    transform: translateX(-100px);
  }

  100% {
    transform: translateX(0px);
  }
}

/* zoom */
.zoom-enter,
.zoom-leave-to {
  transform: scale(0);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s;
}

/* zoom */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
