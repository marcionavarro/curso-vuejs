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

        <div class="container">
          <h3 class="font-weight-light">Animações de estado</h3>

          <div class="form-group mb-3">
            <input class="form-control" v-model="numero" step="50">
          </div>

          <div class="alert alert-info">
            <h3 class="font-weight-light">
              <strong>Número: </strong>
              <span>{{ numeroAnimado }}</span>
            </h3>
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
import { TweenLite } from 'gsap'

export default {
  data () {
    return {
      numero: 0,
      numeroInterpolado: 0
    }
  },
  computed: {
    numeroAnimado () {
      return this.numeroInterpolado.toFixed(0)
    }
  },
  watch: {
    numero (novoNumero, antigoNumero) {
      TweenLite.to(this.$data, 2, { numeroInterpolado: novoNumero })
    }
  }
}

</script>
