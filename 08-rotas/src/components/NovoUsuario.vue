<template>
    <div>
        <h1>Novo Usuário</h1>
        <button @click="falhou">falhou</button>
        <button @click="beleza">Beleza</button>
    </div>
</template>

<script>
    export default {
        name: 'lv-novo-usuario',
        methods: {
            falhou() {
                this.$router.replace('/usuarios/erro')
            },
            beleza() {
                this.$router.replace('/usuarios/leonardo')
            }
        },
    }
    
</script>

<style scoped>

</style>