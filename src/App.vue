<script setup lang="ts">
import Clock from "@/components/Clock.vue";
import seaOfNoughtNavigationBar from "@/components/seaOfNoughtNavigationBar.vue";
import skyMini from "@/components/color/skyMini.vue";
import skyTop from "@/components/color/skyTop.vue";
import skyBottom from "@/components/color/skyBottom.vue";
import wordBar from "@/components/wordBar.vue";
import NaughtSeaHeader from "@/components/NaughtSeaHeader.vue";
import SplitOneTwoThree from "@/components/SplitOneTwoThree.vue";
import NavigationBars from "@/components/NavigationBars.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
<center>
  <a href="http://localhost:5173/aardvarkVue" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🐗🦡🦔</a>
  <NavigationBar />  
</center>

<br><br><hr><br><hr><br>
<center>
<skyTop /><skyTop /><skyTop /><skyTop /><br>
</center>
<center class="text-xl"><skyTop /><skyTop /><br>
<span  class="text-4xl">ن🖵無 </span><br>
<RouterView />
<span  class="text-4xl">無🖵ن </span><br>
<span class="text-2xl"><skyBottom /><skyBottom /></span> 
</center>
<br><br>
<center>
<div class="grid grid-cols-18 gap-1 p-1 text-[11px] text-center">
<span class="text-lime-300">lime-300</span>
<span class="text-yellow-300">yellow-300</span>
<span class="text-amber-300">amber-300</span>
<span class="text-orange-300">orange-300</span>
<span class="text-red-300">red-300</span>
<span class="text-rose-300">rose-300</span>
<span class="text-pink-300">pink-300</span>
<span class="text-fuchsia-300">fuchsia-300</span>
<span class="text-purple-300">purple-300</span>
<span class="text-violet-300">violet-300</span>
<span class="text-indigo-300">indigo-300</span>
<span class="text-blue-300">blue-300</span>
<span class="text-sky-300">sky-300</span>
<span class="text-cyan-300">cyan-300</span>
<span class="text-teal-300">teal-300</span>
<span class="text-emerald-300">emerald-300</span>
<span class="text-green-300">green-300</span>
<span class="text-lime-300">lime-300</span>
</div>
<nav class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/"> ∅<br>Sea</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-amber-200 border border-amber-200 cursor-pointer" to="/orientation">📐<br>Orientation</RouterLink>      
  <RouterLink class="p-2.5; text-sky-200 hover:text-orange-200 border border-orange-200 cursor-pointer" to="/anchor">🛠<br>Git</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-red-200 border border-red-200 cursor-pointer" to="/dailies">🎬<br>Dailies</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-rose-200 border border-rose-200 cursor-pointer" to="/royalwe">👑<br>RoyalWe<br></RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-pink-200 border border-pink-200 cursor-pointer" to="/">📆<br>Monthlies</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-fuchsia-200 border border-fuchsia-200 cursor-pointer" to="/forecastle">📊<br>Forecasting</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200 border border-purple-200 cursor-pointer" to="/">📅<br>Yearlies</RouterLink>  
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-2.5; text-sky-200 hover:text-violet-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">👌<br>Perfection</a>          
  <RouterLink class="p-2.5; text-sky-200 hover:text-indigo-200 border border-indigo-200 cursor-pointer" to="/">📓<br>㏒</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-blue-200 border border-blue-200 cursor-pointer" to="/library">🏛️<br>libraries</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-sky-200 border border-sky-200 cursor-pointer" to="/">💬<br>gG</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-cyan-200 border border-cyan-200 cursor-pointer" to="/Xhibition">🎪<br>Xhibition</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-teal-200 border border-teal-200 cursor-pointer" to="/">📁<br>Sorting</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-emerald-200 border border-emerald-200 cursor-pointer" to="/vocabulary">📖<br>Vocabulary</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-green-200 border border-green-200 cursor-pointer" to="/check">✅<br>Czech</RouterLink>            
  <RouterLink class="p-2.5; text-sky-200 hover:text-lime-200 border border-lime-200 cursor-pointer" to="/royalwethepeople">🗽<br>RWTP</RouterLink>            
</nav> <br><br>
</center>
</template>
<style>
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
.hubot-sans {
  font-family: "Hubot Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.mea-culpa-regular {
  font-family: "Mea Culpa", cursive;
  font-weight: 400;
  font-style: normal;
}
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
