<template>
    <div>
        
            <h1 @click="exibeParagrafo = !exibeParagrafo">{{conteudo.title}}</h1>
        
        <div v-if="exibeParagrafo">
            <p v-for="(paragrafo, index) in conteudo.paragrafos" :key="index">{{paragrafo}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lw-post',
        props: ['conteudo'],
        data () {
            return {
                exibeParagrafo: false,
            }
        },
        //methods:
        //filters:
        //computed:
        //watch:
    }
</script>

<style>
</style>