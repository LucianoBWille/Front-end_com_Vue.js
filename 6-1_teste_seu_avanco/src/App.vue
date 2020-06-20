<template>
  <div id="app">
    <feed></feed>
  </div>
</template>

<script>
import feed from './components/feed.vue'

export default {
  name: 'App',
  components: {
    feed
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
