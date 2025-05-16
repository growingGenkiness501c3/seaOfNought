<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import Flag from "@/components/Flag.vue";
import oO0 from "@/components/oO0.vue";
import zer0Oo from "@/components/zer0Oo.vue";

import skyTop from "@/components/skyTop.vue";
import skyBottom from "@/components/skyBottom.vue";
import rainbowDots from "@/components/rainbowDots.vue";

import Clock from "@/components/Clock.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
<center>
<span class="font-mea-culpa text-[33px]"> ∅© </span>
<span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;<br /></span>
<skyTop /><skyTop /><br>
<span class="mea-culpa-regular" style="font-size: 22px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⾈&nbsp;with
Vite + Vue & tailwindcss &nbsp;⛵ </span><br />

</center>
<center>
<div class="grid grid-cols-13 gap-2">
  <div class="p-2 border hue090">hue090</div>
  <div class="p-2 border hue060">hue060</div>
  <div class="p-2 border hue030">hue030</div>
  <div class="p-2 border hue000">hue000</div>
  <div class="p-2 border hue330">hue330</div>
  <div class="p-2 border hue300">hue300</div>
  <div class="p-2 border hue270">hue270</div>
  <div class="p-2 border hue240">hue240</div>
  <div class="p-2 border hue210">hue210</div>
  <div class="p-2 border hue180">hue180</div>
  <div class="p-2 border hue150">hue150</div>
  <div class="p-2 border hue120">hue120</div>
  <div class="p-2 border hue090">hue090</div>
</div>
</center>
<br>

<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-2">
  <div class="bg-yellow-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏠</a></div>
  <div class="bg-amber-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-orange-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/anchor" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⚓</a></div>
  <div class="bg-red-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-rose-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwe" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🤴</a></div>
  <div class="bg-pink-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-fuchsia-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/forecastle" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏰</a></div>
  <div class="bg-purple-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-violet-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">✨👌</a></div>
  <div class="bg-indigo-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-blue-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/library" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📚</a></div>
  <div class="bg-sky-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-cyan-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/exhibits" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👸</a></div>
  <div class="bg-teal-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-emerald-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/vocabulary" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📖</a></div>
  <div class="bg-green-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-lime-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👑</a></div>
</div>
<Clock />
<nav class="flex flex-wrap items-center justify-center">
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-300" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-200" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
</nav><br>

🖵 
<RouterView />
🖵
<Clock />
<nav class="flex flex-wrap items-center justify-center">
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-300" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-200" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
</nav><br>

<center>
<span class="font-mea-culpa text-[33px]"> ∅© </span>
<span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;<br /></span>
<skyTop /><skyTop /><br>
<span class="mea-culpa-regular" style="font-size: 22px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⾈&nbsp;with
Vite + Vue & tailwindcss &nbsp;⛵ </span><br /><br />

</center>


<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-2">
  <div class="bg-yellow-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏠</a></div>
  <div class="bg-amber-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-orange-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/anchor" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⚓</a></div>
  <div class="bg-red-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-rose-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwe" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🤴</a></div>
  <div class="bg-pink-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-fuchsia-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/forecastle" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏰</a></div>
  <div class="bg-purple-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-violet-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">✨👌</a></div>
  <div class="bg-indigo-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-blue-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/library" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📚</a></div>
  <div class="bg-sky-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-cyan-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/exhibits" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👸</a></div>
  <div class="bg-teal-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-emerald-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/vocabulary" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📖</a></div>
  <div class="bg-green-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-lime-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👑</a></div>
</div>
<br>









<center>
<div class="grid grid-cols-13 gap-2">
  <div class="p-2 border hue090">hue090</div>
  <div class="p-2 border hue060">hue060</div>
  <div class="p-2 border hue030">hue030</div>
  <div class="p-2 border hue000">hue000</div>
  <div class="p-2 border hue330">hue330</div>
  <div class="p-2 border hue300">hue300</div>
  <div class="p-2 border hue270">hue270</div>
  <div class="p-2 border hue240">hue240</div>
  <div class="p-2 border hue210">hue210</div>
  <div class="p-2 border hue180">hue180</div>
  <div class="p-2 border hue150">hue150</div>
  <div class="p-2 border hue120">hue120</div>
  <div class="p-2 border hue090">hue090</div>
</div>
</center>

</template>




<style>
.orbitron {
font-family: "Orbitron", sans-serif;
font-optical-sizing: auto;
font-weight: <weight>;
font-style: normal;
}
.rajdhani-light {
font-family: "Rajdhani", sans-serif;
font-weight: 300;
font-style: normal;
}
.rajdhani-regular {
font-family: "Rajdhani", sans-serif;
font-weight: 400;
font-style: normal;
}
.rajdhani-medium {
font-family: "Rajdhani", sans-serif;
font-weight: 500;
font-style: normal;
}
.rajdhani-semibold {
font-family: "Rajdhani", sans-serif;
font-weight: 600;
font-style: normal;
}
.rajdhani-bold {
font-family: "Rajdhani", sans-serif;
font-weight: 700;
font-style: normal;
}
.mea-culpa-regular {
  font-family: "Mea Culpa", cursive;
  font-weight: 400;
  font-style: normal;
}
.hubot-sans {
  font-family: "Hubot Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.alumni-sans-pinstripe-regular {
  font-family: "Alumni Sans Pinstripe", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.alumni-sans-pinstripe-regular-italic {
  font-family: "Alumni Sans Pinstripe", sans-serif;
  font-weight: 400;
  font-style: italic;
}
.coral-pixels-regular {
  font-family: "Coral Pixels", serif;
  font-weight: 400;
  font-style: normal;
}
.hue090 { color: hsl(90, 050%, 070%, 100%); }
.hue060 { color: hsl(60, 050%, 070%, 100%); }
.hue030 { color: hsl(030, 050%, 070%, 100%); }
.hue000 { color: hsl(000, 050%, 070%, 100%); }
.hue330 { color: hsl(330, 050%, 070%, 100%); }
.hue300 { color: hsl(300, 050%, 070%, 100%); }
.hue270 { color: hsl(270, 050%, 070%, 100%); }
.hue240 { color: hsl(240, 050%, 070%, 100%); }
.hue210 { color: hsl(210, 050%, 070%, 100%); }
.hue180 { color: hsl(180, 050%, 070%, 100%); }
.hue150 { color: hsl(150, 050%, 070%, 100%); }
.hue120 { color: hsl(120, 050%, 070%, 100%); }
.huewhite { color: hsl(0, 0%, 100%, 100%); }
.huegræy { color: hsl(0, 0%, 050%, 100%); }
.hueblack { color: hsl(0, 0%, 000%, 100%); }
h1 {  color: hsl(270, 050%, 070%, 100%);}
h2 {  color: hsl(240, 050%, 070%, 100%);}
h3 {  color: hsl(210, 050%, 070%, 100%);}
h4 {  color: hsl(180, 050%, 070%, 100%);}
h5 {  color: hsl(150, 050%, 070%, 100%);}
h6 {  color: hsl(120, 050%, 070%, 100%);}
</style>
