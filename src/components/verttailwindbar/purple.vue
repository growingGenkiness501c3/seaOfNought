
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
<br><br><br><br>

<nav class="grid grid-cols-[repeat(23,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <div>
    <RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer text-[66px]" to="/stoneVue"><i class="material-icons" style="font-size: 55px">account_box</i></RouterLink>
    <br><br><RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer" to="/stoneVue"> account_box</RouterLink>
    <br><br><RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer" to="/stoneVue"> stoneVue</RouterLink>  
    <br><br>      <div class="border border-stone-500 bg-stone-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer text-[11px]" to="/stoneVue">🧱</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-50 hover:text-yellow-200 border border-stone-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-100 hover:text-yellow-200 border border-stone-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-200 hover:text-yellow-200 border border-stone-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-300 hover:text-yellow-200 border border-stone-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-400 hover:text-yellow-200 border border-stone-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-600 hover:text-yellow-200 border border-stone-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-700 hover:text-yellow-200 border border-stone-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-800 hover:text-yellow-200 border border-stone-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-900 hover:text-yellow-200 border border-stone-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-950 hover:text-yellow-200 border border-stone-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>  
  </div>

  <div>
    <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> limeVue</RouterLink>  
    <br><br><div class="border border-lime-500 bg-lime-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer text-[11px]" to="/limeVue">🦗</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-50 hover:text-yellow-200 border border-lime-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-100 hover:text-yellow-200 border border-lime-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-200 hover:text-yellow-200 border border-lime-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-300 hover:text-yellow-200 border border-lime-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-400 hover:text-yellow-200 border border-lime-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-600 hover:text-yellow-200 border border-lime-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-700 hover:text-yellow-200 border border-lime-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-800 hover:text-yellow-200 border border-lime-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-900 hover:text-yellow-200 border border-lime-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-950 hover:text-yellow-200 border border-lime-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer text-[66px]" to="/neutralVue"><i class="material-icons" style="font-size: 55px">account_circle</i></RouterLink>
    <br><br><RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer" to="/neutralVue"> account_circle</RouterLink>
    <br><br><RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer" to="/neutralVue"> neutralVue</RouterLink>  
    <br><br>
      <div class="border border-neutral-500 bg-neutral-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer text-[11px]" to="/neutralVue">📺</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-50 hover:text-yellow-200 border border-neutral-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-100 hover:text-yellow-200 border border-neutral-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-200 hover:text-yellow-200 border border-neutral-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-300 hover:text-yellow-200 border border-neutral-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-400 hover:text-yellow-200 border border-neutral-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-600 hover:text-yellow-200 border border-neutral-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-700 hover:text-yellow-200 border border-neutral-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-800 hover:text-yellow-200 border border-neutral-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-900 hover:text-yellow-200 border border-neutral-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-950 hover:text-yellow-200 border border-neutral-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>  
  <div>
    <RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer text-[66px]" to="/yellowVue"><i class="material-icons" style="font-size: 55px">face</i></RouterLink>
    <br><br><RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> face</RouterLink>
    <br><br><RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> yellowVue</RouterLink>  
    <br><br>        <div class="border border-yellow-500 bg-yellow-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer text-[11px]" to="/yellowVue">⚜️</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-50 hover:text-yellow-200 border border-yellow-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-100 hover:text-yellow-200 border border-yellow-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-300 hover:text-yellow-200 border border-yellow-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-400 hover:text-yellow-200 border border-yellow-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-600 hover:text-yellow-200 border border-yellow-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-700 hover:text-yellow-200 border border-yellow-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-800 hover:text-yellow-200 border border-yellow-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-900 hover:text-yellow-200 border border-yellow-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-950 hover:text-yellow-200 border border-yellow-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>  
  <div>
    <RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer text-[66px]" to="/amberVue"><i class="material-icons" style="font-size: 55px">filter_center_focus</i></RouterLink>
    <br><br><RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"> filter_center_focus</RouterLink>
    <br><br><RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"> amberVue</RouterLink>  
    <br><br>        <div class="border border-amber-500 bg-amber-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-amber-200 border border-amber-500 cursor-pointer text-[11px]" to="/amberVue">🛕</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-50 hover:text-yellow-200 border border-amber-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-100 hover:text-yellow-200 border border-amber-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-200 hover:text-yellow-200 border border-amber-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-300 hover:text-yellow-200 border border-amber-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-400 hover:text-yellow-200 border border-amber-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-500 hover:text-yellow-200 border border-amber-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-600 hover:text-yellow-200 border border-amber-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-700 hover:text-yellow-200 border border-amber-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-800 hover:text-yellow-200 border border-amber-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-900 hover:text-yellow-200 border border-amber-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-950 hover:text-yellow-200 border border-amber-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>  
  </div>
  <div>
    <a class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer text-[66px]" href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy"><i class="material-icons" style="font-size: 55px">accessible</i></a>
    <br><br><a class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy"> accessible</a>
    <br><br><RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> orangeVue</RouterLink>  
    <br><br><div class="border border-orange-500 bg-orange-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2 text-zinc-500 hover:text-orange-200 border border-orange-500 cursor-pointer text-[11px]" to="/yellowVue">🏀</RouterLink> 
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-50 hover:text-yellow-200 border border-orange-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-100 hover:text-yellow-200 border border-orange-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-200 hover:text-yellow-200 border border-orange-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-300 hover:text-yellow-200 border border-orange-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-400 hover:text-yellow-200 border border-orange-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-500 hover:text-yellow-200 border border-orange-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-600 hover:text-yellow-200 border border-orange-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-700 hover:text-yellow-200 border border-orange-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-800 hover:text-yellow-200 border border-orange-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-900 hover:text-yellow-200 border border-orange-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://commons.wikimedia.org/wiki/User_talk:Allostasissy" class="p-1 gap-1 block text-orange-950 hover:text-yellow-200 border border-orange-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer text-[66px]" to="/redVue"><i class="material-icons" style="font-size: 55px">add</i></RouterLink>
    <br><br><RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> add</RouterLink>
    <br><br><RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> redVue</RouterLink>  
    <br><br>        <div class="border border-red-500 bg-red-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer text-[11px]" to="/redVue">🛑</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-50 hover:text-yellow-200 border border-red-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-100 hover:text-yellow-200 border border-red-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-200 hover:text-yellow-200 border border-red-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-300 hover:text-yellow-200 border border-red-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-400 hover:text-yellow-200 border border-red-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-600 hover:text-yellow-200 border border-red-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-700 hover:text-yellow-200 border border-red-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-800 hover:text-yellow-200 border border-red-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-900 hover:text-yellow-200 border border-red-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-950 hover:text-yellow-200 border border-red-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer text-[66px]" to="/roseVue"><i class="material-icons" style="font-size: 55px">filter_vintage</i></RouterLink>
    <br><br><RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer" to="/roseVue"> filter_vintage</RouterLink>
    <br><br><RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer" to="/roseVue"> roseVue</RouterLink>  
    <br><br>        <div class="border border-rose-500 bg-rose-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer text-[11px]" to="/roseVue">🌹</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-50 hover:text-yellow-200 border border-rose-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-100 hover:text-yellow-200 border border-rose-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-200 hover:text-yellow-200 border border-rose-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-300 hover:text-yellow-200 border border-rose-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-400 hover:text-yellow-200 border border-rose-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-600 hover:text-yellow-200 border border-rose-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-700 hover:text-yellow-200 border border-rose-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-800 hover:text-yellow-200 border border-rose-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-900 hover:text-yellow-200 border border-rose-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-950 hover:text-yellow-200 border border-rose-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>  

  <div>
    <div class="text-[66px] p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer text-[55px]"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer"><i class="material-icons" style="font-size: 55px">accessibility</i></a></div>
    <br><div><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer" class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer text-[17px]">accessibility</a></div>
    <br><RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> pinkVue</RouterLink>  
    <br><br><div class="border border-pink-500 bg-pink-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[11px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-11 gap-1 p-1">
          <div><RouterLink class="p-1 border border-pink-500 cursor-pointer text-[18px]" to="/pinkVue">🐷</RouterLink></div>
          <div class="p-1 gap-1 block text-pink-50 hover:text-sky-200 border border-pink-50 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-100 hover:text-sky-200 border border-pink-100 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-200 hover:text-sky-200 border border-pink-200 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-300 hover:text-sky-200 border border-pink-300 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-400 hover:text-sky-200 border border-pink-400 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-500 hover:text-sky-200 border border-pink-500 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-600 hover:text-sky-200 border border-pink-600 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-700 hover:text-sky-200 border border-pink-700 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-800 hover:text-sky-200 border border-pink-800 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-900 hover:text-sky-200 border border-pink-900 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
          <div class="p-1 gap-1 block text-pink-950 hover:text-sky-200 border border-pink-950 cursor-pointer"><a href="https://allostasissy.squarespace.com/config/" target="_blank" rel="noopener noreferrer">██</a></div>
        </div>

  </div>  

  <div>
    <RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer text-[66px]" to="/fuchsiaVue"><i class="material-icons" style="font-size: 55px">fingerprint</i></RouterLink>
    <br><br><RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> fingerprint</RouterLink>
    <br><br><RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> fuchsiaVue</RouterLink>  
    <br><br>        <div class="border border-fuchsia-500 bg-fuchsia-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer text-[11px]" to="/fuchsiaVue">🧠</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-50 hover:text-yellow-200 border border-fuchsia-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-100 hover:text-yellow-200 border border-fuchsia-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-200 hover:text-yellow-200 border border-fuchsia-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-300 hover:text-yellow-200 border border-fuchsia-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-400 hover:text-yellow-200 border border-fuchsia-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-600 hover:text-yellow-200 border border-fuchsia-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-700 hover:text-yellow-200 border border-fuchsia-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-800 hover:text-yellow-200 border border-fuchsia-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-900 hover:text-yellow-200 border border-fuchsia-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-950 hover:text-yellow-200 border border-fuchsia-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>

  <div>
    <RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer text-[66px]" to="/grayVue"><i class="material-icons" style="font-size: 55px">filter_drama</i></RouterLink>
    <br><br><RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer" to="/grayVue"> filter_drama</RouterLink>
    <br><br><RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer" to="/grayVue"> grayVue</RouterLink>  
    <br><br>      <div class="border border-gray-500 bg-gray-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer text-[11px]" to="/grayVue">🧷</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-50 hover:text-yellow-200 border border-gray-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-100 hover:text-yellow-200 border border-gray-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-200 hover:text-yellow-200 border border-gray-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-300 hover:text-yellow-200 border border-gray-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-400 hover:text-yellow-200 border border-gray-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-600 hover:text-yellow-200 border border-gray-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-700 hover:text-yellow-200 border border-gray-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-800 hover:text-yellow-200 border border-gray-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-900 hover:text-yellow-200 border border-gray-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-950 hover:text-yellow-200 border border-gray-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>    
  <div>
    <RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer text-[66px]" to="/purpleVue"><i class="material-icons" style="font-size: 55px">format_size</i></RouterLink>
    <br><br><RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> format_size</RouterLink>
    <br><br><RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> purpleVue</RouterLink>  
    <br><br>        <div class="border border-purple-500 bg-purple-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-purple-500 hover:text-yellow-200 border border-purple-500 cursor-pointer text-[11px]" to="/purpleVue">🛍️</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-50 hover:text-yellow-200 border border-purple-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-100 hover:text-yellow-200 border border-purple-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-200 hover:text-yellow-200 border border-purple-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-300 hover:text-yellow-200 border border-purple-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-400 hover:text-yellow-200 border border-purple-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-500 hover:text-yellow-200 border border-purple-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-600 hover:text-yellow-200 border border-purple-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-700 hover:text-yellow-200 border border-purple-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-800 hover:text-yellow-200 border border-purple-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-900 hover:text-yellow-200 border border-purple-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-950 hover:text-yellow-200 border border-purple-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>

  
  <div>
    <RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer text-[66px]" to="/violetVue"><i class="material-icons" style="font-size: 55px">forum</i></RouterLink>
    <br><br><RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> forum</RouterLink>
    <br><br><RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> violetVue</RouterLink>  
    <br><br>        <div class="border border-violet-500 bg-violet-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer text-[11px]" to="/violetVue">☔</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-50 hover:text-yellow-200 border border-violet-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-100 hover:text-yellow-200 border border-violet-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-200 hover:text-yellow-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-300 hover:text-yellow-200 border border-violet-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-400 hover:text-yellow-200 border border-violet-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-600 hover:text-yellow-200 border border-violet-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-700 hover:text-yellow-200 border border-violet-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-800 hover:text-yellow-200 border border-violet-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-900 hover:text-yellow-200 border border-violet-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-950 hover:text-yellow-200 border border-violet-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer text-[66px]" to="/indigoVue"><i class="material-icons" style="font-size: 55px">gesture</i></RouterLink>
    <br><br><RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> gesture</RouterLink>
    <br><br><RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> indigoVue</RouterLink>  
    <br><br>
        <div class="border border-indigo-500 bg-indigo-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer text-[11px]" to="/indigoVue">🎵</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-50 hover:text-yellow-200 border border-indigo-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-100 hover:text-yellow-200 border border-indigo-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-200 hover:text-yellow-200 border border-indigo-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-300 hover:text-yellow-200 border border-indigo-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-400 hover:text-yellow-200 border border-indigo-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-600 hover:text-yellow-200 border border-indigo-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-700 hover:text-yellow-200 border border-indigo-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-800 hover:text-yellow-200 border border-indigo-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-900 hover:text-yellow-200 border border-indigo-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-950 hover:text-yellow-200 border border-indigo-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>

  <div>
    <RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer text-[66px]" to="/blueVue"><i class="material-icons" style="font-size: 55px">format_quote</i></RouterLink>
    <br><br><RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> format_quote</RouterLink>
    <br><br><RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> blueVue</RouterLink>  
    <br><br>        <div class="border border-blue-500 bg-blue-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-blue-500 hover:text-yellow-200 border border-blue-500 cursor-pointer text-[11px]" to="/blueVue">🛹</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-50 hover:text-yellow-200 border border-blue-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-100 hover:text-yellow-200 border border-blue-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-200 hover:text-yellow-200 border border-blue-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-300 hover:text-yellow-200 border border-blue-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-400 hover:text-yellow-200 border border-blue-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-500 hover:text-yellow-200 border border-blue-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-600 hover:text-yellow-200 border border-blue-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-700 hover:text-yellow-200 border border-blue-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-800 hover:text-yellow-200 border border-blue-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-900 hover:text-yellow-200 border border-blue-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-950 hover:text-yellow-200 border border-blue-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer text-[66px]" to="/skyVue"><i class="material-icons" style="font-size: 55px">line_style</i></RouterLink>
    <br><br><RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> line_style</RouterLink>
    <br><br><RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> skyVue</RouterLink>  
    <br><br>        <div class="border border-sky-500 bg-sky-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer text-[11px]" to="/skyVue">🌃</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-50 hover:text-yellow-200 border border-sky-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-100 hover:text-yellow-200 border border-sky-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-200 hover:text-yellow-200 border border-sky-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-300 hover:text-yellow-200 border border-sky-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-400 hover:text-yellow-200 border border-sky-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-600 hover:text-yellow-200 border border-sky-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-700 hover:text-yellow-200 border border-sky-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-800 hover:text-yellow-200 border border-sky-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-900 hover:text-yellow-200 border border-sky-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-950 hover:text-yellow-200 border border-sky-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer text-[66px]" to="/cyanVue"><i class="material-icons" style="font-size: 55px">group_work</i></RouterLink>
    <br><br><RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> group_work</RouterLink>
    <br><br><RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> cyanVue</RouterLink>  
    <br><br>        <div class="border border-cyan-500 bg-cyan-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-cyan-500 hover:text-yellow-200 border border-cyan-500 cursor-pointer text-[11px]" to="/cyanVue">🧩</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-50 hover:text-yellow-200 border border-cyan-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-100 hover:text-yellow-200 border border-cyan-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-200 hover:text-yellow-200 border border-cyan-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-300 hover:text-yellow-200 border border-cyan-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-400 hover:text-yellow-200 border border-cyan-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-500 hover:text-yellow-200 border border-cyan-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-600 hover:text-yellow-200 border border-cyan-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-700 hover:text-yellow-200 border border-cyan-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-800 hover:text-yellow-200 border border-cyan-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-900 hover:text-yellow-200 border border-cyan-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-950 hover:text-yellow-200 border border-cyan-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">group</i></RouterLink>
    <br><br><RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/limeVue"> group</RouterLink>
    <br><br><RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/limeVue"> tealVue</RouterLink>  
    <br><br>
        <div class="border border-teal-500 bg-teal-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer text-[11px]" to="/tealVue">🔰</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-50 hover:text-yellow-200 border border-teal-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-100 hover:text-yellow-200 border border-teal-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-200 hover:text-yellow-200 border border-teal-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-300 hover:text-yellow-200 border border-teal-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-400 hover:text-yellow-200 border border-teal-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-600 hover:text-yellow-200 border border-teal-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-700 hover:text-yellow-200 border border-teal-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-800 hover:text-yellow-200 border border-teal-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-900 hover:text-yellow-200 border border-teal-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-950 hover:text-yellow-200 border border-teal-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">local_cafe</i></RouterLink>
    <br><br><RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/limeVue"> local_cafe</RouterLink>
    <br><br><RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/limeVue"> emeraldVue</RouterLink>  
    <br><br>        <div class="border border-emerald-500 bg-emerald-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer text-[11px]" to="/emeraldVue">🦎</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-50 hover:text-yellow-200 border border-emerald-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-100 hover:text-yellow-200 border border-emerald-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-200 hover:text-yellow-200 border border-emerald-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-300 hover:text-yellow-200 border border-emerald-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-400 hover:text-yellow-200 border border-emerald-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-600 hover:text-yellow-200 border border-emerald-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-700 hover:text-yellow-200 border border-emerald-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-800 hover:text-yellow-200 border border-emerald-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-900 hover:text-yellow-200 border border-emerald-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-950 hover:text-yellow-200 border border-emerald-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer text-[66px]" to="/zincVue"><i class="material-icons" style="font-size: 55px">keyboard</i></RouterLink>
    <br><br><RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer" to="/zincVue"> keyboard</RouterLink>
    <br><br><RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer" to="/zincVue"> zincVue</RouterLink>  
    <br><br>      <div class="border border-zinc-500 bg-zinc-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer text-[11px]" to="/zincVue">🛒</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-50 hover:text-yellow-200 border border-zinc-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-100 hover:text-yellow-200 border border-zinc-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-200 hover:text-yellow-200 border border-zinc-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-300 hover:text-yellow-200 border border-zinc-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-400 hover:text-yellow-200 border border-zinc-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-600 hover:text-yellow-200 border border-zinc-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-700 hover:text-yellow-200 border border-zinc-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-800 hover:text-yellow-200 border border-zinc-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-900 hover:text-yellow-200 border border-zinc-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-950 hover:text-yellow-200 border border-zinc-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>
  
  <div>
    <RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">local_florist</i></RouterLink>
    <br><br><RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/limeVue"> local_florist</RouterLink>
    <br><br><RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/limeVue"> greenVue</RouterLink>  
    <br><br>        <div class="border border-green-500 bg-green-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer text-[11px]" to="/cyanVue">💲</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-50 hover:text-yellow-200 border border-green-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-100 hover:text-yellow-200 border border-green-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-200 hover:text-yellow-200 border border-green-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-300 hover:text-yellow-200 border border-green-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-400 hover:text-yellow-200 border border-green-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-600 hover:text-yellow-200 border border-green-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-700 hover:text-yellow-200 border border-green-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-800 hover:text-yellow-200 border border-green-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-900 hover:text-yellow-200 border border-green-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-950 hover:text-yellow-200 border border-green-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>



  <div>
    <RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer text-[66px]" to="/slateVue"><i class="material-icons" style="font-size: 55px">gradient</i></RouterLink>
    <br><br><RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer" to="/slateVue"> gradient</RouterLink>
    <br><br><RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer" to="/slateVue"> slateVue</RouterLink>  
    <br><br>      <div class="border border-slate-500 bg-slate-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer text-[11px]" to="/grayVue">🐃</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-50 hover:text-yellow-200 border border-slate-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-100 hover:text-yellow-200 border border-slate-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-200 hover:text-yellow-200 border border-slate-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-300 hover:text-yellow-200 border border-slate-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-400 hover:text-yellow-200 border border-slate-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-600 hover:text-yellow-200 border border-slate-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-700 hover:text-yellow-200 border border-slate-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-800 hover:text-yellow-200 border border-slate-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-900 hover:text-yellow-200 border border-slate-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-950 hover:text-yellow-200 border border-slate-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>
