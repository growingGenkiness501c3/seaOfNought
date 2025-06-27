
<script setup lang="ts">
import sailboat_00 from "@/components/sailboat/sailboat_00.vue"
import turtle_00 from "@/components/turtle/turtle_00.vue"

import sailboat_01 from "@/components/sailboat/sailboat_01.vue"
import turtle_01 from "@/components/turtle/turtle_01.vue"


defineOptions({
  name: "WIP_01"
});
</script>
<template>
<h1>WIP_01</h1>

<div class="grid grid-cols-[repeat(32,minmax(0,1fr))] w-full h-6 hubot-sans text-[33px] gap-1 p-1 cursor-pointer text-center">
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_00"> ⓪ </RouterLink><sailboat_00 /><turtle_00 /></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_01"> ① </RouterLink><sailboat_01 /><turtle_01 /></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_02"> ② </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_03"> ③ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_04"> ④ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_05"> ⑤ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_06"> ⑥ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_07"> ⑦ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_08"> ⑧ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_09"> ⑨ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_10"> ⑩ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_11"> ⑪ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_12"> ⑫ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_13"> ⑬ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_14"> ⑭ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_15"> ⑮ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_16"> ⑯ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_17"> ⑰ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_18"> ⑱ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_19"> ⑲ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_20"> ⑳ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_21"> ㉑ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_22"> ㉒ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_23"> ㉓ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_24"> ㉔ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_25"> ㉕ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_26"> ㉖ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_27"> ㉗ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_28"> ㉘ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_29"> ㉙ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_30"> ㉚ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_31"> ㉛ </RouterLink></div>
</div>
<br>
<div class="grid grid-cols-3 grid-rows-2 gap-4 p-4">
  <div class="flex items-center justify-center">
    <turtleCompiled />
  </div>
  <div class="bg-sky-950/75 border border-sky-500 flex items-center justify-center">
    <sailboatCompiled />
  </div>
  <div class="flex items-center justify-center">
    <turtleCompiled />
  </div>
</div>
<span class="text-[99px] text-[#aa00aa]"> move WIPBar and ÷ </span>
<center>
<code>save as plain svg for less trash code. set fill to currentColor in component for tailwind maniuplation</code>
<code>will need to rename to start file with any alpha character... not number</code>
<code>in inkscape upon open select rendering mode: blocky</code>
<code>if it doesn't detect brightness @ .5 threshold (it won't preview) flood with black in krita and come back</code>
<nav class="grid grid-cols-[repeat(1,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCmxldCBjaG9yZHMgPSBjaG9yZCgiPEMgRyBDIEcgQyBHIEFtIEMgQ20gRyBDIEcgQz4vMiIpLmRpY3QoJ2lyZWFsJykKCnN0YWNrKAogIHN0YWNrKAogICAgcygiYmQiKS5zdHJ1Y3QoInggeCA8W3gqPDEgMiAzPiBbeCB%2BQDIgfkAzXV0%2BIiksCiAgICBuKCJbMCA8MCAxPl0qPDIhMyA2PiIpLnMoImhoIikKICApLmdhaW4oMC4yKSwgLy8gYXBwbHkgZ2FpbiB0byBkcnVtcyBvbmx5CgogIGNob3Jkcy5vZmZzZXQoLTEpLnZvaWNpbmcoKS5zKCJnbV9lcGlhbm8xOjEiKQopCg%3D%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">face</i></a></div></nav>
  <span class="text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt;C G C G C G Am C Cm G C G C&gt;/4").dict('ireal')</span>
<hr>
</center>
</template>
