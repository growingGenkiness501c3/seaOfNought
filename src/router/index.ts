import { createRouter, createWebHistory } from 'vue-router'
import CrowsNest from '@/views/CrowsNest.vue'
import Forecastle from '@/views/Forecastle.vue'
import Anchor from '@/views/Anchor.vue'
import vocabulary from '@/views/vocabulary.vue'
import Library from '@/views/Library.vue'
import RoyalWeThePeople from '@/views/RoyalWeThePeople.vue'
import RoyalWe from '@/views/RoyalWe.vue'
import Xhibition from '@/views/Xhibition.vue'
import AardvarkVue from '@/views/aardvarkVue.vue'
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

import Ikigai from '@/components/Ikigai.vue'
import routerEverythingFlexBar from '@/components/menus/routerEverythingFlexBar.vue'
import WIPBar from '@/components/WIPComponents/WIPBar.vue'
import WIP_00 from '@/components/WIPComponents/WIP_00.vue'
import WIP_01 from '@/components/WIPComponents/WIP_01.vue'
import WIP_02 from '@/components/WIPComponents/WIP_02.vue'
import WIP_03 from '@/components/WIPComponents/WIP_03.vue'
import WIP_04 from '@/components/WIPComponents/WIP_04.vue'
import WIP_05 from '@/components/WIPComponents/WIP_05.vue'
import WIP_06 from '@/components/WIPComponents/WIP_06.vue'
import WIP_07 from '@/components/WIPComponents/WIP_07.vue'
import WIP_08 from '@/components/WIPComponents/WIP_08.vue'
import WIP_09 from '@/components/WIPComponents/WIP_09.vue'
import WIP_10 from '@/components/WIPComponents/WIP_10.vue'
import WIP_11 from '@/components/WIPComponents/WIP_11.vue'
import WIP_12 from '@/components/WIPComponents/WIP_12.vue'
import WIP_13 from '@/components/WIPComponents/WIP_13.vue'
import WIP_14 from '@/components/WIPComponents/WIP_14.vue'
import WIP_15 from '@/components/WIPComponents/WIP_15.vue'
import WIP_16 from '@/components/WIPComponents/WIP_16.vue'
import WIP_17 from '@/components/WIPComponents/WIP_17.vue'
import WIP_18 from '@/components/WIPComponents/WIP_18.vue'
import WIP_19 from '@/components/WIPComponents/WIP_19.vue'
import WIP_20 from '@/components/WIPComponents/WIP_20.vue'
import WIP_21 from '@/components/WIPComponents/WIP_21.vue'
import WIP_22 from '@/components/WIPComponents/WIP_22.vue'
import WIP_23 from '@/components/WIPComponents/WIP_23.vue'
import WIP_24 from '@/components/WIPComponents/WIP_24.vue'
import WIP_25 from '@/components/WIPComponents/WIP_25.vue'
import WIP_26 from '@/components/WIPComponents/WIP_26.vue'
import WIP_27 from '@/components/WIPComponents/WIP_27.vue'
import WIP_28 from '@/components/WIPComponents/WIP_28.vue'
import WIP_29 from '@/components/WIPComponents/WIP_29.vue'
import WIP_30 from '@/components/WIPComponents/WIP_30.vue'
import WIP_31 from '@/components/WIPComponents/WIP_31.vue'



import TailWindGenkiness from '@/views/TailWindGenkiness.vue'

import BlenderVue from '@/views/BlenderVue.vue'
import EightVue from '@/views/EightVue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/WIP_00',
      name: 'WIP_00',
      component: WIP_00
    }, 

    {
      path: '/WIP_01',
      name: 'WIP_01',
      component: WIP_01
    }, 
    {
      path: '/WIP_02',
      name: 'WIP_02',
      component: WIP_02
    }, 
    {
      path: '/WIP_03',
      name: 'WIP_03',
      component: WIP_03
    }, 
    {
      path: '/WIP_04',
      name: 'WIP_04',
      component: WIP_04
    }, 
    {
      path: '/WIP_05',
      name: 'WIP_05',
      component: WIP_05
    }, 
    {
      path: '/WIP_06',
      name: 'WIP_06',
      component: WIP_06
    }, 
    {
      path: '/WIP_07',
      name: 'WIP_07',
      component: WIP_07
    }, 
    {
      path: '/WIP_08',
      name: 'WIP_08',
      component: WIP_08
    }, 
    {
      path: '/WIP_09',
      name: 'WIP_09',
      component: WIP_09
    }, 
    {
      path: '/WIP_10',
      name: 'WIP_10',
      component: WIP_10
    }, 
    {
      path: '/WIP_11',
      name: 'WIP_11',
      component: WIP_11
    }, 
    {
      path: '/WIP_12',
      name: 'WIP_12',
      component: WIP_12
    }, 
    {
      path: '/WIP_13',
      name: 'WIP_13',
      component: WIP_13
    }, 
    {
      path: '/WIP_14',
      name: 'WIP_14',
      component: WIP_14
    }, 
    {
      path: '/WIP_15',
      name: 'WIP_15',
      component: WIP_15
    }, 
    {
      path: '/WIP_16',
      name: 'WIP_16',
      component: WIP_16
    }, 
    {
      path: '/WIP_17',
      name: 'WIP_17',
      component: WIP_17
    }, 
    {
      path: '/WIP_18',
      name: 'WIP_18',
      component: WIP_18
    }, 
    {
      path: '/WIP_19',
      name: 'WIP_19',
      component: WIP_19
    }, 
    {
      path: '/WIP_20',
      name: 'WIP_20',
      component: WIP_20
    }, 
    {
      path: '/WIP_21',
      name: 'WIP_21',
      component: WIP_21
    }, 
    {
      path: '/WIP_22',
      name: 'WIP_22',
      component: WIP_22
    }, 
    {
      path: '/WIP_23',
      name: 'WIP_23',
      component: WIP_23
    }, 
    {
      path: '/WIP_24',
      name: 'WIP_24',
      component: WIP_24
    }, 
    {
      path: '/WIP_25',
      name: 'WIP_25',
      component: WIP_25
    }, 
    {
      path: '/WIP_26',
      name: 'WIP_26',
      component: WIP_26
    }, 
    {
      path: '/WIP_27',
      name: 'WIP_27',
      component: WIP_27
    }, 
    {
      path: '/WIP_28',
      name: 'WIP_28',
      component: WIP_28
    }, 
    {
      path: '/WIP_29',
      name: 'WIP_29',
      component: WIP_29
    }, 
    {
      path: '/WIP_30',
      name: 'WIP_30',
      component: WIP_30
    }, 
    {
      path: '/WIP_31',
      name: 'WIP_31',
      component: WIP_31
    }, 


    {
      path: '/EightVue',
      name: 'EightVue',
      component: EightVue
    }, 
    {
      path: '/BlenderVue',
      name: 'BlenderVue',
      component: BlenderVue
    }, 
    {
      path: '/TailWindGenkiness',
      name: 'TailWindGenkiness',
      component: TailWindGenkiness
    },

    {
      path: '/WIPBar',
      name: 'WIPBar',
      component: WIPBar
    }, 

    {
      path: '/Ikigai',
      name: 'Ikigai',
      component: Ikigai
    }, 

    {
      path: '/routerEverythingFlexBar',
      name: 'routerEverythingFlexBar',
      component: routerEverythingFlexBar
    }, 
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