</nav>
</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     



<!--

<nav class="grid grid-cols-[repeat(22,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <div>
    <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> limeVue</RouterLink>  
    <br><br><div class="border border-lime-500 bg-lime-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer text-[11px]" to="/limeVue">🦗</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-50 hover:text-yellow-200 border border-lime-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-100 hover:text-yellow-200 border border-lime-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-200 hover:text-yellow-200 border border-lime-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-300 hover:text-yellow-200 border border-lime-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-400 hover:text-yellow-200 border border-lime-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-600 hover:text-yellow-200 border border-lime-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-700 hover:text-yellow-200 border border-lime-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-800 hover:text-yellow-200 border border-lime-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-900 hover:text-yellow-200 border border-lime-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-950 hover:text-yellow-200 border border-lime-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer text-[66px]" to="/yellowVue"><i class="material-icons" style="font-size: 55px">accessibility</i></RouterLink>
    <br><br><RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> accessibility</RouterLink>
    <br><br><RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> yellowVue</RouterLink>  
    <br><br>        <div class="border border-yellow-500 bg-yellow-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer text-[11px]" to="/yellowVue">⚜️</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-50 hover:text-yellow-200 border border-yellow-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-100 hover:text-yellow-200 border border-yellow-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-300 hover:text-yellow-200 border border-yellow-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-400 hover:text-yellow-200 border border-yellow-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-600 hover:text-yellow-200 border border-yellow-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-700 hover:text-yellow-200 border border-yellow-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-800 hover:text-yellow-200 border border-yellow-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-900 hover:text-yellow-200 border border-yellow-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-950 hover:text-yellow-200 border border-yellow-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>  
  <div>
    <RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer text-[66px]" to="/amberVue"><i class="material-icons" style="font-size: 55px">filter_center_focus</i></RouterLink>
    <br><br><RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"> filter_center_focus</RouterLink>
    <br><br><RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"> amberVue</RouterLink>  
    <br><br>        <div class="border border-amber-500 bg-amber-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-amber-200 border border-amber-500 cursor-pointer text-[11px]" to="/amberVue">🛕</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-50 hover:text-yellow-200 border border-amber-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-100 hover:text-yellow-200 border border-amber-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-200 hover:text-yellow-200 border border-amber-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-300 hover:text-yellow-200 border border-amber-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-400 hover:text-yellow-200 border border-amber-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-500 hover:text-yellow-200 border border-amber-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-600 hover:text-yellow-200 border border-amber-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-700 hover:text-yellow-200 border border-amber-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-800 hover:text-yellow-200 border border-amber-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-900 hover:text-yellow-200 border border-amber-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-950 hover:text-yellow-200 border border-amber-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>  
  </div>
  <div>
    <RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer text-[66px]" to="/orangeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> orangeVue</RouterLink>  
    <br><br>        <div class="border border-orange-500 bg-orange-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-orange-200 border border-orange-500 cursor-pointer text-[11px]" to="/yellowVue">🏀</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-50 hover:text-yellow-200 border border-orange-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-100 hover:text-yellow-200 border border-orange-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-200 hover:text-yellow-200 border border-orange-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-300 hover:text-yellow-200 border border-orange-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-400 hover:text-yellow-200 border border-orange-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-500 hover:text-yellow-200 border border-orange-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-600 hover:text-yellow-200 border border-orange-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-700 hover:text-yellow-200 border border-orange-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-800 hover:text-yellow-200 border border-orange-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-900 hover:text-yellow-200 border border-orange-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-950 hover:text-yellow-200 border border-orange-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer text-[66px]" to="/redVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> redVue</RouterLink>  
    <br><br>        <div class="border border-red-500 bg-red-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer text-[11px]" to="/redVue">🛑</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-50 hover:text-yellow-200 border border-red-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-100 hover:text-yellow-200 border border-red-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-200 hover:text-yellow-200 border border-red-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-300 hover:text-yellow-200 border border-red-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-400 hover:text-yellow-200 border border-red-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-600 hover:text-yellow-200 border border-red-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-700 hover:text-yellow-200 border border-red-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-800 hover:text-yellow-200 border border-red-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-900 hover:text-yellow-200 border border-red-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-950 hover:text-yellow-200 border border-red-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer text-[66px]" to="/roseVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer" to="/roseVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer" to="/roseVue"> roseVue</RouterLink>  
    <br><br>        <div class="border border-rose-500 bg-rose-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer text-[11px]" to="/roseVue">🌹</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-50 hover:text-yellow-200 border border-rose-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-100 hover:text-yellow-200 border border-rose-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-200 hover:text-yellow-200 border border-rose-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-300 hover:text-yellow-200 border border-rose-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-400 hover:text-yellow-200 border border-rose-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-600 hover:text-yellow-200 border border-rose-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-700 hover:text-yellow-200 border border-rose-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-800 hover:text-yellow-200 border border-rose-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-900 hover:text-yellow-200 border border-rose-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-950 hover:text-yellow-200 border border-rose-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>  
  <div>
    <RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer text-[66px]" to="/pinkVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> pinkVue</RouterLink>  
    <br><br>        <div class="border border-pink-500 bg-pink-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-pink-500 hover:text-yellow-200 border border-pink-500 cursor-pointer text-[11px]" to="/pinkVue">🐷</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-50 hover:text-yellow-200 border border-pink-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-100 hover:text-yellow-200 border border-pink-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-200 hover:text-yellow-200 border border-pink-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-300 hover:text-yellow-200 border border-pink-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-400 hover:text-yellow-200 border border-pink-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-500 hover:text-yellow-200 border border-pink-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-600 hover:text-yellow-200 border border-pink-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-700 hover:text-yellow-200 border border-pink-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-800 hover:text-yellow-200 border border-pink-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-900 hover:text-yellow-200 border border-pink-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-950 hover:text-yellow-200 border border-pink-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer text-[66px]" to="/fuchsiaVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> fuchsiaVue</RouterLink>  
    <br><br>        <div class="border border-fuchsia-500 bg-fuchsia-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer text-[11px]" to="/fuchsiaVue">🧠</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-50 hover:text-yellow-200 border border-fuchsia-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-100 hover:text-yellow-200 border border-fuchsia-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-200 hover:text-yellow-200 border border-fuchsia-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-300 hover:text-yellow-200 border border-fuchsia-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-400 hover:text-yellow-200 border border-fuchsia-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-600 hover:text-yellow-200 border border-fuchsia-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-700 hover:text-yellow-200 border border-fuchsia-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-800 hover:text-yellow-200 border border-fuchsia-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-900 hover:text-yellow-200 border border-fuchsia-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-950 hover:text-yellow-200 border border-fuchsia-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer text-[66px]" to="/purpleVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> purpleVue</RouterLink>  
    <br><br>        <div class="border border-purple-500 bg-purple-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-purple-500 hover:text-yellow-200 border border-purple-500 cursor-pointer text-[11px]" to="/purpleVue">🛍️</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-50 hover:text-yellow-200 border border-purple-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-100 hover:text-yellow-200 border border-purple-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-200 hover:text-yellow-200 border border-purple-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-300 hover:text-yellow-200 border border-purple-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-400 hover:text-yellow-200 border border-purple-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-500 hover:text-yellow-200 border border-purple-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-600 hover:text-yellow-200 border border-purple-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-700 hover:text-yellow-200 border border-purple-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-800 hover:text-yellow-200 border border-purple-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-900 hover:text-yellow-200 border border-purple-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-950 hover:text-yellow-200 border border-purple-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer text-[66px]" to="/violetVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> violetVue</RouterLink>  
    <br><br>        <div class="border border-violet-500 bg-violet-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer text-[11px]" to="/violetVue">☔</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-50 hover:text-yellow-200 border border-violet-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-100 hover:text-yellow-200 border border-violet-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-200 hover:text-yellow-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-300 hover:text-yellow-200 border border-violet-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-400 hover:text-yellow-200 border border-violet-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-600 hover:text-yellow-200 border border-violet-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-700 hover:text-yellow-200 border border-violet-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-800 hover:text-yellow-200 border border-violet-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-900 hover:text-yellow-200 border border-violet-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-950 hover:text-yellow-200 border border-violet-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer text-[66px]" to="/indigoVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> indigoVue</RouterLink>  
    <br><br>
        <div class="border border-indigo-500 bg-indigo-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer text-[11px]" to="/indigoVue">🎵</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-50 hover:text-yellow-200 border border-indigo-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-100 hover:text-yellow-200 border border-indigo-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-200 hover:text-yellow-200 border border-indigo-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-300 hover:text-yellow-200 border border-indigo-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-400 hover:text-yellow-200 border border-indigo-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-600 hover:text-yellow-200 border border-indigo-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-700 hover:text-yellow-200 border border-indigo-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-800 hover:text-yellow-200 border border-indigo-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-900 hover:text-yellow-200 border border-indigo-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-950 hover:text-yellow-200 border border-indigo-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer text-[66px]" to="/blueVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> blueVue</RouterLink>  
    <br><br>        <div class="border border-blue-500 bg-blue-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-blue-500 hover:text-yellow-200 border border-blue-500 cursor-pointer text-[11px]" to="/blueVue">🛹</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-50 hover:text-yellow-200 border border-blue-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-100 hover:text-yellow-200 border border-blue-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-200 hover:text-yellow-200 border border-blue-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-300 hover:text-yellow-200 border border-blue-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-400 hover:text-yellow-200 border border-blue-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-500 hover:text-yellow-200 border border-blue-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-600 hover:text-yellow-200 border border-blue-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-700 hover:text-yellow-200 border border-blue-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-800 hover:text-yellow-200 border border-blue-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-900 hover:text-yellow-200 border border-blue-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-950 hover:text-yellow-200 border border-blue-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer text-[66px]" to="/skyVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> skyVue</RouterLink>  
    <br><br>        <div class="border border-sky-500 bg-sky-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer text-[11px]" to="/skyVue">🌃</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-50 hover:text-yellow-200 border border-sky-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-100 hover:text-yellow-200 border border-sky-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-200 hover:text-yellow-200 border border-sky-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-300 hover:text-yellow-200 border border-sky-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-400 hover:text-yellow-200 border border-sky-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-600 hover:text-yellow-200 border border-sky-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-700 hover:text-yellow-200 border border-sky-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-800 hover:text-yellow-200 border border-sky-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-900 hover:text-yellow-200 border border-sky-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-950 hover:text-yellow-200 border border-sky-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer text-[66px]" to="/cyanVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> cyanVue</RouterLink>  
    <br><br>        <div class="border border-cyan-500 bg-cyan-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-cyan-500 hover:text-yellow-200 border border-cyan-500 cursor-pointer text-[11px]" to="/cyanVue">🧩</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-50 hover:text-yellow-200 border border-cyan-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-100 hover:text-yellow-200 border border-cyan-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-200 hover:text-yellow-200 border border-cyan-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-300 hover:text-yellow-200 border border-cyan-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-400 hover:text-yellow-200 border border-cyan-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-500 hover:text-yellow-200 border border-cyan-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-600 hover:text-yellow-200 border border-cyan-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-700 hover:text-yellow-200 border border-cyan-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-800 hover:text-yellow-200 border border-cyan-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-900 hover:text-yellow-200 border border-cyan-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-950 hover:text-yellow-200 border border-cyan-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/limeVue"> tealVue</RouterLink>  
    <br><br>
        <div class="border border-teal-500 bg-teal-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer text-[11px]" to="/tealVue">🔰</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-50 hover:text-yellow-200 border border-teal-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-100 hover:text-yellow-200 border border-teal-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-200 hover:text-yellow-200 border border-teal-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-300 hover:text-yellow-200 border border-teal-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-400 hover:text-yellow-200 border border-teal-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-600 hover:text-yellow-200 border border-teal-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-700 hover:text-yellow-200 border border-teal-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-800 hover:text-yellow-200 border border-teal-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-900 hover:text-yellow-200 border border-teal-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-950 hover:text-yellow-200 border border-teal-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/limeVue"> emeraldVue</RouterLink>  
    <br><br>        <div class="border border-emerald-500 bg-emerald-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer text-[11px]" to="/emeraldVue">🦎</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-50 hover:text-yellow-200 border border-emerald-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-100 hover:text-yellow-200 border border-emerald-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-200 hover:text-yellow-200 border border-emerald-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-300 hover:text-yellow-200 border border-emerald-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-400 hover:text-yellow-200 border border-emerald-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-600 hover:text-yellow-200 border border-emerald-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-700 hover:text-yellow-200 border border-emerald-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-800 hover:text-yellow-200 border border-emerald-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-900 hover:text-yellow-200 border border-emerald-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-950 hover:text-yellow-200 border border-emerald-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/limeVue"> greenVue</RouterLink>  
    <br><br>        <div class="border border-green-500 bg-green-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer text-[11px]" to="/cyanVue">💲</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-50 hover:text-yellow-200 border border-green-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-100 hover:text-yellow-200 border border-green-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-200 hover:text-yellow-200 border border-green-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-300 hover:text-yellow-200 border border-green-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-400 hover:text-yellow-200 border border-green-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-600 hover:text-yellow-200 border border-green-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-700 hover:text-yellow-200 border border-green-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-800 hover:text-yellow-200 border border-green-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-900 hover:text-yellow-200 border border-green-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-950 hover:text-yellow-200 border border-green-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
  </div>
  <div>
    <RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer text-[66px]" to="/zincVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer" to="/zincVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer" to="/zincVue"> zincVue</RouterLink>  
    <br><br>      <div class="border border-zinc-500 bg-zinc-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer text-[11px]" to="/zincVue">🛒</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-50 hover:text-yellow-200 border border-zinc-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-100 hover:text-yellow-200 border border-zinc-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-200 hover:text-yellow-200 border border-zinc-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-300 hover:text-yellow-200 border border-zinc-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-400 hover:text-yellow-200 border border-zinc-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-600 hover:text-yellow-200 border border-zinc-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-700 hover:text-yellow-200 border border-zinc-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-800 hover:text-yellow-200 border border-zinc-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-900 hover:text-yellow-200 border border-zinc-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-950 hover:text-yellow-200 border border-zinc-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>
  <div>
    <RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer text-[66px]" to="/grayVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer" to="/grayVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer" to="/grayVue"> grayVue</RouterLink>  
    <br><br>      <div class="border border-gray-500 bg-gray-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer text-[11px]" to="/grayVue">🧷</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-50 hover:text-yellow-200 border border-gray-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-100 hover:text-yellow-200 border border-gray-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-200 hover:text-yellow-200 border border-gray-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-300 hover:text-yellow-200 border border-gray-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-400 hover:text-yellow-200 border border-gray-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-600 hover:text-yellow-200 border border-gray-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-700 hover:text-yellow-200 border border-gray-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-800 hover:text-yellow-200 border border-gray-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-900 hover:text-yellow-200 border border-gray-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-950 hover:text-yellow-200 border border-gray-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>
  <div>
    <RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer text-[66px]" to="/neutralVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer" to="/neutralVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer" to="/neutralVue"> neutralVue</RouterLink>  
    <br><br>
      <div class="border border-neutral-500 bg-neutral-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer text-[11px]" to="/neutralVue">📺</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-50 hover:text-yellow-200 border border-neutral-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-100 hover:text-yellow-200 border border-neutral-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-200 hover:text-yellow-200 border border-neutral-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-300 hover:text-yellow-200 border border-neutral-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-400 hover:text-yellow-200 border border-neutral-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-600 hover:text-yellow-200 border border-neutral-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-700 hover:text-yellow-200 border border-neutral-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-800 hover:text-yellow-200 border border-neutral-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-900 hover:text-yellow-200 border border-neutral-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-950 hover:text-yellow-200 border border-neutral-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>
  <div>
    <RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer text-[66px]" to="/stoneVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer" to="/stoneVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer" to="/stoneVue"> stoneVue</RouterLink>  
    <br><br>      <div class="border border-stone-500 bg-stone-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer text-[11px]" to="/stoneVue">🧱</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-50 hover:text-yellow-200 border border-stone-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-100 hover:text-yellow-200 border border-stone-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-200 hover:text-yellow-200 border border-stone-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-300 hover:text-yellow-200 border border-stone-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-400 hover:text-yellow-200 border border-stone-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-600 hover:text-yellow-200 border border-stone-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-700 hover:text-yellow-200 border border-stone-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-800 hover:text-yellow-200 border border-stone-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-900 hover:text-yellow-200 border border-stone-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-950 hover:text-yellow-200 border border-stone-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>  
  </div>
  <div>
    <RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer text-[66px]" to="/slateVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer" to="/slateVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer" to="/slateVue"> slateVue</RouterLink>  
    <br><br>      <div class="border border-slate-500 bg-slate-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
        <RouterLink class="p-2.5; text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer text-[11px]" to="/grayVue">🐃</RouterLink> 
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-50 hover:text-yellow-200 border border-slate-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-100 hover:text-yellow-200 border border-slate-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-200 hover:text-yellow-200 border border-slate-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-300 hover:text-yellow-200 border border-slate-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-400 hover:text-yellow-200 border border-slate-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-600 hover:text-yellow-200 border border-slate-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-700 hover:text-yellow-200 border border-slate-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-800 hover:text-yellow-200 border border-slate-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-900 hover:text-yellow-200 border border-slate-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-950 hover:text-yellow-200 border border-slate-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
      </div>
  </div>
