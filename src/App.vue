<template>
  <div id="app">
    <pop-up />
    <form-add-post class="form" />
    <list-photos />
    <Observer/>
  </div>
</template>

<script>
import ListPhotos from './pages/ListPhotos.vue'
import FormAddPost from './pages/FormAddPost.vue'
import PopUp from './components/PopUp.vue'
import Observer from './components/Observer.vue'
export default {
  name: 'App',
  components: {
    ListPhotos,
    FormAddPost,
    PopUp,
    Observer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 750px;
  text-align: center;
  background-color: rgba(205, 156, 254, 0);
  height: auto;
}

list-images{
  margin: 0 auto;
}

@media (max-width: 1200px) {
  #app{
    max-width: 800px;
  }
}

@media (max-width: 670px) {
  #app{
    max-width: 300px;
  }
  .form{
    width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 430px) {
  #app{
    width: none;
    margin: 0;
  }
}
</style>
