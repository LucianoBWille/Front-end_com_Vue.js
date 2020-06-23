<template>
    <div>
        <button @click="apagar">X</button>
    </div>
</template>

<script>
    export default {
        name: 'lvdeltarefa',
        props: {
            tarefa: {
                required:true,
                type: String,
            }
        },
        methods: {
            apagar() {
                this.$store.commit('DEL_TAREFA', this.tarefa)
            }
        },
    }
</script>

<style scoped>

</style>