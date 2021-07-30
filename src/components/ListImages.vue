<template>
  <div class="list-images">
    <div
      v-for="item in listImages"
      :key="item.id"
      class="card"
    >
      <img
        class="card-image"
        :src="item.url"
        :alt="`picture: ${item.id}`"
        width="300"
        height="300"
      >
      <div class="card-body">
        <span class="card-title">{{ item.title }}</span>
      </div>
    </div>
    <!-- <InfiniteLoading class="infiniteLoading" @infinite="infiniteHandler"></InfiniteLoading> -->
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
// import InfiniteLoading from 'vue-infinite-loading'
import Observer from './Observer.vue'
export default {
  components: {
    Observer
  },
  // components: {
  //   InfiniteLoading
  // },
  data () {
    return {
      page: 1,
      listImages: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getPhotos()
    })
  },
  methods: {
    async getPhotos () {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${this.page}&_limit=6`)
      const listImages = await response.json()
      this.listImages = [...this.listImages, ...listImages]
    },
    intersected () {
      this.page++
      this.getPhotos()
    }
  }
}
</script>

<style lang="css" scoped>
  .list-images{
  margin: 20px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: auto;
  max-width: 650px;
  min-width: 320px;
}
.card{
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  position: relative;
}
.card-image{
  border-radius: 20px;
}
.card-body{
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  height: 60px;
  width: 280px;
  border-radius: 0 0 20px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  padding: 10px;
}
.card-title{
  font-size: 20px;
}
</style>
