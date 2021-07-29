<template>
  <div id="app">
    <list-images></list-images>
  </div>
</template>

<script>
import ListImages from './components/ListImages.vue'
export default {
  name: 'App',
  components: {
    ListImages
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 800px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 0 10px 0;
}

</style>
