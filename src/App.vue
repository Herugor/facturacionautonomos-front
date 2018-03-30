<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/toolbar'
export default {
  components: {Toolbar},
  name: 'App'
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
</style>
