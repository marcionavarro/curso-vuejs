<template>
    <div>
        <AppHeader />
        <AppContador />
    </div>
</template>

<script>
import AppContador from './AppContador.vue'
import AppHeader from './AppHeader.vue'
export default {
    components: {
        AppContador,
        AppHeader
    }
}
</script>