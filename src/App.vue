<script setup lang="ts">
import skyTop from "@/components/color/skyTop.vue";
import skyBottom from "@/components/color/skyBottom.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import backgroundImages from "@/components/color/backgroundImages.vue";
import clock from "@/components/Clock.vue";
import routerBar from "@/components/routerBar.vue";
import hsl60Bar from "@/components/color/hsl60Bar.vue";
import { RouterLink, RouterView } from "vue-router";
import TailwindColorNameBar from "./components/color/tailwindColorNameBar.vue";
</script>
<template>
<backgroundImages>
<div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5">
  <div class="border border-sky-300" >
    <img src="/color/60 hsl wheel colors 1k2 opacity 100.png" class="w-100 object-cover rounded-md" />
  </div>
  <div class="border border-sky-300">
    <img src="/color/30 hsl wheel-0red 1k.png" class="w-100 object-cover rounded-md" />
  </div>
  <div class="border border-sky-300">
    <img src="/color/30 hsl wheel-0red 100.png" class="w-100 object-cover rounded-md" />
  </div>
  <div class="border border-sky-300"><clock /></div>
</div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


<hsl60Bar />


  <center>
    
              <NavigationBar />  
  </center>
<div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5">
  <div class="border border-sky-300" ><br><br><br><br><br><br><br><br></div>
  <div class="border border-sky-300"></div>
  <div class="border border-sky-300"></div>
</div>
<br><br><br><br><br><br><br><br><br><br><br>
  <br><hr><br><hr><br><hr><br><hr><br><hr><br><br><br><br><hr><br><hr><br>  <br><br><hr><br><hr><br>  <br><br><hr><br><hr><br>

<div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5">
  <div class="bg-yellow-200 cursor-pointer hover:opacity-50 text-violet-800 text-center flex items-center justify-center text-5xl" ><br>🧬<br>blood sugar<br><br></div>
  <div class="bg-rose-200 cursor-pointer hover:opacity-50 text-violet-800 text-center flex items-center justify-center text-5xl" >💉<br>insulin</div>
  <div class="bg-indigo-200 cursor-pointer hover:opacity-50 text-violet-800 text-center flex items-center justify-center text-5xl" >🔵<br>㏒</div>
</div>

            <br><br><hr><br><hr><br>
  <center>
            <skyTop /><skyTop /><skyTop /><skyTop /><br>
  </center>
  <center class="text-xl"><skyTop /><skyTop /><br>

            <!--<img src="/color/30 hsl wheel-0red 1k.png" alt="Example" class="w-1000 object-cover rounded-md" />-->
            <!--<img src="/color/30 hsl wheel-0red 10k.png" alt="Example" class="w-10000 object-cover rounded-md" />
            -->
              <span  class="text-4xl">ن🖵無 </span><br>
  <RouterView />
            <span  class="text-4xl">無🖵ن </span><br>
            <span class="text-2xl"><skyBottom /><skyBottom /></span> 
  </center>
            <br><br>
  <center>
  <routerBar />
  <br><br>
  <TailwindColorNameBar />
  </center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</backgroundImages>



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
