import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import GalleryPage from '../pages/GalleryPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/gallery', name: 'Gallery', component: GalleryPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
