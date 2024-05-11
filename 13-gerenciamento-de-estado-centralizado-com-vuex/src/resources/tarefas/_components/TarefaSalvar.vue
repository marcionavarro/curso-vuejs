<template>
  <div class="mt-4">
    <hr>
    <h2 class="fw-lighter">{{ tituloSalvarOuEditar() }} Tarefa</h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div :class="classeColuna">
          <div class="form-group">
            <label>Título</label>
            <input type="text" :class="isTitleClass" class="form-control mt-3" id="titulo"
              placeholder="Título da tarefa" v-model="tarefa.titulo" required>
            <div :class="isTitleMessageClass">
              {{ isTitleMessage }}
            </div>
          </div>
        </div>
        <div class="col-sm-2" v-if="tarefaSelecionada">
          <div class="form-group">
            <label>Tarefa concluída?</label>
            <button type="button" class="btn btn-sm d-block" :class="classeBotao"
              @click="tarefa.concluido = !tarefa.concluido">
              <i class="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">{{ tituloSalvarOuEditar() }}</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      tarefa: {}
    }
  },
  computed: {
    ...mapState('tarefas', [
      'tarefaSelecionada'
    ]),
    classeColuna () {
      return this.tarefaSelecionada
        ? 'col-sm-10'
        : 'col-sm-12'
    },
    classeBotao () {
      return this.tarefaSelecionada && this.tarefa.concluido
        ? 'btn-success'
        : 'btn-secondary'
    },
    isTitleClass () {
      return this.tarefa.titulo ? 'is-valid' : 'is-invalid'
    },
    isTitleMessageClass () {
      return this.tarefa.titulo ? 'valid-feedback mb-3' : 'invalid-feedback mb-3'
    },
    isTitleMessage () {
      return this.tarefa.titulo ? 'Preenchido com sucesso' : 'Por favor, preencha o titulo.'
    }
  },
  watch: {
    tarefaSelecionada (tarefaNova, tarefaAntiga) {
      this.sincronizar(tarefaNova)
    }
  },
  created () {
    this.sincronizar(this.tarefaSelecionada)
  },
  methods: {
    salvar (event) {
      if (!this.tarefa.titulo) return

      const operacao = !this.tarefaSelecionada ? 'criar' : 'editar'
      this.$emit('salvar', { operacao, tarefa: this.tarefa })
    },
    sincronizar (novaTarefa) {
      this.tarefa = Object.assign(
        {},
        novaTarefa || { titulo: '', concluido: false }
      )
    },
    tituloSalvarOuEditar () {
      return !this.tarefaSelecionada ? 'Salvar' : 'Editar'
    }
  }
}
</script>
