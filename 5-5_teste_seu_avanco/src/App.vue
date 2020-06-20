<template>
  <div id="app">
    <input v-model="nome" type="text">
    <br>
    <small>{{status}}</small>
    <br>
    <button @click="ola()">Olá</button>
    <div v-if="status == ''">
      {{ nome | caixaAlta }} tem
      {{ nomeCaracteres }} caracteres
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nome: '',
      status:'Digite seu nome acima',
      displayFilter: "none",
    }
  },
  methods:{
    ola(){
      alert('Olá, ' + this.nome)
    },
    recebendoNome(){
      let valor = this.nome
      setTimeout( () => {
        if (this.nome == valor){
          this.status = ''
          this.displayFilter = ''
        }
      }, 500)
    }
  },
  watch:{
    nome: function (novoValor, valorAntigo) {
      this.status = 'Recebendo seu nome...'
      this.recebendoNome()
    }
  },
  filters: {
    caixaAlta(valor){
      return valor.toUpperCase()
    }
  },
  computed: {
    nomeCaracteres: {
      get: function () {
        return this.nome.length
      }
    }
  },
}
</script>

<style>
</style>
