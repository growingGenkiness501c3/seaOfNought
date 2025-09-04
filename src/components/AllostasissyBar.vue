<script setup lang="ts">
import hueBar from "@/components/color/hueBar.vue"
import hsl60Bar from "@/components/color/hsl60Bar.vue"

defineOptions({
  name: "AllostasissyBar"
});
</script>
<template>
  <div>
<!-- Make sure you’ve loaded Material Icons (the legacy set you’re using with <i class="material-icons">) -->
<!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->

<table class="table-auto border-collapse text-center">
  <tbody>
    <tr>
      <!-- 1 -->
      <td class="align-top p-1">
        <a
          href="https://allostasissy.studio"
          target="_blank" rel="noopener noreferrer"
          class="block w-[5.5rem] h-[5.5rem] rounded-md border border-pink-50 bg-gray-950/50
                 flex items-center justify-center hover:text-sky-500"
        >
          <i class="material-icons text-[111px] leading-none hue060">mood_bad</i>
        </a>
      </td>

      <!-- 2 -->
      <td class="align-top p-1">
        <a
          href="https://www.growinggenkiness.me"
          target="_blank" rel="noopener noreferrer"
          class="block w-[5.5rem] h-[5.5rem] rounded-md border border-pink-100 bg-gray-950/50
                 flex items-center justify-center hover:text-sky-500 hue030"
        >
          <i class="material-icons text-[55px] leading-none">sentiment_very_dissatisfied</i>
        </a>
      </td>

      <!-- 3 (placeholder link fixed) -->
      <td class="align-top p-1">
        <a
          href="#"
          class="block w-[5.5rem] h-[5.5rem] rounded-md border border-pink-200 bg-gray-950/50
                 flex items-center justify-center hover:text-sky-500 hue330"
          aria-label="Sentiment dissatisfied (no link yet)"
        >
          <i class="material-icons text-[55px] leading-none">sentiment_dissatisfied</i>
        </a>
      </td>

      <!-- 4 -->
      <td class="align-top p-1">
        <a
          href="http://localhost:5173/"
          target="_blank" rel="noopener noreferrer"
          class="block w-[5.5rem] h-[5.5rem] rounded-md border border-pink-300 bg-gray-950/50
                 flex items-center justify-center hover:text-sky-500 hue270"
        >
          <i class="material-icons text-[55px] leading-none">accessibility</i>
        </a>
      </td>

      <!-- 5 -->
      <td class="align-top p-1">
        <a
          href="https://voice.google.com/u/0/messages?itemId=t.%2B19719300325"
          target="_blank" rel="noopener noreferrer"
          class="block w-[5.5rem] h-[5.5rem] rounded-md border border-pink-400 bg-gray-950/50
                 flex items-center justify-center hover:text-sky-500 hue210"
        >
          <i class="material-icons text-[55px] leading-none">sentiment_neutral</i>
        </a>
      </td>

      <!-- 6 -->
      <td class="align-top p-1">
        <a
          href="http://clu/"
          target="_blank" rel="noopener noreferrer"
          class="block w-[5.5rem] h-[5.5rem] rounded-md border border-pink-500 bg-gray-950/50
                 flex items-center justify-center hover:text-sky-500 hue150"
        >
          <i class="material-icons text-[55px] leading-none">sentiment_satisfied</i>
        </a>
      </td>

      <!-- 7 -->
      <td class="align-top p-1">
        <a
          href="https://en.wikiversity.org/wiki/User:VeronicaJeanAnderson"
          target="_blank" rel="noopener noreferrer"
          class="block w-[5.5rem] h-[5.5rem] rounded-md border border-pink-600 bg-gray-950/50
                 flex items-center justify-center hover:text-sky-500 hue120"
        >
          <i class="material-icons text-[55px] leading-none">sentiment_very_satisfied</i>
        </a>
      </td>
    </tr>

    <!-- Row 2 labels -->
    <tr class="text-xs">
      <td class="p-1">
        <div class="w-[5.5rem] rounded-md border border-pink-50 bg-gray-950/80 py-1">allostasissy.studio</div>
      </td>
      <td class="p-1">
        <div class="w-[5.5rem] rounded-md border border-pink-100 bg-gray-900/70 py-1">growinggenkiness.me</div>
      </td>
      <td class="p-1">
        <div class="w-[5.5rem] rounded-md border border-pink-200 bg-gray-800/60 py-1">&nbsp;</div>
      </td>
      <td class="p-1">
        <div class="w-[5.5rem] rounded-md border border-pink-300 bg-gray-700/50 py-1">localhost:5173</div>
      </td>
      <td class="p-1">
        <div class="w-[5.5rem] rounded-md border border-pink-400 bg-gray-600/60 py-1">voice.google.com</div>
      </td>
      <td class="p-1">
        <div class="w-[5.5rem] rounded-md border border-pink-500 bg-gray-500/70 py-1">clu</div>
      </td>
      <td class="p-1">
        <div class="w-[5.5rem] rounded-md border border-pink-600 bg-gray-400/80 py-1">wikiversity</div>
      </td>
    </tr>
  </tbody>
</table>

<!-- Hue legend -->
<table class="table-auto border-collapse text-[11px] alumni-sans-pinstripe-regular text-center mt-3 w-full">
  <tbody>
    <tr>
      <td class="w-[8.33%] p-1"><div class="border rounded hue060 orbitron py-1">hue<br>60°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue030 orbitron py-1">hue<br>30°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue000 orbitron py-1">hue<br>0°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue330 orbitron py-1">hue 330°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue300 orbitron py-1">hue 300°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue270 orbitron py-1">hue 270°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue240 orbitron py-1">hue 240°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue210 orbitron py-1">hue 210°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue180 orbitron py-1">hue 180°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue150 orbitron py-1">hue 150°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue120 orbitron py-1">hue 120°</div></td>
      <td class="w-[8.33%] p-1"><div class="border rounded hue090 orbitron py-1">hue<br>90°</div></td>
    </tr>
  </tbody>
</table>
</div>
</template>