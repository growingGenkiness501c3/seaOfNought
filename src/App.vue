<script setup lang="ts">
import skyTop from "@/components/color/skyTop.vue"
import skyBottom from "@/components/color/skyBottom.vue"
import backgroundImages from "@/components/color/backgroundImages.vue"
import clock from "@/components/Clock.vue"
import routerBar from "@/components/routerBar.vue"
import { RouterLink, RouterView } from "vue-router"
import TailwindColorNameBar from "@/components/color/tailwindColorNameBar.vue"
import Footer from "@/components/Footer.vue"
import hueBar from "@/components/color/hueBar.vue"
import Header from "@/components/Header.vue"
import leftBar from "@/components/leftBar.vue"
import zer01 from "@/components/zer01.vue"
import zer02 from "@/components/zer02.vue"
import zer03 from "@/components/zer03.vue"
import zer04 from "@/components/zer04.vue"
import zer05 from "@/components/zer05.vue"
import zer06 from "@/components/zer06.vue"
import zer07 from "@/components/zer07.vue"
import LargeClock from "@/components/LargeClock.vue"
import Ikigai from "@/components/Ikigai.vue"
import IkigaiBar from "@/components/IkigaiBar.vue"
import AllostasissyBar from "@/components/AllostasissyBar.vue"
import fontBar from "@/components/fontBar.vue"
import WIPBar from "@/components/verttailwindbar/WIPBar.vue"
</script>
<template>
<backgroundImages>
<Header />
<p>thou sayeth</p>
<div class="grid grid-cols-[3fr_1fr_3fr] h-32">
  <div class="flex items-center justify-center border border-gray-950 bg-gray-950/50">
      
    
    <clock />
  </div>
  <div class="flex items-center justify-center border border-gray-950 bg-sky-950/50">
    <div class="grid grid-rows-[1fr_1fr] border border-gray-400">
      <div><IkigaiBar /></div>
      <div><AllostasissyBar /></div>
    </div>
  </div>
  <div class="flex items-center justify-center border border-gray-950 bg-gray-950/50">
    <img src="/allostasis.png" class="h-88" alt="Description of image" />

  </div>
</div>
<br><br><br><br><br><br><br><br>

<WIPBar /><br><br><br>
<hueBar />
<div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_4fr] gap-1">
  <div class="bg-gray-950/75 p-1 w-22">
    <zer02 />
  </div>
  <div class="bg-gray-950/75 p-1 w-180">
    <zer03 />
  </div>
  <div class="bg-gray-950/75 p-1 w-82">
    <zer04 />
  </div>
  <div class="bg-gray-950/75 p-1 w-99">
    <zer06 />
    <zer05 />
    <center><Footer /></center>     
  </div>
  <div class="bg-sky-950/50 p-2 w-666">
    <center><LargeClock /></center>
    <center>
      <div class="text-xl"><skyTop /><skyTop /><br></div>
        <span  class="text-4xl">ن🖵無 </span><br>
          <RouterView />
        <span  class="text-4xl">無🖵ن </span><br>
        
        <span class="text-2xl"><skyBottom /><skyBottom /></span> 

        <center><Footer /></center>        
      <span class="text-2xl"><skyBottom /><skyBottom /></span> 
    </center>
  </div>
</div>

<center>
<skyTop /><skyTop /><br>
<div class="text-9xl"><skyTop /><skyTop /><br></div>
<skyTop /><skyTop /><br>

</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</backgroundImages>
<br>
https://oregon.public.law/statutes/ors_419B.050
<br>
https://oregon.public.law/statutes/ors_419B.020
<br>
https://oregon.public.law/statutes/ors_419b.005?utm_source=chatgpt.com
<br>
https://kick.com/
<br>
https://www.twitch.tv/portlandandyirl
<br>
https://materializecss.com/icons.html
<br>
https://oregon.public.law/statutes/ors_419b.005
<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<fontBar />
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
.anonymous-pro-regular {
  font-family: "Anonymous Pro", monospace;
  font-weight: 400;
  font-style: normal;
}
.anonymous-pro-bold {
  font-family: "Anonymous Pro", monospace;
  font-weight: 700;
  font-style: normal;
}
.anonymous-pro-regular-italic {
  font-family: "Anonymous Pro", monospace;
  font-weight: 400;
  font-style: italic;
}
.anonymous-pro-bold-italic {
  font-family: "Anonymous Pro", monospace;
  font-weight: 700;
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
.oswald {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
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
.updock-regular {
  font-family: "Updock", cursive;
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
