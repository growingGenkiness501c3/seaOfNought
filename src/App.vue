<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Flag from '@/components/Flag.vue'
import whiteFlag from '@/components/whiteFlag.vue'
import blackFlag from '@/components/blackFlag.vue'
import yellowFlag from '@/components/yellowFlag.vue'
import magentaFlag from '@/components/magentaFlag.vue'
import cyanFlag from '@/components/cyanFlag.vue'


import Clock from '@/components/Clock.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>
<style>
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
  font-variation-settings:
    "wdth" 100;
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
</style>
<template>
  <dfn>interesting to see oklch being used so much in this project....</dfn>
  &nbsp;&nbsp;&nbsp;<sub>Meleneth: kitemite kudasai!</sub><br>
  <whiteFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;</whiteFlag><blackFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;</blackFlag>
<yellowFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;</yellowFlag>
<magentaFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;</magentaFlag>
<cyanFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;</cyanFlag>
<Flag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;</Flag><br>

  <hr>
    <header class="text-center">
    <span class="font-mea-culpa text-[33px]"> ∅© </span>
    <span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;<br /></span>
    <span class="mea-culpa-regular" style="font-size: 22px">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with Vite + Vue & tailwindcss &nbsp;<span style="font-size: 11px">⚓</span>
      </span>
      <br />
      <span class="text-sky-50">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-100">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-200">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-300">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-400">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-500">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-600">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-700">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-800">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-900">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-950">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-900">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-800">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-700">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-600">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-500">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-400">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-300">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-200">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-100">&nbsp;⬤&nbsp;</span>
      <span class="text-sky-50">&nbsp;⬤&nbsp;</span>
      <nav class="flex flex-wrap items-center justify-center">
        <RouterLink class="p-2.5; text-sky-100" to="/">| 🐦‍ Crow's Nest |</RouterLink>
        <RouterLink class="p-2.5; text-sky-200" to="/forecastle">| 🏰 Forecastle |</RouterLink>
        <RouterLink class="p-2.5; text-sky-200" to="/anchor">| ⚓ Anchor |</RouterLink>
        <RouterLink class="p-2.5; text-sky-100" to="/vocabulary">| 📖 vocabulary |</RouterLink>        
      </nav>
    </header>
    <center><Clock /></center>
    <RouterView />
    <br>
    <Flag>abcdefghijklmnopqrstuvwxyz</Flag>
    <HelloWorld msg="Vite ooo Vue" />
    <Flag>Let's manifest some tests! !! !!!</Flag><br>
    <center><span class="text-sky-950">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-900">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-800">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-700">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-600">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-500">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-400">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-300">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-200">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-100">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-50">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-100">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-200">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-300">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-400">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-500">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-600">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-700">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-800">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-900">&nbsp;⬤&nbsp;</span>
    <span class="text-sky-950">&nbsp;⬤&nbsp;</span>
    </center><br />
    <center><Flag>01234567890</Flag></center><br />
    <center><Flag>ABCDEFGHIJKLM</Flag></center><br />
    <center><Flag>NOPQRSTUVWXYZ</Flag></center>
</template>

