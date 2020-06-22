<template>
    <div>
        <h3>{{ titulo }}</h3>
        <slot></slot>
        <button @click="emitir">Confirmação</button>
    </div>
</template>

<script>
    export default {
        name: 'lw-confimacao',
        props: ['titulo'],
        methods: {
            emitir() {
                this.$emit('confirmation')
            }
        },
    }
</script>

<style scoped>

</style>