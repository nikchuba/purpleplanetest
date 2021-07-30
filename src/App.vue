<template>
  <div id="app">
    <list-images />
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
  width: 750px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px 0 10px 0;
  min-height: 100vh;
}

@media (max-width: 1200px) {
  #app{
    max-width: 800px;
  }
}

@media (max-width: 769px) {
  #app{
    max-width: 500px;
    margin: 0 20px;
  }
}

@media (max-width: 430px) {
  #app{
    max-width: none;
    margin: 0;
  }
}
</style>
