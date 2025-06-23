
<script setup lang="ts">
import routerBar from "@/components/routerBar.vue"
import TailwindColorNameBar from "@/components/color/tailwindColorNameBar.vue"
import hueBar from "@/components/color/hueBar.vue"
import blenderIcon from "@/components/blenderIcon.vue"
defineOptions({
  name: "IkigaiBar"
});
</script>
<template>
<center class="w-full text-[17px] gap-10 p-1 flex items-center justify-center">
  <div class="border border-yellow-950 bg-sky-50/50 w-24 text-yellow-950 hover:text-sky-500">
  /</div>
  <div class="border border-yellow-900 bg-sky-100/50 w-24 text-yellow-900 hover:text-sky-500">
  Ikigai</div>
  <div class="border border-yellow-800 bg-sky-200/50 w-24 text-yellow-800 hover:text-sky-500">
  WIPBar</div>
  <div class="border border-yellow-700 bg-sky-300/50 w-24 text-yellow-700 hover:text-sky-500">
  A.S/cfg</div>
  <div class="border border-yellow-600 bg-sky-400/50 w-24 text-yellow-600 hover:text-sky-500">
  G.M/cfg</div>
  <div class="border border-yellow-500 bg-sky-500/50 w-24 text-yellow-500 hover:text-sky-500">
  A.S</div>
  <div class="border border-yellow-400 bg-sky-600/50 w-24 text-yellow-400 hover:text-sky-500">
  A.S.</div>
  <div class="border border-yellow-300 bg-sky-700/50 w-24 text-yellow-300 hover:text-sky-500">
  G.M.</div>
  <div class="border border-yellow-200 bg-sky-800/50 w-24 text-yellow-200 hover:text-sky-500">
  A.S.</div>
  <div class="border border-yellow-100 bg-sky-900/50 w-24 text-yellow-100 hover:text-sky-500">
  A.S.</div>
  <div class="border border-yellow-50 bg-sky-950/50 w-24 text-yellow-50 hover:text-sky-500 ">
  Everything</div>
  <div>tort
  </div>
  <div></div>
</center>
<center class="w-full text-[55px] gap-10 p-10 flex items-center justify-center">
  <div class="border border-yellow-950 bg-sky-50/50 w-24 text-yellow-950 hover:text-sky-500">
    <RouterLink class="" to="/">
      <i class="material-icons  hover:text-sky-500" style="font-size: 55px">
        home
      </i>
    </RouterLink>
  </div>
  <div class="border border-yellow-900 bg-sky-100/50 w-24 text-yellow-900 hover:text-sky-500">
    <RouterLink class="p-2 " to="/Ikigai">
      <i class="material-icons" style="font-size: 55px">
        security
      </i>
      </RouterLink>
  </div>
  <div class="border border-yellow-800 bg-sky-200/50 w-24 text-yellow-800 hover:text-sky-500">
    <RouterLink class="" to="/WIPBar">
      <i class="material-icons" style="font-size: 55px">
        linear_scale
      </i>
    </RouterLink>
  </div>
    <div class="border border-yellow-700 text-yellow-700 bg-sky-300/50 w-24 hover:border-sky-500">
    <RouterLink to="/BlenderVue" class="flex justify-center items-center p-2 text-yellow-700 hover:text-sky-500">
      <blenderIcon />
    </RouterLink>
  </div>
  <div class="border border-yellow-600 bg-sky-400/50 w-24 text-yellow-600 hover:text-sky-500">
    <a class="" href="https://oval-llama-ax9h.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> 
      <i class="material-icons" style="font-size: 55px">
      add 
    </i>
    </a>
  </div>
  <div class="border border-yellow-500 bg-sky-500/50 w-24 text-yellow-500 hover:text-sky-500">
    <a class="" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> 
      <i class="material-icons" style="font-size: 55px">
      schedule
    </i>
    </a>
  </div>
  <div class="border border-yellow-400 bg-sky-600/50 w-24 text-yellow-400 hover:text-sky-500">
    <a class="" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
      〒
    </i>
    </a>
  </div>
  <div class="border border-yellow-300 bg-sky-700/50 w-24 text-yellow-300 hover:text-sky-500">
    <a class="" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> 
      <div class="material-icons" style="font-size: 55px">
      〶
    </div>
    </a>
  </div>
  <div class="border border-yellow-200 bg-sky-800/50 w-24 text-yellow-200 hover:text-sky-500">
    <RouterLink class="" to="/GrowingGenkiness">
      <div class="material-icons  hover:text-sky-500" style="font-size: 55px">
        〠
      </div>
    </RouterLink>    
    
    <a class="" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> 
      <div style="font-size: 55px">
      
      </div>
    </a>
  </div>
  <div class="border border-yellow-100 bg-sky-900/50 w-24 text-yellow-100 hover:text-sky-500">
    <a class="" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> 
      <div class="material-icons  hover:text-sky-500" style="font-size: 55px">
        school
      </div>
    </a>
    </div>
  <div class="border border-yellow-50 bg-sky-950/50 w-24 text-yellow-50 hover:text-sky-500 ">
    <RouterLink class="" to="/routerEverythingFlexBar">
      <i class="material-icons" style="font-size: 55px">
        select_all
      </i>
    </RouterLink>
    </div>
  <div>
    <RouterLink class="text-[55px]" to="/wccScaffolding">
      🐢
    </RouterLink>
  </div>
</center>
</template>
