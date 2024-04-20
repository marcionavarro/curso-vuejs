<template>
  <div>
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <transition name="fade">
      <router-view name="contato-detalhes">
      </router-view>
    </transition>
  </div>
</template>


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
