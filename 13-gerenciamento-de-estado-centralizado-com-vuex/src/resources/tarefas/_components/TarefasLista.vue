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

    <h4 class="fw-lighter">A fazer ({{ tarefasAFazer.length }})</h4>

    <ul class="list-group mb-5" v-if="tarefasAFazer.length > 0">
      <TarefasListaIten v-for="tarefa in tarefasAFazer" :key="tarefa.id" :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao" @concluir="concluirTarefa({ tarefa: $event })"
        @deletar="confirmarRemocaoTarefa" />
    </ul>

    <p v-else>Nenhuma tarefa a fazer.</p>

    <h4 class="fw-lighter">Concluidas ({{ totalDeTarefasConcluidas }})</h4>

    <ul class="list-group" v-if="tarefasConcluidas.length > 0">
      <TarefasListaIten v-for="tarefa in tarefasConcluidas" :key="tarefa.id" :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao" @concluir="concluirTarefa({ tarefa: $event })"
        @deletar="confirmarRemocaoTarefa" />
    </ul>

    <p v-else>Nenhuma tarefa foi concluida.</p>

    <TarefaSalvar v-if="exibirFormulario" :tarefa="tarefaSelecionada" />

  </div>
</template>

<script>
import register from './../_store/register'
import { createNamespacedHelpers } from 'vuex'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

const { mapActions, mapGetters, mapState } = createNamespacedHelpers('tarefas')

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
    ...mapGetters(['tarefasAFazer', 'tarefasConcluidas', 'totalDeTarefasConcluidas', 'boasVindas'])
  },
  created () {
    register(this.$store)
    this.listarTarefas()
  },
  methods: {
    ...mapActions([
      'concluirTarefa',
      'deletarTarefa',
      'listarTarefas'
    ]),
    confirmarRemocaoTarefa (tarefa) {
      const confirmar = window.confirm(`Deseja deletar a tarefa "${tarefa.titulo}"?`)
      if (confirmar) {
        this.deletarTarefa({ tarefa })
      }
    },
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
