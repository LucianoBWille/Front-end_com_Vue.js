<template>
    <div>
        <postagem v-for="post in posts" :key="post" :conteudo="post"></postagem>
    </div>
</template>

<script>
    import postagem from "./postagem";

    export default {
        name: 'lw-feed',
        components: {
            postagem
        },
        data () {
            return {
                posts: [
                    {
                        title: 'alguma coisa',
                        paragrafos: [
                            'p1',
                            'p2',
                            'p3',
                        ]
                    },
                    {
                        title: 'alguma coisa',
                        paragrafos: [
                            'p1',
                            'p2',
                            'p3',
                        ]
                    },
                    {
                        title: 'alguma coisa',
                        paragrafos: [
                            'p1',
                            'p2',
                            'p3',
                        ]
                    },
                    {
                        title: 'alguma coisa',
                        paragrafos: [
                            'p1',
                            'p2',
                            'p3',
                        ]
                    },
                ]
            }
        },
        methods:{

        },
        //filters:
        //computed:
        //watch:
    }
</script>

<style>
</style>