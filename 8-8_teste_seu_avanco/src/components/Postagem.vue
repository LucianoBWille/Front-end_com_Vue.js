<template>
    <div>
        <h1>Postagem + {{msg}}</h1>
        <router-link to="/postagens/comentarios">Comentários</router-link>
    </div>
</template>

<script>
    export default {
        name: "lw-postagem",
        props: ['msg']
    }
</script>

<style scoped>

</style>