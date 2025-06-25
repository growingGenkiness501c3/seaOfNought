
<script setup lang="ts">
import routerBar from "@/components/routerBar.vue"
import TailwindColorNameBar from "@/components/color/tailwindColorNameBar.vue"
import hueBar from "@/components/color/hueBar.vue"
import blenderIcon from "@/components/svgsAsVues/blenderIcon.vue"
import eightHolyIcon from "@/components/svgsAsVues/eightHolyIcon.vue"
defineOptions({
  name: "IkigaiBar"
});
</script>
<template>

<center class="w-full text-[55px] gap-6 p-6 flex items-center justify-center">


  <div class="border border-yellow-950 bg-sky-50/50">
    <RouterLink class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-950" to="/">
      <i class="material-icons" style="font-size: 99px">
        home
      </i>
    </RouterLink>
  </div>
  <div class="border border-yellow-900 bg-sky-100/50">
    <RouterLink class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-900" to="/Ikigai">
      <i class="material-icons" style="font-size: 77px">
        security
      </i>
      </RouterLink>
  </div>
  <div class="border border-yellow-800 bg-sky-200/50">
    <RouterLink class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-800" to="/WIPBar">
      <i class="material-icons" style="font-size: 99px">
        linear_scale
      </i>
    </RouterLink>
  </div>
  <div class="border border-yellow-700 bg-sky-300/50">
    <RouterLink to="/BlenderVue" class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-700">
      <blenderIcon class=""/>
    </RouterLink>
  </div>
  <div class="border border-yellow-600 bg-sky-400/50">
    <RouterLink to="/EightHolyIcon" class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-600">
      <eightHolyIcon class=""/>
    </RouterLink>
  </div>
  <div class="border border-yellow-500 bg-sky-500/50">
    <a class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-500" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> 
      <i class="material-icons" style="font-size: 77px">
      schedule
    </i>
    </a>
  </div>
  <div class="border border-yellow-400 bg-sky-600/50">
    <a class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-400" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
      〶
    </i>
    </a>
  </div>
  <div class="border border-yellow-300 bg-sky-700/50">
    <a class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-300" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> 
      <div class="material-icons" style="font-size: 77px">
      〒
      </div>
    </a>
    <code class="text-[22px]">post</code>
  </div>
  <div class="border border-yellow-200 bg-sky-800/50">
    <RouterLink class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-200" to="/GrowingGenkiness">
      <div class="material-icons  hover:text-sky-500" style="font-size: 55px">
        〠
      </div>
    </RouterLink>    
  </div>
  <div class="border border-yellow-100 bg-sky-900/50">
    <a class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-100" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> 
      <div class="material-icons  hover:text-sky-500" style="font-size: 55px">
        school
      </div>
    </a>
    </div>
  <div class="border border-yellow-50 bg-sky-950/50">
    <RouterLink class="hover:text-indigo-500 flex w-24 h-24 justify-center items-center p-2 text-yellow-50" to="/routerEverythingFlexBar">
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

<center class="w-full text-[17px] gap-6 p-1 flex items-center justify-center">
  <div class="border border-yellow-950 bg-sky-50/50 w-24 text-yellow-50">
  /</div>
  <div class="border border-yellow-900 bg-sky-100/50 w-24 text-yellow-50">
  Ikigai</div>
  <div class="border border-yellow-800 bg-sky-200/50 w-24 text-yellow-50">
  WIPBar</div>
  <div class="border border-yellow-700 bg-sky-300/50 w-24 text-yellow-50">
  blender</div>
  <div class="border border-yellow-600 bg-sky-400/50 w-24 text-yellow-50">
  G.M/cfg</div>
  <div class="border border-yellow-500 bg-sky-500/50 w-24 text-yellow-50">
  A.S</div>
  <div class="border border-yellow-400 bg-sky-600/50 w-24 text-yellow-50">
  A.S.</div>
  <div class="border border-yellow-300 bg-sky-700/50 w-24 text-yellow-50">
  G.M.</div>
  <div class="border border-yellow-200 bg-sky-800/50 w-24 text-yellow-50">
  A.S.</div>
  <div class="border border-yellow-100 bg-sky-900/50 w-24 text-yellow-50">
  A.S.</div>
  <div class="border border-yellow-50 bg-sky-950/50 w-24 text-yellow-50">
  Everything</div>
  <div>tort
  </div>
  <div></div>
</center>
</template>
