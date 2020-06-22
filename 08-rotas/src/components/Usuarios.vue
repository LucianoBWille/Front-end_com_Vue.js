<template>
    <div>
        <h1>Usuários</h1>
        <router-link to='/usuarios/novo'>Novo Usuário</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'lv-usuarios'
    }
</script>

<style scoped>

</style>