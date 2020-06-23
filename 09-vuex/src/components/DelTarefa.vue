<template>
    <div>
        <button @click="apagar(tarefa)">X</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'lvdeltarefa',
        props: {
            tarefa: {
                required:true,
                type: String,
            }
        },
        methods: {/*
            apagar() {
                this.$store.dispatch('removerTarefa', this.tarefa)
            },*/
            ...mapActions({
                apagar: 'removerTarefa'
            })
        },
    }
</script>

<style scoped>

</style>