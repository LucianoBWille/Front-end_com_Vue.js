<template>
  <div id="app">
    <h4>Lista um</h4>
    <LvLista :lista="['feijão','arroz', 'carne']"></LvLista>
    <br>
    <LvLista :lista="['feijão','arroz', 'carne']" ordena></LvLista>
    <br>
    <h4>Lista dois</h4>
    <LvLista :lista="['leite','biscoito', 'bombom', 'aveia']" :ordena="true"></LvLista>
    <br>
    <LvLista :lista="['leite','biscoito', 'bombom', 'aveia']"></LvLista>
  </div>
</template>

<script>
import LvLista from './components/LvLista.vue'

export default {
  name: 'App',
  components: {
    LvLista
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
