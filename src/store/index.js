import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchPhotos (context, page) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=6`)
      const listPhotos = await response.json()
      context.commit('updateDataPhotos', listPhotos)
    },
    async sendPost (context, options) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
      const post = await response.json()
      context.commit('updatePost', post)
      context.commit('changeVisiblePopUp', true)
      setTimeout(() => {
        context.commit('changeVisiblePopUp', false)
      }, 8000)
    },
    createIntersectionObserver (context, props) {
      const observer = new IntersectionObserver(props.callback, props.options)
      context.commit('setObserver', observer)
    }
  },
  mutations: {
    updateDataPhotos (state, photos) {
      state.dataPhotos.photos.push(...photos)
      state.dataPhotos.pagePhotos++
    },
    updatePost (state, post) {
      state.post = post
    },
    changeVisiblePopUp (state, bool) {
      state.isVisiblePopUp = bool
    },
    setObserver (state, observer) {
      state.observer = observer
    }
  },
  state: {
    dataPhotos: {
      photos: [],
      pagePhotos: 1
    },
    post: [],
    isVisiblePopUp: false,
    observer: null
  },
  getters: {
    dataPhotos (state) {
      return state.dataPhotos
    },
    post (state) {
      return state.post
    },
    isVisiblePopUp (state) {
      return state.isVisiblePopUp
    },
    observer (state) {
      return state.observer
    }
  }
})
