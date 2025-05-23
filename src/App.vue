<script setup lang="ts">
import skyTop from "@/components/color/skyTop.vue";
import skyBottom from "@/components/color/skyBottom.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import hslWheel from "@/components/hslWheel.vue";
import clock from "@/components/Clock.vue";
import routerBar from "@/components/routerBar.vue";
import { RouterLink, RouterView } from "vue-router";
import TailwindColorNameBar from "./components/color/tailwindColorNameBar.vue";
</script>
<template>
<hslWheel>
  <center>
    <!--
    <div class="grid grid-cols-6 gap-1 p-1 text-[22px] text-center">
      <img src="/color/30 hsl wheel-0red 10k.png" alt="Example" class="w-100 object-cover rounded-md" />
      <div><br><br><br><clock /><a href="http://localhost:5173/aardvarkVue" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🐗🦡🦔</a></div>
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - yellow.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - magenta.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - cyan.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/wizardHat.png" alt="Example" class="h-120 object-cover rounded-md" />
    </div>
    -->
    <div class="grid grid-cols-60 gap-1 p-1 text-[22px] text-center">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
      <div>32</div>
      <div>33</div>
      <div>34</div>
      <div>35</div>
      <div>36</div>
      <div>37</div>
      <div>38</div>
      <div>39</div>
      <div>40</div>
      <div>41</div>
      <div>42</div>
      <div>43</div>
      <div>44</div>
      <div>45</div>
      <div>46</div>
      <div>47</div>
      <div>48</div>
      <div>49</div>
      <div>50</div>
      <div>51</div>
      <div>52</div>
      <div>53</div>
      <div>54</div>
      <div>55</div>
      <div>56</div>
      <div>57</div>
      <div>58</div>
      <div>59</div>
      <div>60</div>

    </div>
    <div class="grid grid-cols-60 gap-1 p-1 text-[33px] text-center alumni-sans-pinstripe-regular";>
      <div class="rounded-full border-3 border-[hsl(60,50%,50%,100%)] bg-[hsl(60,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">60</div>
      <div class="rounded-full border-3 border-[hsl(54,50%,50%,100%)] bg-[hsl(54,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">54</div>
      <div class="rounded-full border-3 border-[hsl(48,50%,50%,100%)] bg-[hsl(48,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">48</div>
      <div class="rounded-full border-3 border-[hsl(42,50%,50%,100%)] bg-[hsl(42,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">42</div>
      <div class="rounded-full border-3 border-[hsl(36,50%,50%,100%)] bg-[hsl(36,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">36</div>
      <div class="rounded-full border-3 border-[hsl(30,50%,50%,100%)] bg-[hsl(30,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">30</div>
      <div class="rounded-full border-3 border-[hsl(24,50%,50%,100%)] bg-[hsl(24,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">24</div>
      <div class="rounded-full border-3 border-[hsl(18,50%,50%,100%)] bg-[hsl(18,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">18</div>
      <div class="rounded-full border-3 border-[hsl(12,50%,50%,100%)] bg-[hsl(12,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">12</div>
      <div class="rounded-full border-3 border-[hsl(6,50%,50%,100%)] bg-[hsl(6,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">6</div>
      <div class="rounded-full border-3 border-[hsl(360,50%,50%,100%)] bg-[hsl(360,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">360</div>
      <div class="rounded-full border-3 border-[hsl(354,50%,50%,100%)] bg-[hsl(354,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">354</div>
      <div class="rounded-full border-3 border-[hsl(348,50%,50%,100%)] bg-[hsl(348,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">348</div>
      <div class="rounded-full border-3 border-[hsl(342,50%,50%,100%)] bg-[hsl(342,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">342</div>
      <div class="rounded-full border-3 border-[hsl(336,50%,50%,100%)] bg-[hsl(336,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">336</div>
      <div class="rounded-full border-3 border-[hsl(330,50%,50%,100%)] bg-[hsl(330,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">330</div>
      <div class="rounded-full border-3 border-[hsl(324,50%,50%,100%)] bg-[hsl(324,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">324</div>
      <div class="rounded-full border-3 border-[hsl(318,50%,50%,100%)] bg-[hsl(318,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">318</div>
      <div class="rounded-full border-3 border-[hsl(312,50%,50%,100%)] bg-[hsl(312,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">312</div>
      <div class="rounded-full border-3 border-[hsl(306,50%,50%,100%)] bg-[hsl(306,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">306</div>
      <div class="rounded-full border-3 border-[hsl(300,50%,50%,100%)] bg-[hsl(300,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">300</div>
      <div class="rounded-full border-3 border-[hsl(294,50%,50%,100%)] bg-[hsl(294,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">294</div>
      <div class="rounded-full border-3 border-[hsl(288,50%,50%,100%)] bg-[hsl(288,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">288</div>
      <div class="rounded-full border-3 border-[hsl(282,50%,50%,100%)] bg-[hsl(282,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">282</div>
      <div class="rounded-full border-3 border-[hsl(276,50%,50%,100%)] bg-[hsl(276,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">276</div>
      <div class="rounded-full border-3 border-[hsl(270,50%,50%,100%)] bg-[hsl(270,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">270</div>
      <div class="rounded-full border-3 border-[hsl(264,50%,50%,100%)] bg-[hsl(264,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">264</div>
      <div class="rounded-full border-3 border-[hsl(258,50%,50%,100%)] bg-[hsl(258,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">258</div>
      <div class="rounded-full border-3 border-[hsl(252,50%,50%,100%)] bg-[hsl(252,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">252</div>
      <div class="rounded-full border-3 border-[hsl(246,50%,50%,100%)] bg-[hsl(246,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">246</div>
      <div class="rounded-full border-3 border-[hsl(240,50%,50%,100%)] bg-[hsl(240,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">240</div>
      <div class="rounded-full border-3 border-[hsl(234,50%,50%,100%)] bg-[hsl(234,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">234</div>
      <div class="rounded-full border-3 border-[hsl(228,50%,50%,100%)] bg-[hsl(228,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">228</div>
      <div class="rounded-full border-3 border-[hsl(222,50%,50%,100%)] bg-[hsl(222,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">222</div>
      <div class="rounded-full border-3 border-[hsl(216,50%,50%,100%)] bg-[hsl(216,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">216</div>
      <div class="rounded-full border-3 border-[hsl(210,50%,50%,100%)] bg-[hsl(210,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">210</div>
      <div class="rounded-full border-3 border-[hsl(204,50%,50%,100%)] bg-[hsl(204,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">204</div>
      <div class="rounded-full border-3 border-[hsl(198,50%,50%,100%)] bg-[hsl(198,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">198</div>
      <div class="rounded-full border-3 border-[hsl(192,50%,50%,100%)] bg-[hsl(192,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">192</div>
      <div class="rounded-full border-3 border-[hsl(186,50%,50%,100%)] bg-[hsl(186,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">186</div>
      <div class="rounded-full border-3 border-[hsl(180,50%,50%,100%)] bg-[hsl(180,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">180</div>
      <div class="rounded-full border-3 border-[hsl(174,50%,50%,100%)] bg-[hsl(174,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">174</div>
      <div class="rounded-full border-3 border-[hsl(168,50%,50%,100%)] bg-[hsl(168,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">168</div>
      <div class="rounded-full border-3 border-[hsl(162,50%,50%,100%)] bg-[hsl(162,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">162</div>
      <div class="rounded-full border-3 border-[hsl(156,50%,50%,100%)] bg-[hsl(156,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">156</div>
      <div class="rounded-full border-3 border-[hsl(150,50%,50%,100%)] bg-[hsl(150,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">150</div>
      <div class="rounded-full border-3 border-[hsl(144,50%,50%,100%)] bg-[hsl(144,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">144</div>
      <div class="rounded-full border-3 border-[hsl(138,50%,50%,100%)] bg-[hsl(138,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">138</div>
      <div class="rounded-full border-3 border-[hsl(132,50%,50%,100%)] bg-[hsl(132,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">132</div>
      <div class="rounded-full border-3 border-[hsl(126,50%,50%,100%)] bg-[hsl(126,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">126</div>
      <div class="rounded-full border-3 border-[hsl(120,50%,50%,100%)] bg-[hsl(120,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">120</div>
      <div class="rounded-full border-3 border-[hsl(114,50%,50%,100%)] bg-[hsl(114,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">114</div>
      <div class="rounded-full border-3 border-[hsl(108,50%,50%,100%)] bg-[hsl(108,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">108</div>
      <div class="rounded-full border-3 border-[hsl(102,50%,50%,100%)] bg-[hsl(102,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">102</div>
      <div class="rounded-full border-3 border-[hsl(96,50%,50%,100%)] bg-[hsl(96,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">96</div>
      <div class="rounded-full border-3 border-[hsl(90,50%,50%,100%)] bg-[hsl(90,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">90</div>
      <div class="rounded-full border-3 border-[hsl(84,50%,50%,100%)] bg-[hsl(84,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">84</div>
      <div class="rounded-full border-3 border-[hsl(78,50%,50%,100%)] bg-[hsl(78,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">78</div>
      <div class="rounded-full border-3 border-[hsl(72,50%,50%,100%)] bg-[hsl(72,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">72</div>
      <div class="rounded-full border-3 border-[hsl(66,50%,50%,100%)] bg-[hsl(66,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">66</div>
    </div>
<!-- 
    <div class="grid grid-cols-6 gap-1 p-1 text-[22px] text-center">
      <img src="/color/30 hsl wheel-0red 10k.png" alt="Example" class="w-100 object-cover rounded-md" />
      <div><br><br><br><clock /><a href="http://localhost:5173/aardvarkVue" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🐗🦡🦔</a></div>
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - yellow.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - magenta.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - cyan.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/wizardHat.png" alt="Example" class="h-120 object-cover rounded-md" />
    
    </div>
-->
              <NavigationBar />  
  </center>

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

</hslWheel>



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
