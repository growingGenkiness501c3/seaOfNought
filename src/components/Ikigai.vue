
<script setup lang="ts">

defineOptions({
  name: "Ikigai"
});
</script>
<template>

<div><dfn class="updock-regular text-neutral-100 text-[33px]">falsus in uno, falsus in omnibus ::</dfn> <dfn class="updock-regular text-neutral-100 text-[33px]">:: no one lies better than a Christian</dfn></div>
  <div class="text-[55px]"> 生き甲斐 ikigai </div>
  <div class="text-[44px">Ikigai (生きがい) is a Japanese concept that refers to a reason for living or a sense of purpose. It's the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. Finding one's ikigai can lead to a more fulfilling and joyful life</div>
<div>
<nav class="grid grid-cols-[repeat(7,minmax(0,1fr))] w-full h-6 gap-3 p-5 orbitron">
  <div></div>
  <RouterLink class="p-2 text-slate-900 hover:text-sky-200 border border-slate-600 bg-slate-600/75 cursor-pointer" to="/slateVue">  <i class="material-icons" style="font-size: 55px">home</i></RouterLink>
  <RouterLink class="p-2 text-gray-900 hover:text-sky-200 border border-gray-600 bg-gray-600/75 cursor-pointer" to="/grayVue">  <i class="material-icons" style="font-size: 55px">security</i></RouterLink>    
  <RouterLink class="p-2 text-zinc-900 hover:text-sky-200 border border-zinc-600 bg-zinc-600/75 cursor-pointer" to="/zincVue">  <i class="material-icons" style="font-size: 55px">schedule</i></RouterLink>
  <RouterLink class="p-2 text-neutral-900 hover:text-sky-200 border border-neutral-600 bg-neutral-600/75 cursor-pointer" to="/neutralVue">  <i class="material-icons" style="font-size: 55px">school</i></RouterLink>    
  <RouterLink class="p-2 text-stone-900 hover:text-sky-200 border border-stone-600 bg-stone-600/75 cursor-pointer" to="/stoneVue">  <i class="material-icons" style="font-size: 55px">select_all</i></RouterLink>
  <div></div>
</nav><br><br>
<nav class="grid grid-cols-[repeat(7,minmax(0,1fr))] w-full h-6 gap-3 p-5 orbitron">
  <div></div>
  <RouterLink class="p-2 text-slate-900 hover:text-sky-200 border border-slate-600 bg-slate-600/40 cursor-pointer" to="/slateVue"> home</RouterLink>
  <RouterLink class="p-2 text-gray-900 hover:text-sky-200 border border-gray-600 bg-gray-600/40 cursor-pointer" to="/grayVue"> security</RouterLink>    
  <RouterLink class="p-2 text-zinc-900 hover:text-sky-200 border border-zinc-600 bg-zinc-600/40 cursor-pointer" to="/zincVue"> schedule</RouterLink>
  <RouterLink class="p-2 text-neutral-900 hover:text-sky-200 border border-neutral-600 bg-neutral-600/40 cursor-pointer" to="/neutralVue"> school</RouterLink>    
  <RouterLink class="p-2 text-stone-900 hover:text-sky-200 border border-stone-600 bg-stone-600/40 cursor-pointer" to="/stoneVue"> select_all</RouterLink>
  <div></div>
</nav>
<nav class="grid grid-cols-[repeat(7,minmax(0,1fr))] w-full h-6 gap-3 p-5 orbitron">
  <div></div>
  <RouterLink class="p-2 text-slate-900 hover:text-sky-200 border border-slate-600 bg-slate-600/40 cursor-pointer" to="/slateVue"> slateVue</RouterLink>
  <RouterLink class="p-2 text-gray-900 hover:text-sky-200 border border-gray-600 bg-gray-600/40 cursor-pointer" to="/grayVue"> grayVue</RouterLink>    
  <RouterLink class="p-2 text-zinc-900 hover:text-sky-200 border border-zinc-600 bg-zinc-600/40 cursor-pointer" to="/zincVue"> zincVue</RouterLink>
  <RouterLink class="p-2 text-neutral-900 hover:text-sky-200 border border-neutral-600 bg-neutral-600/40 cursor-pointer" to="/neutralVue"> neutralVue</RouterLink>    
  <RouterLink class="p-2 text-stone-900 hover:text-sky-200 border border-stone-600 bg-stone-600/40 cursor-pointer" to="/stoneVue"> stoneVue</RouterLink>
  <div></div>
</nav>
<br><br>
</div>  
</template>
