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

import amberVue from '@/views/tailwindColors/amberVue.vue'
import blueVue  from '@/views/tailwindColors/blueVue.vue'
import cyanVue from '@/views/tailwindColors/cyanVue.vue'
import emeraldVue from '@/views/tailwindColors/emeraldVue.vue'
import fuchsiaVue from '@/views/tailwindColors/fuchsiaVue.vue'
import grayVue from '@/views/tailwindColors/grayVue.vue'
import greenVue from '@/views/tailwindColors/greenVue.vue'
import indigoVue from '@/views/tailwindColors/indigoVue.vue'
import limeVue from '@/views/tailwindColors/limeVue.vue'
import neutralVue from '@/views/tailwindColors/neutralVue.vue'
import orangeVue from '@/views/tailwindColors/orangeVue.vue'
import pinkVue from '@/views/tailwindColors/pinkVue.vue'
import purpleVue from '@/views/tailwindColors/purpleVue.vue'
import redVue from '@/views/tailwindColors/redVue.vue'
import roseVue from '@/views/tailwindColors/roseVue.vue'
import skyVue from '@/views/tailwindColors/skyVue.vue'
import slateVue from '@/views/tailwindColors/slateVue.vue'
import stoneVue from '@/views/tailwindColors/stoneVue.vue'
import tealVue from '@/views/tailwindColors/tealVue.vue'
import violetVue from '@/views/tailwindColors/violetVue.vue'
import yellowVue from '@/views/tailwindColors/yellowVue.vue'
import zincVue from '@/views/tailwindColors/zincVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/amberVue',
      name: 'amberVue',
      component: amberVue
    }, 
    {
      path: '/blueVue',
      name: 'blueVue',
      component: blueVue
    }, 
    {
      path: '/cyanVue',
      name: 'cyanVue',
      component: cyanVue
    }, 
        {
      path: '/emeraldVue',
      name: 'emeraldVue',
      component: emeraldVue
    }, 
    {
      path: '/fuchsiaVue',
      name: 'fuchsiaVue',
      component: fuchsiaVue
    }, 
    {
      path: '/grayVue',
      name: 'grayVue',
      component: grayVue
    }, 
        {
      path: '/greenVue',
      name: 'greenVue',
      component: greenVue
    }, 
    {
      path: '/indigoVue',
      name: 'indigoVue',
      component: indigoVue
    }, 
    {
      path: '/limeVue',
      name: 'limeVue',
      component: limeVue
    }, 
        {
      path: '/neutralVue',
      name: 'neutralVue',
      component: neutralVue
    }, 
    {
      path: '/orangeVue',
      name: 'orangeVue',
      component: orangeVue
    }, 
    {
      path: '/pinkVue',
      name: 'pinkVue',
      component: pinkVue
    }, 
        {
      path: '/purpleVue',
      name: 'purpleVue',
      component: purpleVue
    }, 
    {
      path: '/redVue',
      name: 'redVue',
      component: redVue
    }, 
    {
      path: '/roseVue',
      name: 'roseVue',
      component: roseVue
    }, 
        {
      path: '/skyVue',
      name: 'skyVue',
      component: skyVue
    }, 
    {
      path: '/slateVue',
      name: 'slateVue',
      component: slateVue
    }, 
    {
      path: '/stoneVue',
      name: 'stoneVue',
      component: stoneVue
    }, 
        {
      path: '/tealVue',
      name: 'tealVue',
      component: tealVue
    }, 
    {
      path: '/violetVue',
      name: 'violetVue',
      component: violetVue
    }, 
    {
      path: '/yellowVue',
      name: 'yellowVue',
      component: yellowVue
    }, 
        {
      path: '/zincVue',
      name: 'zincVue',
      component: zincVue
    }, 

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
    
  ]
})

export default router
