<template>
    <div>
        <ul>
            <li v-for="item in lista" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'lv-lista',
        props: {
            ordena: {
                type: Boolean,
                default: false
            },
            lista: {
                required: true,
                type: Array,
            }
        },
        created() {
            if(this.ordena === true){
                this.lista.sort()
            }
        },
        //methods:
        //filters:
        //computed:
        //watch:
    }
</script>

<style>
li {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
    /*float: left;*/
}
</style>