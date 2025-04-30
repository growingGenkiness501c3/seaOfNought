import { createRouter, createWebHistory } from 'vue-router'
import CrowsNest from '@/views/CrowsNest.vue'
import Forecastle from '@/views/Forecastle.vue'
import Anchor from '@/views/Anchor.vue'
import vocabulary from '@/views/vocabulary.vue'

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
    {
      path: '/anchor',
      name: 'anchor',
      component: Anchor
    },
    {
      path: '/vocabulary',
      name: 'vocabulary',
      component: vocabulary
    },

  ]
})

export default router