<script setup lang="ts">
import ReRouteRed from "@/components/ReComp/ReRouteRed.vue";
import hueBar from "@/components/color/hueBar.vue";
import backgroundImages from "@/components/color/backgroundImages.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import fontBar from "@/components/fontBar.vue";

import skyTop from "@/components/color/skyTop.vue";
import skyBottom from "@/components/color/skyBottom.vue";
import hsl60Bar from "@/components/color/hsl60Bar.vue";
import zer04 from "@/components/zer0/zer04.vue";
import zer05 from "@/components/zer0/zer05.vue";
import zer06 from "@/components/zer0/zer06.vue";
import IkigaiBar from "@/components/IkigaiBar.vue";
import AllostasissyBar from "@/components/AllostasissyBar.vue";
import Ikigai from "./components/Ikigai.vue";
</script>

<template>
  <backgroundImages>
    <Header />
    <hueBar />
    <zer06 />
    <div class="parent">
          <div class="div1 bg-[#00000080]">
            <img src="/unicorn-inverted.png" class="transform scale-x-[-1] h-[111px] object-cover rounded-md" alt="Unicorn inverted" />
          </div>
          <div class="div2 bg-[#11111180]">
            <img src="/color/YMC-Subtractive.png" class="h-[111px] object-cover rounded-md" alt="YMC Subtractive" />
          </div>
          <div class="div3 bg-[#22222280]">
            <img src="/color/RGB-Additive.png" class="h-[111px] object-cover rounded-md" alt="RGB Additive" />
          </div>
          <div class="div4 bg-[#33333380]">
            <img src="/color/YRB-Paint.png" class="h-[111px] object-cover rounded-md" alt="YRB Paint" />
          </div>
          <div class="div5 bg-[#44444480]">
            <img src="/color/BWG circles.png" class="h-[111px] object-cover rounded-md rotate-180" alt="BWG Circles" />
          </div>
          <div class="div6 bg-[#55555580]"></div>
          <div class="div7 bg-[#66666680]"></div>
          <div class="div8 bg-[#77777780]"></div>
          <div class="div9 bg-[#99999980]"></div>
          <div class="div10 bg-[#aaaaaa80]"></div>
          <div class="div11 bg-[#bbbbbb80]"></div>
          <div class="div12 bg-[#cccccc80]"></div>
          <div class="div13 bg-[#dddddd80]"></div>
          <div class="div14 bg-[#eeeeee80]"></div>
          <div class="div15 bg-[#ffffff80]"></div>
          <div class="div16 bg-sky-600/50">16</div>
          <div class="div17 bg-sky-200/50">17 </div>
          <div class="div18 bg-sky-500/50">18</div>
          <div class="div19 bg-sky-300/50"><fontBar /></div>
          <div class="div20 bg-sky-400/40"><ReRouteRed />
          </div>
    </div>
    <hr><br><hr><br><hr><br><hr><br>
<zer04 />
<Footer />
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


