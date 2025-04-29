import { createRouter, createWebHistory } from 'vue-router'
import CrowsNest from '@/views/CrowsNest.vue'
import Forecastle from '@/views/Forecastle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'crowsnest',
      component: CrowsNest
    },
    {
      path: '/forecastle',
      name: 'forecastle',
      component: Forecastle
    },

  ]
})

export default router