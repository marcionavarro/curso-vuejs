<template>
  <div id="app" class="container">
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>

    <KeepAlive>
      <component :is="componentSelecionado" v-bind="propsAtuais"></component>
    </KeepAlive>
  </div>
</template>

<script>
import Home from './components/PageHome.vue'
import Sobre from './components/PageSobre.vue'
import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    Home,
    Sobre,
    PostsLista
  },
  data() {
    return {
      componentSelecionado: 'Home',
      posts: [
        { id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes no Vue', autor: 'Marcio Navarro' },
        { id: 2, titulo: 'Distribuindo conteúdo com Slots', conteudo: 'Slots podem ser usados como repositorios de código no HTML', autor: 'João Carlos' },
      ]
    }
  },
  computed: {
    propsAtuais() {
      return this.componentSelecionado === 'PostsLista' ? { posts: this.posts } : {}
    }
  }
}
</script>

<style scoped>
.container {
  width: 960px;
  margin: auto;
}
</style>
