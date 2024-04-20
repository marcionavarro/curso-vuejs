<template>
  <form class="col-md-4 col-sm-12 mx-auto" @submit.prevent="entrar">
    <h1 class="h3 mb-3 fw-normal">Faça seu login</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required
        v-model="usuario.email">
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required
        v-model="usuario.senha">
      <label for="floatingPassword">Senha</label>
    </div>

    <button class="btn btn-primary w-100 my-3 py-2" type="submit">Entrar</button>
    <div class="alert alert-danger" v-if="mensagem">{{ mensagem }}</div>
  </form>
</template>

<script>
import EventBus from './../../event-bus'

export default {
  data () {
    return {
      usuario: {
        email: '',
        senha: '',
      },
      mensagem: ''
    }
  },
  methods: {
    entrar () {
      if (this.usuario.email === 'marcio@email.com' && this.usuario.senha === 'admin123') {
        EventBus.$emit('autenticar', true)
        const destino = this.$route.query.redirecionar || '/contatos'
        this.$router.push(destino)
        return
      }
      this.mensagem = 'Dados incorretos!'
      setTimeout(() => this.mensagem = '', 3000)
    }
  }
}
</script>