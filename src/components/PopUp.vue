<template>
  <div class="pop-up">
    <ul>
      <li>User ID: {{data.userId}}</li>
      <li>Post ID: {{data.id}}</li>
      <li>Title: {{data.title}}</li>
      <li>Body: {{data.body}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: null
    }
  },
  watch: {
    data: function (val) {
      if (val !== null) {
        console.log(val)
        this.$emit('showPopUp')
      }
    }
  }
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
