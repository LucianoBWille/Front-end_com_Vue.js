<template>
    <div>
        <label>Buscar por </label>
        <input type="text" v-model="termo">
        <ul>
            <li v-for="tarefa in resultado(termo)" :key="tarefa">{{ tarefa }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'lvbusca',
        data() {
            return {
                termo: '',
            }
        },
        computed: {/*
            resultado() {
                return this.buscaTarefas(this.termo) 
            },*/
            ...mapGetters({
                resultado: 'buscaTarefas'
            })
        },
    }
</script>

<style scoped>

</style>