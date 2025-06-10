
<script setup lang="ts">
import routerBar from "@/components/routerBar.vue"
import TailwindColorNameBar from "@/components/color/tailwindColorNameBar.vue"
import hueBar from "@/components/color/hueBar.vue"
defineOptions({
  name: "AllostasissyBar"
});
</script>
<template>
  <center class="w-full text-[11px] gap-1 p-1 flex items-center justify-center">
  <div class="border border-pink-50 bg-gray-950/80 w-44"><a class="text-pink-50" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> <i class="material-icons  hover:text-sky-500" style="font-size: 99px">mood_bad</i></a></div>
  <div class="border border-pink-100 bg-gray-900/70 w-44"><a class="text-pink-100" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> <i class="material-icons  hover:text-sky-500" style="font-size: 99px">sentiment_very_dissatisfied</i></a></div>
  <div class="border border-pink-200 bg-gray-800/60 w-44"><a class="text-pink-200" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> <i class="material-icons  hover:text-sky-500" style="font-size: 99px">sentiment_dissatisfied</i></a></div>
  <div class="border border-pink-300 bg-gray-700/50 w-44"><a class="text-pink-300" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> <i class="material-icons  hover:text-sky-500" style="font-size: 99px">accessibility</i></a></div>
  <div class="border border-pink-400 bg-gray-600/60 w-44"><a class="text-pink-400" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> <i class="material-icons  hover:text-sky-500" style="font-size: 99px">sentiment_neutral</i></a></div>
  <div class="border border-pink-500 bg-gray-500/70 w-44"><a class="text-pink-500" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> <i class="material-icons  hover:text-sky-500" style="font-size: 99px">sentiment_satisfied</i></a></div>
  <div class="border border-pink-600 bg-gray-400/80 w-44"><a class="text-pink-600" href="https://allostasissy.studio"  target="_blank" rel="noopener noreferrer"> <i class="material-icons  hover:text-sky-500" style="font-size: 99px">sentiment_very_satisfied</i></a></div>
</center>
</template>
