import { createRouter, createWebHistory } from 'vue-router'
import CrowsNest from '@/views/CrowsNest.vue'
import Forecastle from '@/views/Forecastle.vue'
import Anchor from '@/views/Anchor.vue'
import vocabulary from '@/views/vocabulary.vue'
import Library from '@/views/Library.vue'
import RoyalWeThePeople from '@/views/RoyalWeThePeople.vue'
import RoyalWe from '@/views/RoyalWe.vue'
import Xhibition from '@/views/Xhibition.vue'
import AardvarkVue from '@/views/AardvarkVue.vue'
import SeaOfNought from '@/views/NaughtSea.vue'
import Orientation from '@/views/Orientation.vue'
import Dailies from '@/views/Dailies.vue'
import GrowingGenkiness from '@/views/GrowingGenkiness.vue'
import wccScaffolding from '@/views/wccScaffolding.vue'
import amber from '@/views/tailwindColors/amber.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'seaOfNought',
      component: SeaOfNought
    },
    {
      path: '/aardvarkVue',
      name: 'aardvarkVue',
      component: AardvarkVue
    },
    {
      path: '/anchor',
      name: 'anchor',
      component: Anchor
    },
    {
      path: '/crowsNest',
      name: 'crowsNest',
      component: CrowsNest
    },
    {
      path: '/dailies',
      name: 'dailies',
      component: Dailies
    },
    {
      path: '/forecastle',
      name: 'forecastle',
      component: Forecastle
    },
    {
      path: '/GrowingGenkiness',
      name: 'GrowingGenkiness',
      component: GrowingGenkiness
    },
    {
      path: '/Library',
      name: 'library',
      component: Library
    },
    {
      path: '/orientation',
      name: 'orientation',
      component: Orientation
    },
    {
      path: '/royalwe',
      name: 'royalwe',
      component: RoyalWe
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
    {
      path: '/xhibition',
      name: 'xhibition',
      component: Xhibition
    },
    {
      path: '/wccScaffolding',
      name: 'wccScaffolding',
      component: wccScaffolding
    },    
    {
      path: '/tailwindColors/amber',
      name: 'amber',
      component: amber
    }, 
  ]
})

export default router
