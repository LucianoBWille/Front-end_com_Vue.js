<template>
  <div id="app">
    <h4>Lista um</h4>
    <lv-lista :lista="['feijão','arroz', 'carne']"></lv-lista>
    <br>
    <lv-lista :lista="['feijão','arroz', 'carne']" ordena></lv-lista>
    <br>
    <h4>Lista dois</h4>
    <lv-lista :lista="['leite','biscoito', 'bombom', 'aveia']" :ordena="true"></lv-lista>
    <br>
    <lv-lista :lista="['leite','biscoito', 'bombom', 'aveia']"></lv-lista>
    <br><hr>
    <lv-cartao titulo="Preço">
      Aqui você encontra preços <strong>baixos</strong>
      <div slot="rodape">
        Meu conteúdo do rodapé
      </div>
    </lv-cartao>
    <br><hr>
    <lv-cartao titulo="Qualidade">
      Temos os produtos com mais <strong>qualidade</strong> do mercado.
      <div slot="rodape">
      </div>
    </lv-cartao>
    <br><hr>
    <lv-leitor></lv-leitor>
    <lv-comentarios></lv-comentarios>
    <br><hr>
    <lv-usuario :nome="'Luciano'" @novaMsg="escrever"></lv-usuario>
    <lv-usuario :nome="'Amarildo'" @novaMsg="escrever"></lv-usuario>
    <br>
    <div v-html="chat"></div>
  </div>
</template>

<script>
import LvLista from './components/LvLista.vue'
import LvCartao from './components/LvCartao.vue'
import LvLeitor from './components/LvLeitor.vue'
import LvComentarios from './components/LvComentarios.vue'
import LvUsuario from './components/LvUsuario.vue'

export default {
  name: 'App',
  components: {
    LvLista,
    LvCartao,
    LvLeitor,
    LvComentarios,
    LvUsuario,
  },
  data() {
    return {
      chat: ''
    }
  },
  methods: {
    escrever(mensagem) {
      this.chat = mensagem + '<hr>' + this.chat
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
