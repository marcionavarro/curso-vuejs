<template>
    <div>
        <AppHeader />
        <contador-info />
        <Contador />
    </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader.vue'
import ContadorInfo from './components/contador/ContadorInfo.vue'
import Contador from './components/contador/Contador.vue'

export default {
    components: {
        AppHeader,
        Contador,
        ContadorInfo
    }
}
</script>