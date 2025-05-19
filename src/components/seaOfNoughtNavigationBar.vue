<script setup lang="ts">
defineOptions({
  name: "seaOfNoughtNavigationBar"
});
</script>
<template>
<!-- /*
<nav class="flex flex-wrap items-center justify-center">
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
</nav> 
*/ -->
<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-10 p-5 ">
  <div class="border border-yellow-400 cursor-pointer hover:opacity-30 text-center">
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">∅</a><br></div>
  <div class="border border-amber-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/orientation" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📐</a></div>
  <div class="border border-orange-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/anchor" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🛠</a></div>
  <div class="border border-red-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/dailies" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🎬</a></div>
  <div class="border border-rose-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwe" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👑</a></div>
  <div class="border border-pink-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📆</a></div>
  <div class="border border-fuchsia-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/forecastle" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📊</a></div>
  <div class="border border-purple-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📅</a></div>
  <div class="border border-violet-400 cursor-pointer hover:opacity-30" >
    <br><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">✨👌</a></div>
  <div class="border border-indigo-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📓</a></div>
  <div class="border border-blue-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/library" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🏛️</a></div>
  <div class="border border-sky-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">💬</a></div>
  <div class="border border-cyan-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/exhibits" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🎪</a></div>
  <div class="border border-teal-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📁</a></div>
  <div class="border border-emerald-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/vocabulary" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📖</a></div>
  <div class="border border-green-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/check" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">✅</a></div>
  <div class="border border-lime-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👑🗽</a></div>
</div>
<br><br><br><br>
<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-10 p-5 ">
  <div class="border border-yellow-400 cursor-pointer hover:opacity-30 text-center">
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">0</a><br></div>
  <div class="border border-amber-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/orientation" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">1</a></div>
  <div class="border border-orange-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/anchor" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="border border-red-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/dailies" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">3</a></div>
  <div class="border border-rose-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwe" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="border border-pink-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">5</a></div>
  <div class="border border-fuchsia-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/forecastle" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="border border-purple-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">7</a></div>
  <div class="border border-violet-400 cursor-pointer hover:opacity-30" >
    <br><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="border border-indigo-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">9</a></div>
  <div class="border border-blue-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/library" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">+</a></div>
  <div class="border border-sky-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">11</a></div>
  <div class="border border-cyan-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/exhibits" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">12</a></div>
  <div class="border border-teal-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">13</a></div>
  <div class="border border-emerald-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/vocabulary" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">14</a></div>
  <div class="border border-green-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/check" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">15</a></div>
  <div class="border border-lime-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">16</a></div>
</div>

</template>
