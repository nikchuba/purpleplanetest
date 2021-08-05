<template>
  <div id="app">
    <div id="nav">
      <router-link to="/listing">Listing Photos</router-link>
      <router-link to="/form">Form create post</router-link>
    </div>
    <router-view></router-view>
    <pop-up />
  </div>
</template>

<script>
import PopUp from './components/PopUp.vue'
export default {
  name: 'App',
  components: {
    PopUp
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

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}
#nav a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 305px;
  height: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 33px;
  color: #fff;
  background-color: rgba(166, 0, 244, 0.6);
  padding: 9px 0;
  transition: 0.5s;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
}

#nav a:first-child {
  border-radius: 0 0 0 20px;
}
#nav a:last-child {
  border-radius: 0 0 20px 0;
}

#nav a.router-link-exact-active {
  color: #fff;
  background-color: rgba(166, 0, 244, 1);
  transition-delay: 0.2s;
  transition-duration: 0.4s;
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