</nav>
</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     













<!--
<nav class="grid grid-cols-[repeat(23,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <div>
    <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> limeVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer text-[66px]" to="/yellowVue"><i class="material-icons" style="font-size: 55px">accessibility</i></RouterLink>
    <br><br><RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> accessibility</RouterLink>
    <br><br><RouterLink class="p-2 text-yellow-400 hover:text-sky-200 border border-yellow-400 bg-yellow-400/25 cursor-pointer" to="/yellowVue"> yellowVue</RouterLink>  
  </div>  
  <div>
    <RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer text-[66px]" to="/amberVue"><i class="material-icons" style="font-size: 55px">filter_center_focus</i></RouterLink>
    <br><br><RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"> filter_center_focus</RouterLink>
    <br><br><RouterLink class="p-2 text-amber-400 hover:text-sky-200 border border-amber-400 bg-amber-400/25 cursor-pointer" to="/amberVue"> amberVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer text-[66px]" to="/orangeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-orange-400 hover:text-sky-200 border border-orange-400 bg-orange-400/25 cursor-pointer" to="/orangeVue"> orangeVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer text-[66px]" to="/redVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-red-400 hover:text-sky-200 border border-red-400 bg-red-400/25 cursor-pointer" to="/redVue"> redVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer text-[66px]" to="/roseVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer" to="/roseVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-rose-400 hover:text-sky-200 border border-rose-400 bg-rose-400/25 cursor-pointer" to="/roseVue"> roseVue</RouterLink>  
  </div>  
  <div>
    <RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer text-[66px]" to="/pinkVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-pink-400 hover:text-sky-200 border border-pink-400 bg-pink-400/25 cursor-pointer" to="/pinkVue"> pinkVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer text-[66px]" to="/fuchsiaVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-fuchsia-400 hover:text-sky-200 border border-fuchsia-400 bg-fuchsia-400/25 cursor-pointer" to="/fuchsiaVue"> fuchsiaVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer text-[66px]" to="/purpleVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-purple-400 hover:text-sky-200 border border-purple-400 bg-purple-400/25 cursor-pointer" to="/purpleVue"> purpleVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer text-[66px]" to="/violetVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-violet-400 hover:text-sky-200 border border-violet-400 bg-violet-400/25 cursor-pointer" to="/violetVue"> violetVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer text-[66px]" to="/indigoVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-indigo-400 hover:text-sky-200 border border-indigo-400 bg-indigo-400/25 cursor-pointer" to="/indigoVue"> indigoVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer text-[66px]" to="/blueVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-blue-400 hover:text-sky-200 border border-blue-400 bg-blue-400/25 cursor-pointer" to="/blueVue"> blueVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer text-[66px]" to="/skyVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-sky-400 hover:text-sky-200 border border-sky-400 bg-sky-400/25 cursor-pointer" to="/skyVue"> skyVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer text-[66px]" to="/cyanVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-cyan-400 hover:text-sky-200 border border-cyan-400 bg-cyan-400/25 cursor-pointer" to="/cyanVue"> cyanVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-teal-400 hover:text-sky-200 border border-teal-400 bg-teal-400/25 cursor-pointer" to="/limeVue"> tealVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-emerald-400 hover:text-sky-200 border border-emerald-400 bg-emerald-400/25 cursor-pointer" to="/limeVue"> emeraldVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-green-400 hover:text-sky-200 border border-green-400 bg-green-400/25 cursor-pointer" to="/limeVue"> greenVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer text-[66px]" to="/limeVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-lime-400 hover:text-sky-200 border border-lime-400 bg-lime-400/25 cursor-pointer" to="/limeVue"> limeVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer text-[66px]" to="/zincVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer" to="/zincVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-zinc-400 hover:text-sky-200 border border-zinc-400 bg-zinc-400/25 cursor-pointer" to="/zincVue"> zincVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer text-[66px]" to="/grayVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer" to="/grayVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-gray-400 hover:text-sky-200 border border-gray-400 bg-gray-400/25 cursor-pointer" to="/grayVue"> grayVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer text-[66px]" to="/neutralVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer" to="/neutralVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-neutral-400 hover:text-sky-200 border border-neutral-400 bg-neutral-400/25 cursor-pointer" to="/neutralVue"> neutralVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer text-[66px]" to="/stoneVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer" to="/stoneVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-stone-400 hover:text-sky-200 border border-stone-400 bg-stone-400/25 cursor-pointer" to="/stoneVue"> stoneVue</RouterLink>  
  </div>
  <div>
    <RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer text-[66px]" to="/slateVue"><i class="material-icons" style="font-size: 55px">home</i></RouterLink>
    <br><br><RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer" to="/slateVue"> home</RouterLink>
    <br><br><RouterLink class="p-2 text-slate-400 hover:text-sky-200 border border-slate-400 bg-slate-400/25 cursor-pointer" to="/slateVue"> slateVue</RouterLink>  
  </div>


</nav>
<br><br><br><br><br><br><br><br><br><br><br><br>
<br><hr><br><hr><br><hr><br><hr><br><hr>
<nav class="grid grid-cols-[repeat(18,minmax(0,1fr))] w-full h-6 gap-3 p-5">
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


<br><hr><br><br><hr><br><br><hr><br><br><hr><br><br><hr><br>


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
-->  


</template>
