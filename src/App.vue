<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Flag from '@/components/Flag.vue'
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
</style>
<template>
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
        <RouterLink class="p-2.5; text-sky-100" to="/">| Crow's Nest |</RouterLink>
        <RouterLink class="p-2.5; text-sky-200" to="/forecastle">| Forecastle |</RouterLink>
        <RouterLink class="p-2.5; text-sky-100" to="/anchor">| Anchor |</RouterLink>
      </nav>
    </header>
    <Clock />
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

