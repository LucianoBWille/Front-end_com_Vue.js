<template>
  <div id="app">
    <h1 v-once v-text="title"></h1>
    <h2>{{subtitle}}</h2>
    <input :disabled="tasks.length==0" v-model="subtitle" type="text" placeholder="Descrição">
    <div v-if="tasks.length <=0 ">
      Não há tarefas
    </div>
    <div v-if="tasks.length>0">
      Existem {{tasks.length}} tarefas
      <ul>
        <li :key="task" v-for="task in tasks">{{task}}</li>
      </ul>
    </div>
    <button v-on:click="tasks=[]">Limpar</button>
  </div>
</template>

<script>
export default {
  name: 'lv-tarefas',
  data () {
    return {
      title: "Listagem de tarefas",
      subtitle: "Defina uma descrição",
      tasks: []
    }
  },
  mounted(){
    setTimeout(()=> {
      this.title = 'Novo Titulo'
      this.tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3']
    }, 3000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

li {
  text-align: left;
}

</style>
