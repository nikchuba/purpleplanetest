<template>
  <div id="app">
    <pop-up v-if="isPopUpVisible" @showPopUp="showPopUp" :data="postRequestInfo"/>
    <form-add-post @getData="getData" class="form" />
    <list-images />
  </div>
</template>

<script>
import ListImages from './components/ListImages.vue'
import FormAddPost from './components/FormAddPost.vue'
import PopUp from './components/PopUp.vue'

export default {
  name: 'App',
  data () {
    return {
      postRequestInfo: {},
      isPopUpVisible: false
    }
  },
  components: {
    ListImages,
    FormAddPost,
    PopUp
  },
  methods: {
    getData (json) {
      this.postRequestInfo = json
      this.showPopUp()
      setTimeout(this.closePopUp, 8000)
    },
    showPopUp () {
      this.isPopUpVisible = true
    },
    closePopUp () {
      this.isPopUpVisible = false
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
