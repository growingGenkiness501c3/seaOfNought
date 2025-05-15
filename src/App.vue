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
<div style="text-align: right;">
<oO0 /><zer0Oo /></div>
<Clock />
<nav class="flex flex-wrap items-center justify-center">
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/royalwe">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
</nav><br>
<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6">
  <div class="bg-yellow-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">1</a></div>
  <div class="bg-amber-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-orange-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">3</a></div>
  <div class="bg-red-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-rose-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">5</a></div>
  <div class="bg-pink-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-fuchsia-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">7</a></div>
  <div class="bg-purple-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-violet-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">9</a></div>
  <div class="bg-indigo-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">+</a></div>
  <div class="bg-blue-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">1</a></div>
  <div class="bg-sky-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-cyan-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">3</a></div>
  <div class="bg-teal-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-emerald-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">5</a></div>
  <div class="bg-green-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-lime-500 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">7</a></div>
</div>


<br />
🔹App.vue<br />
<RouterView />
🔹App.vue
<center>
<span class="font-mea-culpa text-[33px]"> ∅© </span>
<span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;<br /></span>
<span class="mea-culpa-regular" style="font-size: 22px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⾈&nbsp;with
Vite + Vue & tailwindcss &nbsp;⛵ </span><br />
<skyTop /><skyTop />
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
<code>https://python.plainenglish.io/i-wish-i-knew-these-10-python-libraries-when-i-started-developing-1c819070fd5a</code>
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
<br />
🖐️
<HelloWorld msg="Vite HelloWorld Vue" />🖐️
<center><Flag>Let's manifest some tests! !! !!!</Flag><br /></center>
<center><skyBottom /><skyBottom /></center>
<center><Flag>ABCDEFGHIJKLM01234567890NOPQRSTUVWXYZ</Flag></center>
<center><Flag>abcdefghijklmnopqrstuvwxyz</Flag></center>
<center><rainbowDots /></center>
<center>
<div class="grid grid-cols-13 gap-2">
  <div class="p-2 border hue090">⬤</div>
  <div class="p-2 border hue060"><a href="file:///D:/125/html/level_zer0.html" target="_blank">🟡</a></div>
  <div class="p-2 border hue030"><a href="http://localhost:5173/royalwethepeople" target="_blank">👑</a></div>
  <div class="p-2 border hue000">⬤</div>
  <div class="p-2 border hue330">⬤</div>
  <div class="p-2 border hue300">⬤</div>
  <div class="p-2 border hue270">⬤</div>
  <div class="p-2 border hue240">⬤</div>
  <div class="p-2 border hue210"><a href="http://localhost:4090/" target="_blank">🧿</a></div>
  <div class="p-2 border hue180"><a href="http://localhost:5173/" target="_blank">⛵</a></div>
  <div class="p-2 border hue150">⬤</div>
  <div class="p-2 border hue120">⬤</div>
  <div class="p-2 border hue090">⬤</div>
</div>
</center>



<code class="orbitron"><center>&nbsp;&nbsp;&nbsp;⾈ exploring https://tailwindcss.com/ ⛵</center><br></code>

<div class="grid grid-cols-11 gap-1 border border-gray-300">
  <div class="p-2 border border-gray-300 text-center text-4xl font-bold"><h1>oO0Oo</h1></div>
  <div class="p-2 border border-gray-300 text-center text-3xl font-semibold"><h2>oO0Oo</h2></div>
  <div class="p-2 border border-gray-300 text-center text-2xl font-semibold"><h3>oO0Oo</h3></div>
  <div class="p-2 border border-gray-300 text-center text-xl font-medium"><h4>oO0Oo</h4></div>
  <div class="p-2 border border-gray-300 text-center text-lg font-medium"><h5>oO0Oo</h5></div>
  <div class="p-2 border border-gray-300 text-center text-base font-normal"><h6>oO0Oo</h6></div>
  <div class="p-2 border border-gray-300 text-center text-lg font-medium"><h5>oO0Oo</h5></div>
  <div class="p-2 border border-gray-300 text-center text-xl font-medium"><h4>oO0Oo</h4></div>
  <div class="p-2 border border-gray-300 text-center text-2xl font-semibold"><h3>oO0Oo</h3></div>
  <div class="p-2 border border-gray-300 text-center text-3xl font-semibold"><h2>oO0Oo</h2></div>
  <div class="p-2 border border-gray-300 text-center text-4xl font-bold"><h1>oO0Oo</h1></div>
</div>





<!--
     <pre> https://en.wikipedia.org/wiki/File:Wanna_Work_Together%3F_with_subtitles_-_Creative_Commons.ogv</pre>
    <dfn>interesting to see oklch being used so much
      ....&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</dfn>
    &nbsp;&nbsp;&nbsp;<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meleneth: kitemite kudasai!</sub><br />
-->

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
