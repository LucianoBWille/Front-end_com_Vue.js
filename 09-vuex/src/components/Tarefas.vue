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
    import { mapGetters } from 'vuex'

    export default {
        name: 'lvtarefas',
        components: {
            lvdeltarefa,
        },
        computed: {/*
            tarefas() {
                return this.listaTarefas 
            },*/
            ...mapGetters({
                tarefas: 'listaTarefas'
            }),
        },
    }
</script>

<style scoped>
li{
    display: inline;
}
</style>