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
            <h1 class="display-5 fw-bold">Vue Router</h1>
            <p class="col-md-8 fs-4">Adicionando rotas a Single Page Applications no Vue.</p>
          </div>
        </div>

        <div class="container">
          <router-link to="/" class="btn btn-info mb-4 me-3" exact>Home</router-link>
          <router-link :to="{ path: '/contatos' }" class="btn btn-info mb-4 me-3">Contatos</router-link>
          <router-view></router-view>
        </div>

        <footer class="pt-3 mt-5 text-body-secondary border-top">
          &copy; 2024
        </footer>
      </div>
    </main>
  </div>
</template>

<script>

</script>

<style></style>
