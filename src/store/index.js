import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchPhotos (context, page) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=6`)
      const listPhotos = await response.json()
      context.commit('updateState', listPhotos)
    }
  },
  mutations: {
    updateState (state, photos) {
      state.dataPhotos.photos.push(...photos)
      state.dataPhotos.pagePhotos++
    }
  },
  state: {
    dataPhotos: {
      photos: [],
      pagePhotos: 1
    },
    post: []
  },
  getters: {
    dataPhotos (state) {
      return state.dataPhotos
    }
  }
})
