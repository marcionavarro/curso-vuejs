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
          <h3 class="font-weight-light">Tecnologias</h3>

          <div class="row align-items-center my-4">
            <div class="col-sm-2">
              <button class="btn btn-outline-info btn-sm text-white" @click="embaralhar">Embaralhar</button>
            </div>

            <div class="col-sm-10">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Insira um novo item e pressione Enter"
                  @keyup.enter="adicionar" ref="input">
              </div>
            </div>
          </div>

          <transition-group tag="ul" class="list-group" name="list">
            <li class="list-group-item d-flex justify-content-between" v-for="(tecnologia, indice) in tecnologias"
              :key="tecnologia">
              <span>
                {{ tecnologia }}</span>
              <button class="btn btn-outline-danger btn-sm text-white" @click="remover(indice)">
                x
              </button>
            </li>
          </transition-group>
        </div>

        <footer class="pt-3 mt-5 text-body-secondary border-top">
          &copy; 2024
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
import { shuffle } from 'lodash'

export default {
  data () {
    return {
      tecnologias: [
        'javaScript',
        'VueJs',
        'Vuex',
        'Vue Router'
      ]
    }
  },
  methods: {
    adicionar (event) {
      const novoItem = event.target.value
      const indice = Math.floor(Math.random() * this.tecnologias.length)
      this.tecnologias.splice(indice, 0, novoItem)
      this.$refs.input.value = ''
    },
    remover (indice) {
      this.tecnologias.splice(indice, 1)
    },
    embaralhar (event) {
      this.tecnologias = shuffle(this.tecnologias)
    }
  }
}
</script>

<style scoped>
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-70px);
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 1s;
}

.list-leave-active {
  position: absolute;
  width: calc(100% - 100px);
}
</style>
