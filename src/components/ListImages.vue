<template>
  <div class="list-images">
    <div class="card" v-for="item in listImages" :key="item.id">
      <img class="card-image" :src="item.url" :alt="`picture: ${item.id}`">
      <div class="card-body">
        <span class="card-title">{{item.title}}</span>
      </div>
    </div>

    <InfiniteLoading @infinite="infiniteHandler"></InfiniteLoading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  components: {
    InfiniteLoading
  },
  data () {
    return {
      listImages: []
    }
  },
  mounted () {
    this.fetchPhoto()
  },
  methods: {
    async fetchPhotos () {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
      const listImages = await response.json()
      this.listImages.push(...listImages)
    },
    async fetchPhoto (id) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
      const image = await response.json()
      this.listImages.push(...image)
      return image.length
    },
    async infiniteHandler ($state) {
      const id = this.listImages.length + 1
      const count = await this.fetchPhoto(id)

      if (count > 0) {
        return $state.loaded()
      }

      return $state.complete()
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
  max-width: 600px;
  min-width: 320px;
}
.card{
  width: 600px;
  height: 600px;
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
  height: 100px;
  width: inherit;
  border-radius: 0 0 20px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-title{
  font-size: 20px;
  height: inherit;
  width: inherit;
}
</style>
