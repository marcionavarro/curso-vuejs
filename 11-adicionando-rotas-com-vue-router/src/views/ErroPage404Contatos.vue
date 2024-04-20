<template>
  <div class="cover-container w-100 h-100">
    <div class="text-center bg-warning mt-4 p-4">
      <h1>Erro 404!</h1>
      <p class="lead">Página não encontrada.</p>
      <p class="lead">
        <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white"
          @click.prevent="$router.back()">Voltar</a>
      </p>
    </div>
  </div>
</template>