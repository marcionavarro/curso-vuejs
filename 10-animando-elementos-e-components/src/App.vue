<template>
  <div id="app">
    <main>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
            <img src="./assets/logo.png" alt="VueJS" width="32" />
            <span class="fs-4">VueJS</span>
          </a>
        </header>

        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Animações</h1>
            <p class="col-md-8 fs-4">Treinando transição/animação de elementos/components no Vue.</p>
          </div>
        </div>

        <div class="container">
          <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alterar</button>
          <div>
            <transition appear appear-class="" appear-active-class="animated flipInY" appear-to-class=""
              @before-appear="beforeAppear" @appear="appear" @after-appear="afterAppear"
              @appear-cancelled="appearCancelled" enter-active-class="animated bounceInLeft"
              leave-active-class="animated bounceOutDown">
              <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
            </transition>
          </div>
        </div>

        <footer class="pt-3 mt-5 text-body-secondary border-top">
          &copy; 2024
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mostrar: true
    }
  },
  methods: {
    beforeAppear (el) {
      console.log('beforeAppear')
    },
    appear (el, done) {
      console.log('appear')
      setTimeout(done, 1000)
    },
    afterAppear (el) {
      console.log('afterAppear')
    },
    appearCancelled (el) {
      console.log('appearCancelled')
    },
    beforeEnter (el) {
      console.log('beforeEnter')
      el.style.opacity = 0
    },
    enter (el, done) {
      console.log('enter')

      let contagem = 0

      const intervalo = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1
        contagem++
        if (contagem > 10) {
          clearInterval(intervalo)
          done()
        }
      }, 150)
    },
    afterEnter (el) {
      console.log('afterEnter')
    },
    enterCancelled (el) {
      console.log('enterCancelled')
    },

    beforeLeave (el) {
      console.log('beforeLeave')
      el.style.transition = 'width 0.5s'
      el.style.overflow = 'hidden'
      el.style.withSpace = 'nowrap'
    },
    leave (el, done) {
      console.log('leave')

      let contagem = 0
      const tamanho = el.offsetWidth

      const intervalo = setInterval(() => {
        el.style.width = (tamanho * (1 - (contagem / 10))) + 'px'
        contagem++

        if (contagem > 10) {
          clearInterval(intervalo)
          done()
        }
      }, 150)
    },
    afterLeave (el) {
      console.log('afterLeave')
    },
    leaveCancelled (el) {
      console.log('leaveCancelled')
    }
  }
}
</script>

<style>
body {
  overflow: hidden;
}
</style>

<style scoped>
/* slide */
.slider-enter,
.slider-leave-to {
  opacity: 0;
}

.slider-enter-active {
  animation: slide 0.7s cubic-bezier(.17, .67, .8, .31);
  transition: 0.7s cubic-bezier(.17, .67, .8, .31);
}

.slider-leave-active {
  animation: slide 0.7s reverse;
  transition: opacity 2s;
}

@keyframes slide {
  0% {
    transform: translateX(-100px);
  }

  100% {
    transform: translateX(0px);
  }
}

/* zoom */
.zoom-enter,
.zoom-leave-to {
  transform: scale(0);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s;
}

/* zoom */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
