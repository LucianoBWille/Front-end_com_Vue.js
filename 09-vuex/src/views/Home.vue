<template>
  <div class="home">
    <h1>Home</h1>
    <lvaddtarefa></lvaddtarefa>
    <lvtarefas></lvtarefas>
    <lvbusca></lvbusca>
  </div>
</template>

<script>
// @ is an alias to /src
import lvaddtarefa from '.././components/AddTarefa.vue'
import lvtarefas from '.././components/Tarefas.vue'
import lvbusca from '.././components/Busca.vue'

export default {
  name: 'Home',
  components: {
    lvaddtarefa,
    lvtarefas,
    lvbusca,
  },
}
</script>
