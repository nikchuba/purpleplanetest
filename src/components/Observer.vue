<template>
  <div class="observer" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters(['dataPhotos', 'observer']),
  mounted () {
    this.createIntersectionObserver({
      callback: ([entry]) => {
        if (entry && entry.isIntersecting) {
          this.fetchPhotos(this.dataPhotos.pagePhotos)
        }
      },
      options: {}
    })
    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  },
  methods: {
    ...mapActions(['fetchPhotos', 'createIntersectionObserver'])
  }
}
</script>

<style scoped>
  .observer{
    width: 100%;
  }
</style>
