<template>
  <div id="app">
    <main>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
            <img src="./assets/logo.png" alt="VueJS" width="32" />
            <span class="fs-4 ms-2">VueJS</span>
          </a>
        </header>

        <div class="mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Requisições HTTP no vue</h1>
            <p class="col-md-8 fs-4">Usando a biblioteca Axios para fazer chamadas Ajax á uma API REST.</p>
          </div>
        </div>

        <div class="container">
          <TarefasLista />

          <button class="btn btn-outline-primary my-4" @click="download">Baixar imagem</button>

          <div class="d-flex justify-content-between align-items-center">
            <div class="progress me-4" style="width: 100%;">
              <div class="progress-bar progress-bar-striped" role="progressbar" :style="{ width: progresso + '%' }"
                :aria-valuenow="progresso" aria-valuemin="0" aria-valuemax="100">{{ progresso }} %</div>
            </div>

            <div v-if="imagem">
              <img :src="imagem" class="rounded-circle" style="width: 200px; height: 200px;">
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
import axios from 'axios';
import config from './config/config';

import TarefasLista from './components/TarefasLista.vue'


export default {
  components: {
    TarefasLista
  },
  data() {
    return {
      progresso: 0,
      imagem: undefined
    }
  },
  async created() {
    /* axios.all([
      axios.get(`${config.apiUrl}/tarefas/1`),
      axios.get(`${config.apiUrl}/tarefas/3`)
    ]).then(axios.spread((tarefa1, tarefa3) => {
      console.log('Requisições simultaneas:')
      console.log('Tarefa1: ', tarefa1)
      console.log('Tarefa3: ', tarefa3)
    })) */

    /* axios.all([
      axios.get(`${config.apiUrl}/tarefas/1`),
      axios.get(`${config.apiUrl}/tarefas/3`)
    ]).then(response => {
      const [tarefa1, tarefa3] = response
      console.log('Tarefa1: ', tarefa1)
      console.log('Tarefa3: ', tarefa3)
    }) */

    const tarefa1 = await axios.get(`${config.apiUrl}/tarefas/1`)
    const tarefa3 = await axios.get(`${config.apiUrl}/tarefas/3`)
    console.log('Tarefa1: ', tarefa1)
    console.log('Tarefa3: ', tarefa3)

  },
  methods: {
    download() {
      axios.get('https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        {
          responseType: 'blob',
          onDownloadProgress: (progressEvent) => {
            console.log('Fazendo download...', progressEvent)
            this.progresso = (progressEvent.loaded / progressEvent.total * 100).toFixed(0)
          }
        }).then(response => {
          console.log('Download Concluido: ', response)

          const reader = new window.FileReader()
          reader.readAsDataURL(response.data)
          reader.onload = () => {
            this.imagem = reader.result
          }
        })
    }
  }
}
</script>