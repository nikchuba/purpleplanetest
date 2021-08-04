<template>
  <div class="pop-up" v-if="isVisiblePopUp">
    <ul>
      <li>User ID: {{post.userId}}</li>
      <li>Post ID: {{post.id}}</li>
      <li>Title: {{post.title}}</li>
      <li>Body: {{post.body}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['post', 'isVisiblePopUp'])
}
</script>

<style scoped>
  .pop-up {
    position: absolute;
    background-color: #fff;
    left: 0;
    width: 100%;
    height: 100px;
    bottom: 20px;
    z-index: 1000;
    position: fixed;
    overflow: hidden;
  }
  li{
    list-style-type: none;
  }
  ul{
    padding-left: 0;
  }
</style>
