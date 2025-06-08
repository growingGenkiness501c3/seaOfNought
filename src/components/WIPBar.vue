
<script setup lang="ts">
import routerBar from "@/components/routerBar.vue"
import TailwindColorNameBar from "@/components/color/tailwindColorNameBar.vue"
import hueBar from "@/components/color/hueBar.vue"
defineOptions({
  name: "WIPBar"
});
</script>
<template>
<center>
<nav class="grid grid-cols-[repeat(18,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"><i class="material-icons" style="font-size: 55px">replay</i></RouterLink>
  <RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> <i class="material-icons" style="font-size: 55px">redo</i></RouterLink>    
  <RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"><i class="material-icons" style="font-size: 55px">filter_center_focus</i></RouterLink>
  <RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>    
  <RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>
  <RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-red-400/25 cursor-pointer" to="/roseVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>    
  <RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>
  <RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> <i class="material-icons" style="font-size: 55px">public</i></RouterLink>    
  <RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>
  <RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>    
  <RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>
  <RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>    
  <RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>
  <RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>    
  <RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/tealVue"> <i class="material-icons" style="font-size: 55px">replay</i></RouterLink>
  <RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/emeraldVue"> <i class="material-icons" style="font-size: 55px">local_atm</i></RouterLink>    
  <RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/greenVue"> <i class="material-icons" style="font-size: 55px">publish</i></RouterLink>
  <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> <i class="material-icons" style="font-size: 55px">refresh</i></RouterLink>
</nav><br><br>
<nav class="grid grid-cols-[repeat(18,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> replay</RouterLink>
  <RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> redo</RouterLink>    
  <RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue">filter_center_focus</RouterLink>
  <RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> replay</RouterLink>    
  <RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> replay</RouterLink>
  <RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-red-400/25 cursor-pointer" to="/roseVue"> replay</RouterLink>    
  <RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> replay</RouterLink>
  <RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> public</RouterLink>    
  <RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> replay</RouterLink>
  <RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> replay</RouterLink>    
  <RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> replay</RouterLink>
  <RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> replay</RouterLink>    
  <RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> replay</RouterLink>
  <RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> replay</RouterLink>    
  <RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/tealVue"> replay</RouterLink>
  <RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/emeraldVue"> local_atm</RouterLink>    
  <RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/greenVue"> publish</RouterLink>
  <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> refresh</RouterLink>
</nav>
<nav class="grid grid-cols-[repeat(18,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> limeVue</RouterLink>
  <RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> yellowVue</RouterLink>    
  <RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue">amberVue</RouterLink>
  <RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> orangeVue</RouterLink>    
  <RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> redVue</RouterLink>
  <RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-red-400/25 cursor-pointer" to="/roseVue"> roseVue</RouterLink>    
  <RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> pinkVue</RouterLink>
  <RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> fuchsiaVue</RouterLink>    
  <RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> purpleVue</RouterLink>
  <RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> violetVue</RouterLink>    
  <RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> indigoVue</RouterLink>
  <RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> blueVue</RouterLink>    
  <RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> skyVue</RouterLink>
  <RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> cyanVue</RouterLink>    
  <RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/tealVue"> tealVue</RouterLink>
  <RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/emeraldVue"> emeraldVue</RouterLink>    
  <RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/greenVue"> greenVue</RouterLink>
  <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> limeVue</RouterLink>
</nav>
</center>
</template>
