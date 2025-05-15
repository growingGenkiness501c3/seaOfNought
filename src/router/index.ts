import { createRouter, createWebHistory } from 'vue-router'
import CrowsNest from '@/views/CrowsNest.vue'
import Forecastle from '@/views/Forecastle.vue'
import Anchor from '@/views/Anchor.vue'
import vocabulary from '@/views/vocabulary.vue'
import Library from '@/views/Library.vue'
import RoyalWeThePeople from '@/views/royalwethepeople.vue'
import RoyalWe from '@/views/royalwe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'crowsnest',
      component: CrowsNest
    },
    {
      path: '/anchor',
      name: 'anchor',
      component: Anchor
    },
    {
      path: '/forecastle',
      name: 'forecastle',
      component: Forecastle
    },
    {
      path: '/Library',
      name: 'library',
      component: Library
    },
    {
      path: '/royalwethepeople',
      name: 'royalwethepeople',
      component: RoyalWeThePeople
    },
    {
      path: '/royalwethepeople',
      name: 'royalwethepeople',
      component: RoyalWeThePeople
    },
    {
      path: '/vocabulary',
      name: 'vocabulary',
      component: vocabulary
    },
  ]
})

export default router