<template>
    <div :class="$style.contador">
        <h3>Clicado {{ contador }} vezes</h3>
        <button @click="incrementar">Incremetar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        incrementar() {
            this.contador++
        }
    },
    created() {
        console.log('CSS modules', this.$style)
    }
}
</script>

<!-- <style scoped> -->
<style module>
    .contador {
        border: 1px solid red;
    }
</style>
