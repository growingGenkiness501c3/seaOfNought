<script setup lang="ts">
import aardvarkComponent from '@/components/aardvarkComponent.vue'
import Clock from '@/components/Clock.vue'
import clockFlag from '@/components/clockFlag.vue'
import Flag from '@/components/Flag.vue'
import helloWorld from '@/components/helloWorld.vue'
import NaughtSeaHeader from '@/components/NaughtSeaHeader.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import NavigationBars from '@/components/NavigationBars.vue'
import NavigationButtonBar from '@/components/NavigationButtonBar.vue'
import NavigationRouterBar from '@/components/NavigationRouterBar.vue'
import oO0 from '@/components/oO0.vue'
import seaOfNoughtBar from '@/components/seaOfNoughtBar.vue'
import seaOfNoughtNavigationBar from '@/components/seaOfNoughtNavigationBar.vue'
import seaOfNoughtShipsLog from '@/components/seaOfNoughtShipsLog.vue'
import shipsLogHeader from '@/components/shipsLogHeader.vue'
import SplitOneTwoThree from '@/components/SplitOneTwoThree.vue'
import wordBar from '@/components/wordBar.vue'
import yearsBar from '@/components/yearsBar.vue'
import zer0Oo from '@/components/zer0Oo.vue'

import blackFlag from '@/components/color/blackFlag.vue'
import cyanFlag from '@/components/color/cyanFlag.vue'
import hueBar from '@/components/color/hueBar.vue'
import magentaFlag from '@/components/color/magentaFlag.vue'
import rainbowDots from '@/components/color/rainbowDots.vue'
import skyBottom from '@/components/color/skyBottom.vue'
import skyMini from '@/components/color/skyMini.vue'
import skyTop from '@/components/color/skyTop.vue'
import whiteFlag from '@/components/color/whiteFlag.vue'
import yellowFlag from '@/components/color/yellowFlag.vue'

defineOptions({
  name: "aardvarkVue"
});
</script>
<template>

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


        <!--
    <div class="grid grid-cols-6 gap-1 p-1 text-[22px] text-center">
      <img src="/color/30 hsl wheel-0red 10k.png" alt="Example" class="w-100 object-cover rounded-md" />
      <div><br><br><br><clock /><a href="http://localhost:5173/aardvarkVue" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🐗🦡🦔</a></div>
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - yellow.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - magenta.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/30 hsl wheel-0red 10k opacity 100 - cyan.png" alt="Example" class="w-100 object-cover rounded-md" />
      <img src="/color/wizardHat.png" alt="Example" class="h-120 object-cover rounded-md" />
    </div>
    
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



















<hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br><hr><br>
<sub>Clock</sub><br><Clock />
<sub>aardvarkComponent</sub><br><aardvarkComponent />
<br>
<sub>blackFlag</sub><br><blackFlag>blackFlag</blackFlag><br>
<sub>clockFlag</sub><br><clockFlag>clockFlag</clockFlag><br>
<sub>cyanFlag</sub><br><cyanFlag>cyanFlag</cyanFlag><br>
<sub>Flag</sub><br><Flag>Flag</Flag><br><br>
<sub>helloWorld</sub><br><helloWorld /><br>
<sub>hueBar</sub><br><hueBar />
<sub>magentaFlag</sub><br><magentaFlag>magentaFlag</magentaFlag><br><br><br>
<sub>oO0</sub><br><oO0 /><br>
<sub>rainbowDots</sub><br><rainbowDots /><br>
<sub>seaOfNoughtBar</sub><br><seaOfNoughtBar />
<sub>seaOfNoughtNavigationBar</sub><br><seaOfNoughtNavigationBar /><br><br><br>
<sub>seaOfNoughtShipsLog</sub><br><seaOfNoughtShipsLog />
<sub>shipsLogHeader</sub><br><shipsLogHeader />
<sub>skyBottom</sub><br><skyBottom /><br>
<sub>skyMini</sub><br><skyMini /><br>
<sub>skyTop</sub><br><skyTop />
<hr>
  <sub>SplitOneTwoThree</sub><br><SplitOneTwoThree>
    <template #one>
      template #one
    </template>
    <template #two>
      template #two
    </template>
    <template #four>
      template #four
    </template>
  </SplitOneTwoThree>
<hr>
<br>
<sub>zer0Oo</sub><br><whiteFlag>whiteFlag</whiteFlag><br><br>
<sub>zer0Oo</sub><br><wordBar /><br>
<sub>zer0Oo</sub><br><yearsBar /><br><br>
<sub>zer0Oo</sub><br><yellowFlag>yellowFlag</yellowFlag><br><br><br>
<sub>zer0Oo</sub><br>
<zer0Oo />
<br>
</template>