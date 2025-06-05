<script setup lang="ts">
defineOptions({
  name: "routerBar"
});
</script>
<template>
  <center>
  <nav class="grid grid-cols-[repeat(7,minmax(0,1fr))] w-full h-6 gap-3 p-5 orbitron">
    <div></div>
    <RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-600 bg-slate-600/40 cursor-pointer" to="/slateVue"> slateVue</RouterLink>
    <RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-600 bg-gray-600/40 cursor-pointer" to="/grayVue"> grayVue</RouterLink>    
    <RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-600 bg-zinc-600/40 cursor-pointer" to="/zincVue"> zincVue</RouterLink>
    <RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-600 bg-neutral-600/40 cursor-pointer" to="/neutralVue"> neutralVue</RouterLink>    
    <RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-600 bg-stone-600/40 cursor-pointer" to="/stoneVue"> stoneVue</RouterLink>
    <div></div>
  </nav>
  <br>
  </center>  
  <center>
  <nav class="grid grid-cols-[repeat(18,minmax(0,1fr))] w-full h-6 gap-3 p-5">
    <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> limeVue</RouterLink>
    <RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> yellowVue</RouterLink>    
    <RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"> amberVue</RouterLink>
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
  <br>
  </center>
  </template>
