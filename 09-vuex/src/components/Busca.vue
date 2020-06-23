<template>
    <div>
        <label>Buscar por </label>
        <input type="text" v-model="termo">
        <ul>
            <li v-for="tarefa in resultado" :key="tarefa">{{ tarefa }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'lvbusca',
        data() {
            return {
                termo: '',
            }
        },
        computed: {
            resultado() {
                return this.$store.getters.buscaTarefas(this.termo) 
            }
        },
    }
</script>

<style scoped>

</style>