<template>
  <div id="app">
    <pop-up />
    <form-add-post class="form" />
    <list-photos />
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ListPhotos from './pages/ListPhotos.vue'
import FormAddPost from './pages/FormAddPost.vue'
import PopUp from './components/PopUp.vue'
import Observer from './components/Observer.vue'
export default {
  name: 'App',
  computed: mapGetters(['dataPhotos']),
  updated () {
    this.$nextTick(() => {
      this.getState()
    })
  },
  components: {
    ListPhotos,
    FormAddPost,
    PopUp,
    Observer
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    intersected () {
      this.fetchPhotos(this.dataPhotos.pagePhotos)
    }
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
  min-height: 100vh;
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
