<template>
  <div>
    <ContatosLista :busca="busca" />
    <transition name="fade">
      <router-view></router-view>
      <router-view name="contato-detalhes"></router-view>
    </transition>
  </div>
</template>

<script>
import ContatosLista from '@/components/contatos/ContatosLista.vue';

export default {
  components: {
    ContatosLista
  },
  props: ['busca']
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
