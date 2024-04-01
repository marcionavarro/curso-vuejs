<template>
  <div>
    <h2>Editar filme</h2>

    <div class="form-group">
      <label class="mb-1">Título:</label>
      <input type="text" class="form-control" placeholder="Insira o título" :value="filmeSelecionado.titulo"
        @input="filmeSelecionado = { propriedade: 'titulo', valor: $event.target.value }">
    </div>

    <div class="form-group mt-2">
      <label class="mb-1">Ano:</label>
      <input type="text" class="form-control" placeholder="Insira o ano" :value="filmeSelecionado.ano"
        @input="filmeSelecionado = { propriedade: 'ano', valor: $event.target.value }">
    </div>

    <button @click="salvarFilme" class="btn btn-primary mt-4 float-end">Salvar</button>

  </div>
</template>

<script>
import { eventBus } from '@/main'

/* eslint-disable vue/no-side-effects-in-computed-properties */
export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      filmeLocal: this.filme
    }
  },
  computed: {
    filmeSelecionado: {
      get () {
        return (this.filmeLocal = this.filme)
      },
      set (dados) {
        this.setFilmeSelecionado(dados)
      }
    }
  },
  methods: {
    setFilmeSelecionado (dados) {
      this.filmeLocal = Object.assign(
        {},
        this.filmeLocal,
        { [dados.propriedade]: dados.valor }
      )
    },
    salvarFilme (event) {
      // this.$emit('atualizarFilme', this.filmeLocal)
      eventBus.atualizarFilme(this.filmeLocal)
    }
  }
}
</script>
