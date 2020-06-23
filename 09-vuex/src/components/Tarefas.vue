<template>
    <div>
        <ul>
            <li v-for="tarefa in tarefas" :key="tarefa">
                <lvdeltarefa :tarefa="tarefa"></lvdeltarefa>
                {{tarefa}}
            </li>
        </ul>
    </div>
</template>

<script>
    import lvdeltarefa from './DelTarefa'

    export default {
        name: 'lvtarefas',
        components: {
            lvdeltarefa,
        },
        computed: {
            tarefas() {
                return this.$store.getters.listaTarefas 
            }
        },
    }
</script>

<style scoped>
li{
    display: inline;
}
</style>