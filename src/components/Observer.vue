<template>
  <div class="observer" />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    observer: null
  }),
  mounted () {
    this.createIntersectionObserver()
    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  },
  methods: {
    createIntersectionObserver () {
      const options = this.options || {}
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          this.$emit('intersect')
        }
      }, options)
    }
  }
}
</script>

<style scoped>
  .observer{
    width: 100%;
  }
</style>