.parent {
display: grid;
grid-template-columns: repeat(15, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 11px;
grid-row-gap: 11px;
}
/*
  display: flex;
  align-items: center;   /* vertical centering 
  justify-content: center; /* horizontal centering 
}
grid-area: 1 / 2 / 2 / 3; 
*/
.div1 { height: 222px; grid-area: 1 / 1 / 2 / 2; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div2 { height: 222px; grid-area: 1 / 2 / 2 / 3; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div3 { height: 222px; grid-area: 1 / 3 / 2 / 4; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div4 { height: 222px; grid-area: 1 / 4 / 2 / 5; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div5 { height: 222px; grid-area: 1 / 5 / 2 / 6; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div6 { height: 222px; grid-area: 1 / 6 / 2 / 7; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div7 { height: 222px; grid-area: 1 / 7 / 2 / 8; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div8 { height: 222px; grid-area: 1 / 8 / 2 / 9; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div9 { height: 222px; grid-area: 1 / 9 / 2 / 10; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div10 { height: 222px; grid-area: 1 / 10 / 2 / 11; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div11 { height: 222px; grid-area: 1 / 11 / 2 / 12; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div12 { height: 222px; grid-area: 1 / 12 / 2 / 13; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div13 { height: 222px; grid-area: 1 / 13 / 2 / 14; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div14 { height: 222px; grid-area: 1 / 14 / 2 / 15; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div15 { height: 222px; grid-area: 1 / 15 / 2 / 16; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div16 { height: 555px; grid-area: 2 / 1 / 3 / 2; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div17 { height: 111px; grid-area: 3 / 1 / 4 / 2; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div18 { height: 555px; grid-area: 4 / 1 / 5 / 2; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div19 { height: 111px; grid-area: 5 / 1 / 6 / 16; display: grid; place-items: center; /* centers vertically + horizontally */ }
.div20 { height: 555px; grid-area: 2 / 2 / 5 / 16; display: grid; place-items: center; /* centers vertically + horizontally */ }

</style>


<!--


    <div class="parent">
      <!-- div1: row 1, col 1-2 --><!--
      <div class="div1 bg-indigo-950/50"><!--
        <div class="flex justify-center items-center gap-4 p-3">
        </div>
      </div>

      <!-- div3: row 1, col 3 (kept simple & content-sized) --><!--
      <div class="div3 bg-indigo-800/50">
        <div class="grid grid-cols-12 place-items-center p-4">
          <div class="col-span-12 flex items-center justify-center">
            <IkigaiBar />
          </div>
        </div>
      </div>

      <!-- div2: row 1, col 4-5 (grid-only, last col fits content) --><!--
      <div class="div2 bg-indigo-100/50">
        <div class="grid [grid-template-columns:.5fr_1fr_max-content] place-items-center gap-4 p-4">
          <AllostasissyBar />
          <img
            src="/Allostatic_load_sketch.svg"
            class="max-w-full h-auto object-contain"
            alt="Allostatic load sketch"
          />
          <div class="transform scale-x-[-1]">
            <img src="/unicorn.png" class="w-[111px] h-[111px] object-contain" alt="Unicorn" />
          </div>
        </div>
      </div>

      <!-- div6: main center stack (content-sized; no fixed heights) --><!--
      <div class="div6 bg-indigo-500/50">
        <div class="flex flex-col items-center text-center gap-4 p-4">
          <div class="text-xl">
            <skyTop />
          </div>

          <div class="text-9xl">
            <span>ن🖵無</span>
          </div>

          <RouterView />

          <div class="text-9xl">
            <span>無🖵ن</span>
          </div>

          <div class="text-9xl"><skyTop /></div>
          <div class="text-6xl"><skyTop /></div>
          <div class="text-4xl"><skyTop /></div>
          <div class="text-xl"><skyTop /></div>
          <div class="text-sm"><skyTop /></div>

          <fontBar />
          <Footer />
        </div>
      </div>

      <!-- div4: left rail; keep to its own content only --><!--
      <div class="div4 bg-slate-700/50">
        <div class="flex flex-col gap-6 p-4">
          <zer06 />
          <div class="border-t border-white/20"></div>
          <zer05 />
          <div class="border-t border-white/20"></div>
          <zer04 />
        </div>
      </div>

      <!-- div5: footer banner-ish; still content-sized --><!--
      <div class="div5 bg-indigo-600/50">
        <div class="orbitron text-[222px] leading-none text-center p-2">Meleneth</div>
      </div>
    </div>
  </backgroundImages>

  <!-- Extras outside backgroundImages (kept, but tightened) --><!--
  <div class="my-8 space-y-6">
    <div class="border-t border-white/20"></div>
    <zer05 />
    <div class="border-t border-white/20"></div>
    <zer04 />
  </div>
</template>

<style>
/* ==== GRID LAYOUT: content-sized rows ==== */
.parent {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  /* Rows hug content: */
  grid-template-rows: auto;
  grid-auto-rows: auto;

  grid-column-gap: 0;
  grid-row-gap: 0;
}

/* Original placements preserved but without forcing tall spans */
.div1 { grid-area: 1 / 1 / 2 / 3; } /* row 1, cols 1-2 */
.div3 { grid-area: 1 / 3 / 2 / 4; } /* row 1, col 3 */
.div2 { grid-area: 1 / 4 / 2 / 6; } /* row 1, cols 4-5 */

/* Keep these from spanning multiple rows so they hug content */
.div4 { grid-area: 2 / 1 / 3 / 2; } /* left rail, one row */
.div6 { grid-area: 2 / 2 / 3 / 6; } /* main center, one row */
.div5 { grid-area: 3 / 2 / 4 / 6; } /* banner under main */

/* ==== Type & utility classes you had ==== */
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
  font-weight: 400; /* replaced <weight> placeholder */
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
  font-weight: 400; /* replaced <weight> placeholder */
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

/* Hue classes */
.hue090 { color: hsl(90, 50%, 70%); }
.hue060 { color: hsl(60, 50%, 70%); }
.hue030 { color: hsl(30, 50%, 70%); }
.hue000 { color: hsl(0, 50%, 70%); }
.hue330 { color: hsl(330, 50%, 70%); }
.hue300 { color: hsl(300, 50%, 70%); }
.hue270 { color: hsl(270, 50%, 70%); }
.hue240 { color: hsl(240, 50%, 70%); }
.hue210 { color: hsl(210, 50%, 70%); }
.hue180 { color: hsl(180, 50%, 70%); }
.hue150 { color: hsl(150, 50%, 70%); }
.hue120 { color: hsl(120, 50%, 70%); }
.huewhite { color: hsl(0, 0%, 100%); }
.huegræy { color: hsl(0, 0%, 50%); }
.hueblack { color: hsl(0, 0%, 0%); }

h1 { color: hsl(270, 50%, 70%); }
h2 { color: hsl(240, 50%, 70%); }
h3 { color: hsl(210, 50%, 70%); }
h4 { color: hsl(180, 50%, 70%); }
h5 { color: hsl(150, 50%, 70%); }
h6 { color: hsl(120, 50%, 70%); }
</style>



<!--
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"

import skyTop from "@/components/color/skyTop.vue"
import skyBottom from "@/components/color/skyBottom.vue"
import backgroundImages from "@/components/color/backgroundImages.vue"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import hueBar from "@/components/color/hueBar.vue"
import hsl60Bar from "@/components/color/hsl60Bar.vue"

import zer04 from "@/components/zer0/zer04.vue"
import zer05 from "@/components/zer0/zer05.vue"
import zer06 from "@/components/zer0/zer06.vue"

import fontBar from "@/components/fontBar.vue"

import IkigaiBar from "@/components/IkigaiBar.vue"
import AllostasissyBar from "@/components/AllostasissyBar.vue"
import Ikigai from "./components/Ikigai.vue"

</script>
<template>


<backgroundImages>
<br><br><br>
  <Header />
  <hueBar /> 
<div class="parent">
<div class="div1 bg-indigo-950/50">
  <div class="flex justify-center items-center gap-4 h-48">
    <div class="transform scale-x-[-1]">
      <img src="/unicorn-inverted.png" class="h-33 object-cover rounded-md" />
    </div>
    <div>
      <img src="/color/YMC-Subtractive.png" class="h-33 object-cover rounded-md" />
    </div>
    <div>
      <img src="/color/RGB-Additive.png" class="h-33 object-cover rounded-md" />
    </div>
    <div>
      <img src="/color/YRB-Paint.png" class="h-33 object-cover rounded-md" />
    </div>
    <div>
      <img src="/color/BWG circles.png" class="h-33 object-cover rounded-md rotate-180" />
    </div>
    <zer06 />
    
  </div>



</div>
<!--
<div class="div2 bg-indigo-100/50">
  <div class="grid grid-cols-[3fr_2fr_1fr] h-33 flex items-center justify-center">
      <AllostasissyBar />
      <img src="/Allostatic_load_sketch.svg" class="" alt="Description of image" />
      <div class="transform scale-x-[-1]"><img src="/unicorn.png" class="h-55 w-55" /></div>
  </div>
</div>
--><!--
<div class="div2 bg-indigo-100/50">
  <div class="grid [grid-template-columns:3fr_2fr_max-content] place-items-center gap-4 h-33">
    <AllostasissyBar />
    <img src="/Allostatic_load_sketch.svg" class="max-w-full h-auto object-contain" alt="Description of image" />
    <div class="transform scale-x-[-1]">
      <img src="/unicorn.png" class="w-[55px] h-[55px] object-contain" alt="Unicorn" />
    </div>
  </div>
</div>


<div class="div3 bg-indigo-800/50">
          <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] h-33 flex items-center justify-center">
            <div class="flex items-center justify-center p-5">
              <IkigaiBar />
            </div>
          </div> 

</div>
<div class="div4 bg-slate-700/50">
    <zer06 />
    <br><hr><br>
    <zer05 />
    <br><hr><br>
    <zer04 />
</div>
<div class="div5 bg-indigo-600/50">
  <div class="orbitron text-[222px]"> Meleneth</div>  
</div>
<div class="div6 bg-indigo-500/50">      
  <div class="text-xl"><skyTop /><br></div>
    <center>
      <span  class="text-9xl">ن🖵無 </span><br>
        <RouterView />
      <span  class="text-9xl">無🖵ن </span><br>
        <div class="text-9xl"><skyTop /></div>
        <div class="text-6xl"><skyTop /></div>
        <div class="text-4xl"><skyTop /></div>
        <div class="text-xl"><skyTop /></div>
        <div class="text-sm"><skyTop /></div>
      <br><br>

    </center>
  </div>
</div>
</backgroundImages>
          <br><hr><br>
          <zer05 />
          <br><hr><br>
          <zer04 />


</template>

-->