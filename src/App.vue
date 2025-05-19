<script setup lang="ts">
import Clock from "@/components/Clock.vue";
import seaOfNoughtBar from "@/components/seaOfNoughtBar.vue";
import seaOfNoughtNavigationBar from "@/components/seaOfNoughtNavigationBar.vue";
import seaOfNoughtShipsLog from "@/components/seaOfNoughtShipsLog.vue";
import skyMini from "@/components/skyMini.vue";
import skyTop from "@/components/skyTop.vue";
import skyBottom from "@/components/skyBottom.vue";
import wordBar from "@/components/wordBar.vue";
import yearsBar from "@/components/yearsBar.vue";

import { RouterLink, RouterView } from "vue-router";
</script>
<template>
<center>
  <a href="http://localhost:5173/aardvarkVue" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🐗🦡🦔</a>
  <skyMini /><br>
  <wordBar /><br>
  <seaOfNoughtNavigationBar />
  <br><br><br>
</center>
<Clock />
  <yearsBar /><br><br>


<center class="text-xl"><skyTop /><skyTop /><br>
<span  class="text-4xl">🖵 </span><br>
<RouterView /><br>
<span  class="text-4xl">🖵 </span><br>
<span class="text-2xl"><skyBottom /><skyBottom /></span>
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
