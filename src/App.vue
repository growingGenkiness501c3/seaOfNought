<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Flag from '@/components/Flag.vue'
import oO0 from '@/components/oO0.vue'
import zer0Oo from '@/components/zer0Oo.vue'

import skyTop from '@/components/skyTop.vue'
import skyBottom from '@/components/skyBottom.vue'
import rainbowDots from '@/components/rainbowDots.vue'

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
    <br>
    <center><pre>https://en.wikipedia.org/wiki/File:Wanna_Work_Together%3F_with_subtitles_-_Creative_Commons.ogv</pre>
    <dfn>interesting to see oklch being used so much ....&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</dfn>
    &nbsp;&nbsp;&nbsp;<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meleneth: kitemite kudasai!</sub><br>
    <hr>
    <br><oO0 /><zer0Oo />
    <br>
    <hr>
    <span class="font-mea-culpa text-[33px]"> ∅© </span>
    <span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;<br /></span>
    <span class="mea-culpa-regular" style="font-size: 22px">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with Vite + Vue & tailwindcss &nbsp;
      </span><br>
      <skyTop /><skyTop />
      <nav class="flex flex-wrap items-center justify-center">
        <RouterLink class="p-2.5; text-sky-100" to="/">| 🐦‍ Crow's Nest 🏠 |</RouterLink>
        <RouterLink class="p-2.5; text-sky-200" to="/forecastle">| 🏰 Forecastle |</RouterLink>
        <RouterLink class="p-2.5; text-sky-300" to="/anchor">| ⚓ Anchor |</RouterLink>
        <RouterLink class="p-2.5; text-sky-200" to="/vocabulary">| 📖 vocabulary |</RouterLink>   
        <routerLink class="p-2.5; text-sky-100" to="/library">| 🔗📚🗂️📁🧾🧠 Library |</routerLink>
      </nav>
    </center>
    <center><Clock /></center>

    🔹App.vue<br>
    <RouterView />
    🔹App.vue
    
    <br>
    🖐️
    <HelloWorld msg="Vite HelloWorld Vue" />🖐️

    <center><Flag>Let's manifest some tests! !! !!!</Flag><br></center>
    <center><skyBottom /><skyBottom /></center>
    <center><Flag>ABCDEFGHIJKLM01234567890NOPQRSTUVWXYZ</Flag></center>
    <center><Flag>abcdefghijklmnopqrstuvwxyz</Flag></center>
    <center><rainbowDots /></center>

</template>

