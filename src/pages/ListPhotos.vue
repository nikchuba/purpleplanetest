<template>
  <div class="list-images">
    <div
      v-for="photo in dataPhotos.photos"
      :key="photo.id"
      class="card"
    >
      <img
        class="card-image"
        :src="photo.url"
        :alt="`picture: ${photo.id}`"
        width="300"
        height="300"
      >
      <div class="card-body">
        <span class="card-title">{{ photo.title }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['dataPhotos']),
  mounted () {
    this.$nextTick(() => {
      this.fetchPhotos()
    })
  },
  methods: {
    ...mapActions(['fetchPhotos'])
  }
}
</script>

<style lang="css" scoped>
  .list-images{
  margin: 20px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 70%;
  max-width: 620px;
  min-width: 320px;
}
.card{
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
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
@media (max-width: 670px) {
  .card{
  margin-left: 0;
  margin-right: 0;
}
}
</style>
