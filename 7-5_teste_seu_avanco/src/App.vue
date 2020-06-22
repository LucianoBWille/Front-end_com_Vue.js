<template>
  <div id="app">
    <lw-confirmacao v-if="!confirmado" titulo="Algo" @confirmation="confirmar">
      <p>Sem duvidas vai ficar <b>estranho</b></p>
    </lw-confirmacao>
    <p v-if="confirmado"> 
      {{informativo | reverse}}
    </p>
  </div>
</template>

<script>
import LwConfirmacao from './components/LwConfirmacao.vue'
import reverse from './reverse'

export default {
  name: 'App',
  components: {
    LwConfirmacao,
  },
  data() {
    return {
      confirmado: false,
      informativo: "Confirmado carai"
    }
  },
  mixins: [reverse],
  methods: {
    confirmar() {
      this.confirmado=true
    }
  },
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
