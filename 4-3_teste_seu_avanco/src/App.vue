<template>
  <div id="app">
    <h1 v-text="nome"/>
    <small v-if="displaySmall" v-once v-text="nome"/>
    <br>
    <button :disabled="disabledButton" @click="displaySmall=!displaySmall">Small on/off</button>
    <br>
    <input type="text" v-model="nome">
    <p>Cadeiras:</p>
    <ul>
      <li v-for="cadeira in cadeiras" :key="cadeira">{{cadeira}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nome: 'Mané Garrincha',
      displaySmall: true,
      disabledButton: true,
      cadeiras: ["30.000 brancas","30.000 cinzas","10.000 vips"]
    }
  },
  mounted(){
    setTimeout(() => { 
      this.nome = "Mineirão"
      this.disabledButton = false
    }, 4000)
  }
}
</script>

<style>
</style>
