<script setup lang="ts">
import ReRouteRed from "@/components/ReComp/ReRouteRed.vue";
import DataDrivenRoutingByHue from "@/components/ReComp/DataDrivenRoutingByHue.vue";
import DataDrivenRoutingByArrow from "@/components/ReComp/DataDrivenRoutingByArrow.vue";
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
<!-- https://www.youtube.com/watch?v=KOZ8RC70lS4&t=26s  https://www.youtube.com/watch?v=KOZ8RC70lS4&t=26s
-->
  <backgroundImages>
    <Header />
    <DataDrivenRoutingByArrow />
    <hueBar />
    <DataDrivenRoutingByHue />
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
          <div class="div19 bg-sky-300/50"><fontBar /><zer04 /></div>
          <div class="div20 bg-sky-400/40"><ReRouteRed /><br><br>
          </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
grid-template-rows: .5fr repeat(3, 1fr) 2fr;
grid-column-gap: 11px;
grid-row-gap: 11px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; display: grid; place-items: center;}
.div2 { grid-area: 1 / 2 / 2 / 3; display: grid; place-items: center;}
.div3 { grid-area: 1 / 3 / 2 / 4; display: grid; place-items: center;}
.div4 { grid-area: 1 / 4 / 2 / 5; display: grid; place-items: center;}
.div5 { grid-area: 1 / 5 / 2 / 6; display: grid; place-items: center;}
.div6 { grid-area: 1 / 6 / 2 / 7; display: grid; place-items: center;}
.div7 { grid-area: 1 / 7 / 2 / 8; display: grid; place-items: center;}
.div8 { grid-area: 1 / 8 / 2 / 9; display: grid; place-items: center;}
.div9 { grid-area: 1 / 9 / 2 / 10; display: grid; place-items: center;}
.div10 { grid-area: 1 / 10 / 2 / 11; display: grid; place-items: center;}
.div11 { grid-area: 1 / 11 / 2 / 12; display: grid; place-items: center;}
.div12 { grid-area: 1 / 12 / 2 / 13; display: grid; place-items: center;}
.div13 { grid-area: 1 / 13 / 2 / 14; display: grid; place-items: center;}
.div14 { grid-area: 1 / 14 / 2 / 15; display: grid; place-items: center;}
.div15 { grid-area: 1 / 15 / 2 / 16; display: grid; place-items: center;}
.div16 { grid-area: 2 / 1 / 3 / 2; display: grid; place-items: center;}
.div17 { grid-area: 3 / 1 / 4 / 2; display: grid; place-items: center;}
.div18 { grid-area: 4 / 1 / 5 / 2; display: grid; place-items: center;}
.div19 { height: 222px; grid-area: 5 / 1 / 6 / 16; display: grid; place-items: center;}
.div20 { grid-area: 2 / 2 / 5 / 16; display: grid; place-items: center;}
</style>
