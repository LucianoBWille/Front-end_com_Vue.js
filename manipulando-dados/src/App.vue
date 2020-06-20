<template>
  <div id="app">
    <p>
      <button @click="calcula('-')">-</button>
      {{total}}
      <button @click="calcula('+')">+</button>
    </p>
    <p>Nome Iniciado: {{nome}}</p>
    <p>Nome Filtrado: {{nome | formataNome}}</p>
    <p>Nome Computado: {{formataNome}}</p>
    <label>Input a computar</label>
    <input v-model="nomeFormatado" type="text">
    <input v-model="busca" type="text">
    <p v-text="resultado"></p>
  </div>
</template>

<script>
export default {
  name: 'lv-contador',
  data () {
    return {
      total: 10,
      nome: "luCiaNo berWanGer wiLle",
      resultado: '',
      busca: '',
    }
  },
  methods: {
    calcula(sinal){
      this.total = (sinal == '-') ? this.total - 1 : this.total + 1
    },
    recolheResposta(){
      let valor = this.busca
      setTimeout( () => {
        if(this.busca==valor){
          this.resultado = 'Terminou de digitar...'
        }
      }, 500)
    }
  },
  filters: {
    formataNome(valor){
      console.log('Executando Filter')
      valor = valor.toLowerCase()
      let corta = valor.split(' ')
      let resultado = ''
      for (let nome of corta){
        resultado += nome.charAt(0).toUpperCase() + nome.slice(1) + ' '
      }
      return resultado
    }
  },
  computed:{
    formataNome(){
      console.log('Executando Computed')
      return this.nome.toUpperCase()
    },
    nomeFormatado: {
      get: function (){
        console.log('Executando Computed')
        return this.nome.toUpperCase()
      },
      set: function (novoValor){
        this.nome = novoValor.substring(0, 3)
      }
    }
  },
  watch:{
    busca: function(novoValor, valorAntigo){
      this.resultado = 'Aguardando o término da digitação...'
      this.recolheResposta() 
    }
  }
}
</script>

<style>

</style>
