<template>
    <div>
        <h1>Lista</h1>
        <button @click="post(id)" :key="id" v-for="id in [0,1,2,3,4,5,6,7,8,9]">
            {{id}}
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'lw-lista',
        methods: {
            post(id) {
                this.$router.replace('/postagens/'+String(id))
            }
        },
    }
</script>

<style scoped>

</style>