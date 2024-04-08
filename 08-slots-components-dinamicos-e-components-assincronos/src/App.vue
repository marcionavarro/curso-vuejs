<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>
    <Post>
      <h2 slot="cabecalho">Components VueJS</h2>
      <template  slot="conteudo">
        <p>Components são umas das peças mais importante do Vue</p>
        <span>...</span>
      </template>
      
      <small slot="rodape">por Marcio Navarro</small>
    </Post>
  </div>
</template>

<script>
import Post from './components/PostList.vue'

export default {
  components: {
    Post
  }
}
</script>

<style scoped>
.container{
  width: 960px;
  margin: auto;
}
</style>
