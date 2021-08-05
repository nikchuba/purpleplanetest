import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/listing',
      name: 'ListingPhotos',
      component: () => import('../pages/ListPhotos.vue')
    },
    {
      path: '/form',
      name: 'FormAddPost',
      component: () => import('../pages/FormAddPost.vue')
    },
    {
      path: '/',
      redirect: { name: 'ListingPhotos' }
    }
  ]
})
