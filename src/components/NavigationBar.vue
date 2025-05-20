<script setup lang="ts">


defineOptions({
  name: "NavigationBar"
});
</script>
<template>
  <nav class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-1 p-1 text-xs">
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/"> ∅<br>Sea</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-amber-200 border border-amber-200 cursor-pointer" to="/orientation">📐<br>Orientation</RouterLink>      
    <RouterLink class="p-2.5; text-sky-200 hover:text-orange-200 border border-orange-200 cursor-pointer" to="/anchor">🛠<br>Git</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-red-200 border border-red-200 cursor-pointer" to="/dailies">🎬<br>Dailies</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-rose-200 border border-rose-200 cursor-pointer" to="/royalwe">👑RoyalWe<br></RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-pink-200 border border-pink-200 cursor-pointer" to="/">📆Monthlies</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-fuchsia-200 border border-fuchsia-200 cursor-pointer" to="/forecastle">📊<br>Forecasting</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200 border border-purple-200 cursor-pointer" to="/">📅<br>Yearlies</RouterLink>  
    <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-2.5; text-sky-200 hover:text-violet-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">👌<br>Perfection</a>          
    <RouterLink class="p-2.5; text-sky-200 hover:text-indigo-200 border border-indigo-200 cursor-pointer" to="/">📓<br>㏒</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-blue-200 border border-blue-200 cursor-pointer" to="/library">🏛️<br>libraries</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-sky-200 border border-sky-200 cursor-pointer" to="/">💬<br>gG</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-cyan-200 border border-cyan-200 cursor-pointer" to="/exhibits">🎪<br>Xhibition</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-teal-200 border border-teal-200 cursor-pointer" to="/">📁<br>Sorting</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-emerald-200 border border-emerald-200 cursor-pointer" to="/vocabulary">📖<br>Vocabulary</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-green-200 border border-green-200 cursor-pointer" to="/check">✅<br>Czech</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-lime-200 border border-lime-200 cursor-pointer" to="/royalwethepeople">🗽<br>RWTP</RouterLink>            
    </nav>      
</template>


