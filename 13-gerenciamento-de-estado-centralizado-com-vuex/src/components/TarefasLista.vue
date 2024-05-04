<template>
  <div>
    <div class="row">
      <div class="d-flex justify-content-between mb-4">
        <h1 class="fw-lighter">Lista de Tarefas</h1>
        <button class="btn btn-primary" @click="exibirFormularioCriarTarefa">
          <i class="fa fa-plus me-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>

    <h4 class="fw-lighter">A fazer ({{ $store.getters.tarefasAfazer.length }})</h4>

    <ul class="list-group mb-5" v-if="$store.getters.tarefasAfazer.length > 0">
      <TarefasListaIten v-for="tarefa in $store.getters.tarefasAfazer" :key="tarefa.id" :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao" />
    </ul>

    <p v-else>Nenhuma tarefa a fazer.</p>

    <h4 class="fw-lighter">Concluidas ({{ $store.getters.totalDeTarefasConcluidas }})</h4>

    <ul class="list-group" v-if="tarefasConcluidas.length > 0">
      <TarefasListaIten v-for="tarefa in tarefasConcluidas" :key="tarefa.id" :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao" />
    </ul>

    <p v-else>Nenhuma tarefa foi concluida.</p>

    <TarefaSalvar v-if="exibirFormulario" :tarefa="tarefaSelecionada" />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
  components: {
    TarefaSalvar,
    TarefasListaIten
  },
  data () {
    return {
      exibirFormulario: false,
      tarefaSelecionada: undefined
    }
  },
  computed: {
    ...mapState(['tarefas']),
    tarefasConcluidas () {
      return this.$store.getters.tarefasConcluidas
    }
  },
  methods: {
    exibirFormularioCriarTarefa (event) {
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada = undefined
        return
      }
      this.exibirFormulario = !this.exibirFormulario
    },
    selecionarTarefaParaEdicao (tarefa) {
      this.exibirFormulario = true
      this.tarefaSelecionada = tarefa
    },
    resetar () {
      this.exibirFormulario = false
      this.tarefaSelecionada = undefined
    }
  }
}
</script>
