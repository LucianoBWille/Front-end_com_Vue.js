<template>
  <div id="app">
    <LVPerfil></LVPerfil>
    <hr>
    <LVBusca></LVBusca>
  </div>
</template>

<script>
import LVPerfil from './components/LVPerfil.vue'
import LVBusca from './components/LVBusca.vue'

export default {
  name: 'App',
  components: {
    LVPerfil,
    LVBusca,
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
