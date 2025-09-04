  <style>
    @keyframes flip-vert {
      0%   { transform: rotateX(0deg); }
      25%  { transform: rotateX(900deg); }
      50%  { transform: rotateX(1800deg); }
      75%  { transform: rotateX(2700deg); }
      100% { transform: rotateX(3600deg); }
    }
    .hover\:flip-vert:hover {
      animation: flip-vert 10s linear;
      transform-style: preserve-3d;
    }
a {
text-decoration: none;
margin: 0;
}
  </style>

<script setup lang="ts">
defineOptions({
  name: "zer04"
});


import { computed } from 'vue';

interface Props {
  headers?: string[];                  // length ≤ 4; will be padded/truncated to 4
  row?: (string | number | null)[];    // length ≤ 4; will be padded/truncated to 4
}

const props = withDefaults(defineProps<Props>(), {
  headers: () => ['Col 1', 'Col 2', 'Col 3', 'Col 4'],
  row: () => ['—', '—', '—', '—'],
});

const fixedHeaders = computed(() => [...props.headers, '', '', '', ''].slice(0, 4));
const fixedRow = computed(() => [...props.row, '', '', '', ''].slice(0, 4));


</script>
<template>
  <div class="overflow-x-auto rounded-xl border border-gray-700">
    <table class="min-w-full table-fixed border-collapse">
      <thead>
        <tr class="bg-gray-900/50">
          <th
            v-for="(h, i) in fixedHeaders"
            :key="i"
            class="w-1/4 px-4 py-2 text-left font-medium text-gray-100 border-b border-gray-700"
          >
            {{ h }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-gray-800/30">
          <td
            v-for="(c, i) in fixedRow"
            :key="i"
            class="w-1/4 px-4 py-3 border-t border-gray-800 align-middle"
          >
            <slot :name="'col' + (i + 1)" :value="c">
              {{ c }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>  
<!-- Anywhere in your app -->
<FourColOneRowTable
  :headers="['Gauge', 'Outer Ø (mm)', 'Typical Use', 'Notes']"
  :row="['25G', '0.515', 'Subcutaneous', 'Higher gauge = thinner']"
/>

<a href="http://localhost:5175/" 
   target="_blank" rel="noopener noreferrer"
   class="block border border-[Chartreuse] p-2 bg-[#88888888]">
  
   <div class="hover:flip-vert border border-[Chartreuse] 
              bg-[#7FFF0088] text-[Chartreuse] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#7FFF0066] 
              hover:text-[#7FFF00] 
              hover:border-[#7FFF0033] 
              transition-colors">
      <span class="text-[6rem]">👩‍💻</span>
      <span class="text-[3rem]">vue 人</span>
      <span class="text-[2rem]">manufacturing</span>
      <span class="text-[2rem]">hsl(90, 100%, 50%)</span>
      <span class="text-[2rem]">#7FFF00</span>
      <span class="text-[2rem]">Chartreuse</span>
      <span class="text-[2rem]">oklch(87.82% 0.258 134.39)</span>
      <span class="text-[2rem]">href="http://localhost:5175/"</span>
      <span class="material-symbols-outlined text-[chartreuse] hover:text-[hsl(90, 100%, 50%)]">manufacturing</span>    
  </div>
</a>

<a href="https://www.twitch.tv/meleneth" 
   target="_blank" rel="noopener noreferrer"
   class="block border border-[CornflowerBlue] p-2 bg-[#6495ED33]">
  <div class="hover:flip-vert border border-[CornflowerBlue] 
              bg-[#6495ED33] text-[CornflowerBlue] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#6495ED66] 
              hover:text-[CornflowerBlue] 
              hover:border-[CornflowerBlue] 
              transition-colors">
    CornflowerBlue (#6495ED) →<br>
    hsl(219, 79%, 66%) → oklch(66.83% 0.209 259.89) 🧙‍♂️ twitch/meleneth patient_list href="https://www.twitch.tv/meleneth"
    <span class="material-symbols-outlined text-[CornflowerBlue] hover:text-[#6495ED]">
      patient_list
    </span>
  </div>
</a>

<a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:width_normal:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3"
   target="_blank" rel="noopener noreferrer"
   class="block border border-[DeepSkyBlue] p-2 bg-[#00BFFF33]">
  <div class="hover:flip-vert border border-[DeepSkyBlue] 
              bg-[#00BFFF33] text-[DeepSkyBlue] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#00BFFF66] 
              hover:text-[DeepSkyBlue] 
              hover:border-[DeepSkyBlue] 
              transition-colors">
    DeepSkyBlue (#00BFFF) → hsl(195, 100%, 50%)<br> → oklch(75.93% 0.246 230.62) ⛵ <br>
    NaughtSea patient_list <br>
    href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined"
    <br>
    <span class="material-symbols-outlined text-[DeepSkyBlue] hover:text-[#00BFFF]">
      category_search
    </span>
  </div>
</a>

<a href="https://www.twitch.tv/meleneth" 
   target="_blank" rel="noopener noreferrer"
   class="block border border-[Goldenrod] p-2 bg-[#DAA52033]">
  <div class="hover:flip-vert border border-[Goldenrod] 
              bg-[#DAA52033] text-[Goldenrod] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#DAA52066] 
              hover:text-[Goldenrod] 
              hover:border-[Goldenrod] 
              transition-colors">
    Goldenrod (#DAA520) → hsl(43, 74%, 49%) → oklch(73.47% 0.171 84.18) 📐今 frame.html width_normal href="file:///D:/125/Tailwinds/frame.html"
    <span class="material-symbols-outlined text-[Goldenrod] hover:text-[#DAA520]">
      width_normal
    </span>
  </div>
</a>
<a href="http://localhost:5174/"
   target="_blank" rel="noopener noreferrer"
   class="block border border-[LightSkyBlue] p-2 bg-[#87CEFA33]">
  <div class="hover:flip-vert border border-[hsl(203, 92%, 75%)] 
              bg-[#87CEFA33] text-[LightSkyBlue] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#87CEFA66] 
              hover:text-[LightSkyBlue] 
              hover:border-[LightSkyBlue] 
              transition-colors">
    LightSkyBlue (#87CEFA) → hsl(203, 92%, 75%) → oklch(84.17% 0.174 238.04) 🕵️‍♀️ calf/tyit50 replay_5 href="http://localhost:5174/"
    <span class="material-symbols-outlined text-[LightSkyBlue] hover:text-[hsl(43,89%,37%)]">
      replay_5
    </span>
  </div>
</a>

<a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:width_normal:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3"
   target="_blank" rel="noopener noreferrer"
   class="block border border-[MediumAquamarine] p-2 bg-[#66CDAA33]">
  <div class="hover:flip-vert border border-[MediumAquamarine] 
              bg-[#66CDAA33] text-[MediumAquamarine] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#66CDAA66] 
              hover:text-[MediumAquamarine] 
              hover:border-[MediumAquamarine] 
              transition-colors">
    MediumAquamarine (#66CDAA) → hsl(160, 51%, 60%) <br>
    → oklch(76.04% 0.150 175.91) 🔰 graph_5 <br>
      href="https://fonts.google.com/icons?selected<br>
      =Material+Symbols+Outlined<br>
      :width_normal:FILL@0;wght@400;GRAD<br>
      @0;opsz@24&icon.size=24&icon.color<br>
      =%23e3e3e3"
    <span class="material-symbols-outlined text-[MediumAquamarine] hover:text-[#66CDAA]">
      graph_5
    </span>
  </div>
</a>


<a href="http://localhost:5174/"
   target="_blank" rel="noopener noreferrer"
   class="block border border-[pink] p-2 bg-[#FFC0CB33]">
  <div class="hover:flip-vert border border-[pink] 
              bg-[#FFC0CB33] text-[pink] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#FFC0CB66] 
              hover:text-[pink] 
              hover:border-[pink] 
              transition-colors">
    Pink (#FFC0CB) → hsl(350, 100%, 88%) → oklch(84.84% 0.067 15.41) 🩰 calf/BWGP token href="http://localhost:5174/"
    <span class="material-symbols-outlined text-[pink] hover:text-[hsl(43,89%,37%)]">
      token
    </span>
  </div>
</a>

<a href="http://localhost:5174/"
   target="_blank" rel="noopener noreferrer"
   class="block border border-[SandyBrown] p-2 bg-[#F4A46033]">
  <div class="hover:flip-vert border border-[SandyBrown] 
              bg-[#F4A46033] text-[SandyBrown] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#F4A46066] 
              hover:text-[SandyBrown] 
              hover:border-[SandyBrown] 
              transition-colors">
    SandyBrown (#F4A460) → hsl(28, 87%, 67%) → oklch(78.66% 0.179 57.30) 🐮 calf widget_width href="http://localhost:5174/"
    <span class="material-symbols-outlined text-[SandyBrown] hover:text-[#F4A460]">
      widget_width
    </span>
  </div>
</a>

.my-box {
  background-color: oklch(66.83% 0.209 259.89); /* cornflowerblue */
}



<div>140 w3 color names</div>
<div>
<div class="flex flex-wrap justify-center gap-2 p-2 bg-sky-950/25">
  <div class="border border-[#ffc0cb] bg-[#ffc0cb]/25 text-[#ffc0cb]">pink #ffc0cb 🩰 token <i class="material-symbols-outlined" style="font-size: 1rem; color: pink">token</i></div>
  <div class="border border-[#ffb6c1] bg-[#ffb6c1]/25 text-[#ffb6c1]">lightpink #ffb6c1</div>
  <div class="border border-[#ff69b4] bg-[#ff69b4]/25 text-[#ff69b4]">hotpink #ff69b4</div>
  <div class="border border-[#ff1493] bg-[#ff1493]/25 text-[#ff1493]">deeppink #ff1493</div>
  <div class="border border-[#db7093] bg-[#db7093]/25 text-[#db7093]">palevioletred #db7093</div>
  <div class="border border-[#c71585] bg-[#c71585]/25 text-[#c71585]">mediumvioletred #c71585</div>
  <div class="border border-[#E6E6FA] bg-[#E6E6FA]/25 text-[#E6E6FA]">lavender #E6E6FA</div>
  <div class="border border-[#D8BFD8] bg-[#D8BFD8]/25 text-[#D8BFD8]">thistle #D8BFD8</div>
  <div class="border border-[#DDA0DD] bg-[#DDA0DD]/25 text-[#DDA0DD]">plum 	#DDA0DD</div>
  <div class="border border-[#DA70D6] bg-[#DA70D6]/25 text-[#DA70D6]">orchid 	#DA70D6</div>
  <div class="border border-[#EE82EE] bg-[#EE82EE]/25 text-[#EE82EE]">violet #EE82EE</div>
  <div class="border border-[#FF00FF] bg-[#FF00FF]/25 text-[#FF00FF]">fuchsia 	#FF00FF</div>
  <div class="border border-[#FF00FF] bg-[#FF00FF]/25 text-[#FF00FF]">magenta 	#FF00FF</div>
  <div class="border border-[#BA55D3] bg-[#BA55D3]/25 text-[#BA55D3]">mediumorchid 	#BA55D3</div>
  <div class="border border-[#9932CC] bg-[#9932CC]/25 text-[#9932CC]">darkorchid #9932CC</div>
  <div class="border border-[#9400D3] bg-[#9400D3]/25 text-[#9400D3]">darkviolet 	#9400D3</div>  
  <div class="border border-[#8A2BE2] bg-[#8A2BE2]/25 text-[#8A2BE2]">blueviolet 	#8A2BE2</div>
  <div class="border border-[#8B008B] bg-[#8B008B]/25 text-[#8B008B]">darkmagenta 	#8B008B</div>
  <div class="border border-[#800080] bg-[#800080]/25 text-[#800080]">purple 	#800080</div>
  <div class="border border-[#9370DB] bg-[#9370DB]/25 text-[#9370DB]">mediumpurple 	#9370DB</div>
  <div class="border border-[#7B68EE] bg-[#7B68EE]/25 text-[#7B68EE]">mediumslateblue 	#7B68EE</div>
  <div class="border border-[#6A5ACD] bg-[#6A5ACD]/25 text-[#6A5ACD]">slateblue 	#6A5ACD</div>
  <div class="border border-[#483D8B] bg-[#483D8B]/25 text-[#483D8B]">darkslateblue 	#483D8B</div>
  <div class="border border-sky-50"><div class="border border-[#663399] bg-[#663399]/50 text-[#663399]">rebeccapurple 	#663399</div></div>
  <div class="border border-sky-50"><div class="border border-[#4B0082] bg-[#4B0082]/25 text-[#4B0082]">indigo	#4B0082</div></div>
  <div class="border border-[#FFA07A] bg-[#ffc0cb]/25 text-[#FFA07A] ">lightsalmon 	#FFA07A</div>
  <div class="border border-[#FA8072] bg-[#FA8072]/25 text-[#FA8072]">salmon 	#FA8072</div>
  <div class="border border-[#E9967A] bg-[#E9967A]/25 text-[#E9967A]">darksalmon 	#E9967A</div>
  <div class="border border-[#F08080] bg-[#F08080]/25 text-[#F08080]">lightcoral 	#F08080</div>
  <div class="border border-[#CD5C5C] bg-[#CD5C5C]/25 text-[#CD5C5C]">indianred 	#CD5C5C</div>
  <div class="border border-[#DC143C] bg-[#DC143C]/25 text-[#DC143C]">crimson #DC143C</div>
  <div class="border border-sky-50"><div class="border border-[#FF0000] bg-[#FF0000]/25 text-[#FF0000]">red #FF0000</div></div>
  <div class="border border-[#B22222] bg-[#B22222]/25 text-[#B22222]">firebrick 	#B22222</div>
  <div class="border border-[#8B0000] bg-[#8B0000]/25 text-[#8B0000]">darkred #8B0000</div>
  <div class="border border-[#ffc0cb] bg-[#ffc0cb]/25 text-[#ffc0cb]">orange #FFA500</div>
  <div class="border border-[#FF8C00] bg-[#FF8C00]/25 text-[#FF8C00]">darkorange 	#FF8C00</div>
  <div class="border border-[#FF7F50] bg-[#FF7F50]/25 text-[#FF7F50]">coral 	#FF7F50</div>
  <div class="border border-[#FF6347] bg-[#FF6347]/25 text-[#FF6347]">tomato #FF6347</div>
  <div class="border border-[#FF4500] bg-[#FF4500]/25 text-[#FF4500]">orangered #FF4500</div>
  <div class="border border-sky-50"><div class="border border-[#FFD700] bg-[#FFD700]/25 text-[#FFD700]">gold #FFD700</div></div>
  <div class="border border-sky-50"><div class="border border-[#FFFF00] bg-[#FFFF00]/25 text-[#FFFF00]">yellow #FFFF00</div></div>
  <div class="border border-[#FFFFE0] bg-[#FFFFE0]/25 text-[#FFFFE0]">lightyellow 	#FFFFE0</div>
  <div class="border border-[#FFFACD] bg-[#FFFACD]/25 text-[#FFFACD]">lemonchiffon #FFFACD</div>
  <div class="border border-[#FAFAD2] bg-[#FAFAD2]/25 text-[#FAFAD2]">lightgoldenrodyellow #FAFAD2	</div>
  <div class="border border-[#FFEFD5] bg-[#FFEFD5]/25 text-[#FFEFD5]">papayawhip 	#FFEFD5</div>
  <div class="border border-[#FFE4B5] bg-[#FFE4B5]/25 text-[#FFE4B5]">moccasin 	#FFE4B5</div>
  <div class="border border-[#FFDAB9] bg-[#FFDAB9]/25 text-[#FFDAB9]">peachpuff 	#FFDAB9</div>
  <div class="border border-[#EEE8AA] bg-[#EEE8AA]/25 text-[#EEE8AA]">palegoldenrod #EEE8AA</div>
  <div class="border border-[#F0E68C] bg-[#F0E68C]/25 text-[#F0E68C]">khaki 	#F0E68C</div>
  <div class="border border-[#BDB76B] bg-[#BDB76B]/25 text-[#BDB76B]">darkkhaki	#BDB76B</div>
  <div class="border border-[#ADFF2F] bg-[#ADFF2F]/25 text-[#ADFF2F]">greenyellow	#ADFF2F</div>
  <div class="border border-[#7FFF00] bg-[#7FFF00]/25 text-[#7FFF00]">chartreuse	#7FFF00</div>
  <div class="border border-[#7CFC00] bg-[#7CFC00]/25 text-[#7CFC00]">lawngreen #7CFC00</div>
  <div class="border border-[#00FF00] bg-[#00FF00]/25 text-[#00FF00]">lime #00FF00</div>
  <div class="border border-[#32CD32] bg-[#32CD32]/25 text-[#32CD32]">limegreen #32CD32</div>
  <div class="border border-[#98FB98] bg-[#98FB98]/25 text-[#98FB98]">palegreen	#98FB98</div>
  <div class="border border-[#90EE90] bg-[#90EE90]/25 text-[#90EE90]">lightgreen	#90EE90</div>
  <div class="border border-[#00FA9A] bg-[#00FA9A]/25 text-[#00FA9A]">mediumspringgreen	#00FA9A</div>
  <div class="border border-[#00FF7F] bg-[#00FF7F]/25 text-[#00FF7F]">springgreen	#00FF7F</div>
  <div class="border border-[#3CB371] bg-[#3CB371]/25 text-[#3CB371]">mediumseagreen	#3CB371</div>
  <div class="border border-[#2E8B57] bg-[#2E8B57]/25 text-[#2E8B57]">seagreen	#2E8B57	</div>
  <div class="border border-[#228B22] bg-[#228B22]/25 text-[#228B22]">forestgreen	#228B22</div>
  <div class="border border-[#008000] bg-[#008000]/25 text-[#008000]">green	#008000</div>
  <div class="border border-[#006400] bg-[#006400]/25 text-[#006400]">darkgreen	#006400</div>
  <div class="border border-[#9ACD32] bg-[#9ACD32]/25 text-[#9ACD32]">yellowgreen	#9ACD32</div>
  <div class="border border-[#6B8E23] bg-[#6B8E23]/25 text-[#6B8E23]">olivedrab	#6B8E23</div>
  <div class="border border-[#556B2F] bg-[#556B2F]/25 text-[#556B2F]">darkolivegreen	#556B2F</div>
  <div class="border border-[#66CDAA] bg-[#66CDAA]/25 text-[#66CDAA]">mediumaquamarine	#66CDAA</div>
  <div  class="border border-[#8FBC8F] bg-[#8FBC8F]/25 text-[#8FBC8F]">darkseagreen #8FBC8F</div>
  <div class="border border-[#20B2AA] bg-[#20B2AA]/25 text-[#20B2AA]">lightseagreen	#20B2AA</div>
  <div class="border border-[#008B8B] bg-[#008B8B]/25 text-[#008B8B]">darkcyan	#008B8B</div>
  <div class="border border-[#008080] bg-[#008080]/25 text-[#008080]">teal 	#008080</div>
  <div class="border border-[#00FFFF] bg-[#00FFFF]/25 text-[#00FFFF]">aqua	#00FFFF</div>
  <div class="border border-[#00FFFF] bg-[#00FFFF]/25 text-[#00FFFF]">cyan	#00FFFF</div>
  <div  class="border border-[#E0FFFF] bg-[#E0FFFF]/25 text-[#E0FFFF]">lightcyan	#E0FFFF</div>
  <div class="border border-[#AFEEEE] bg-[#AFEEEE]/25 text-[#AFEEEE]">paleturquoise #AFEEEE</div>
  <div class="border border-[#7FFFD4] bg-[#7FFFD4]/25 text-[#7FFFD4]">aquamarine	#7FFFD4</div>
  <div class="border border-[#40E0D0] bg-[#40E0D0]/25 text-[#40E0D0]">turquoise	#40E0D0</div>
  <div class="border border-[#48D1CC] bg-[#48D1CC]/25 text-[#48D1CC]">mediumturquoise	#48D1CC</div>
  <div class="border border-[#00CED1] bg-[#00CED1]/25 text-[#00CED1]">darkturquoise	#00CED1</div>
  <div class="border border-[#5F9EA0] bg-[#5F9EA0]/25 text-[#5F9EA0]">cadetblue	#5F9EA0</div>
  <div class="border border-[#4682B4] bg-[#4682B4]/25 text-[#4682B4]">steelblue	#4682B4</div>
  <div class="border border-[#B0C4DE] bg-[#B0C4DE]/25 text-[#B0C4DE]">lightsteelblue	#B0C4DE</div>
  <div class="border border-[#ADD8E6] bg-[#ADD8E6]/25 text-[#ADD8E6]">lightblue	#ADD8E6</div>
  <div class="border border-[#B0E0E6] bg-[#B0E0E6]/25 text-[#B0E0E6]">powderblue	#B0E0E6</div>
  <div class="border border-[#87CEFA] bg-[#87CEFA]/25 text-[#87CEFA]">lightskyblue	#87CEFA</div>
  <div class="border border-[#87CEEB] bg-[#87CEEB]/25 text-[#87CEEB]">skyblue	#87CEEB</div>
  <div class="border border-[#6495ED] bg-[#6495ED]/25 text-[#6495ED]">cornflowerblue	#6495ED 🧙‍♂️ patient_list<i class="material-symbols-outlined" style="color: cornflowerblue">patient_list</i></div>
  <div class="border border-[#00BFFF] bg-[#00BFFF]/25 text-[#00BFFF]">deepskyblue #00BFFF</div>
  <div class="border border-[#1E90FF] bg-[#1E90FF]/25 text-[#1E90FF]">dodgerblue	#1E90FF</div>
  <div class="border border-sky-50"><div class="border border-[#4169E1] bg-[#4169E1]/25 text-[#4169E1]">royalblue	#4169E1</div></div>
  <div class="border border-sky-50"><div class="border border-[#0000FF] bg-[#0000FF]/25 text-[#0000FF]">blue	#0000FF</div></div>
  <div class="border border-[#0000CD] bg-[#0000CD]/25 text-[#0000CD]">mediumblue	#0000CD</div>
  <div class="border border-[#00008B] bg-[#00008B]/25 text-[#00008B]">darkblue	#00008B</div>
  <div class="border border-[#000080] bg-[#000080]/25 text-[#000080]">navy	#000080</div>
  <div class="border border-[#191970] bg-[#191970]/25 text-[#191970]">midnightblue #191970</div>
  <div class="border border-[#FFF8DC] bg-[#FFF8DC]/25 text-[#FFF8DC]">cornsilk	#FFF8DC</div>
  <div class="border border-[#FFEBCD] bg-[#FFEBCD]/25 text-[#FFEBCD]">blanchedalmond	#FFEBCD</div>
  <div class="border border-[#FFE4C4] bg-[#FFE4C4]/25 text-[#FFE4C4]">bisque #FFE4C4</div>
  <div class="border border-[#FFDEAD] bg-[#FFDEAD]/25 text-[#FFDEAD]">navajowhite	#FFDEAD</div>
  <div class="border border-[#F5DEB3] bg-[#F5DEB3]/25 text-[#F5DEB3]">wheat	#F5DEB3</div>
  <div class="border border-[#DEB887] bg-[#DEB887]/25 text-[#DEB887]">burlywood	#DEB887</div>
  <div class="border border-[#D2B48C] bg-[#D2B48C]/25 text-[#D2B48C]">tan	#D2B48C</div>
  <div class="border border-[#BC8F8F] bg-[#BC8F8F]/25 text-[#BC8F8F]">rosybrown	#BC8F8F</div>
  <div class="border border-[#F4A460] bg-[#F4A460]/25 text-[#F4A460]">sandybrown	#F4A460</div>
<a href="file:///D:/125/Tailwinds/frame.html" 
   target="_blank" rel="noopener noreferrer"
   class="block border border-sky-50 p-2">
  <div class="hover:flip-vert border border-[#DAA520] bg-[#DAA520]/25 text-[#DAA520] 
              p-2 flex items-center gap-2 rounded-md 
              hover:bg-[#DAA520]/40 hover:text-[#b8860b] hover:border-[#b8860b] transition-colors">
    goldenrod #DAA520 📐width_normal
    <span class="material-symbols-outlined text-[#DAA520] hover:text-[#b8860b]">
      width_normal
    </span>
  </div>
</a>

  <div class="border border-sky-50 p-2">
    <div class="border border-[#DAA520] bg-[#DAA520]/25 text-[#DAA520] 
                p-2 flex items-center gap-2 rounded-md 
                hover:bg-[#DAA520]/40 hover:text-[#b8860b] hover:border-[#b8860b] transition-colors">
      goldenrod #DAA520 📐width_normal
      <span class="material-symbols-outlined text-[#DAA520] hover:text-[#b8860b]">
        width_normal
      </span>
    </div>
  </div>
  <a href="file:///D:/125/Tailwinds/frame.html" 
    target="_blank" rel="noopener noreferrer"
    class="block border border-sky-50 p-2">
    <div class="border border-[#DAA520] bg-[#DAA520]/25 text-[#DAA520] 
                p-2 flex items-center gap-2 rounded-md 
                hover:bg-[#DAA520]/40 hover:text-[#b8860b] hover:border-[#b8860b] transition-colors">
      goldenrod #DAA520 📐width_normal
      <span class="material-symbols-outlined text-[#DAA520] hover:text-[#b8860b]">
        width_normal
      </span>
    </div>
  </a>
  
  <div class="border border-sky-50"><div class="border border-[#DAA520] bg-[#DAA520]/25 text-[#DAA520]">goldenrod	#DAA520 📐width_normal <i class="material-symbols-outlined" style="color: goldenrod">width_normal</i></div></div>
  <div  class="border border-[#B8860B] bg-[#B8860B]/25 text-[#B8860B]">darkgoldenrod #B8860B	</div>
  <div class="border border-[#CD853F] bg-[#CD853F]/25 text-[#CD853F]">peru	#CD853F</div>
  <div class="border border-[#D2691E] bg-[#D2691E]/25 text-[#D2691E]">chocolate #D2691E</div>
  <div class="border border-[#808000] bg-[#808000]/25 text-[#808000]">olive #808000</div>
  <div class="border border-[#8B4513] bg-[#8B4513]/25 text-[#8B4513]">saddlebrown #8B4513</div>
  <div class="border border-[#A0522D] bg-[#A0522D]/25 text-[#A0522D]">sienna	#A0522D	</div>
  <div class="border border-[#A52A2A] bg-[#A52A2A]/25 text-[#A52A2A]">brown	#A52A2A</div>
  <div class="border border-sky-50"><div class="border border-[#800000] bg-[#800000]/25 text-[#800000]">maroon #800000</div></div>
  <div class="border border-[#FFFFFF] bg-[#FFFFFF]/25 text-[#FFFFFF]">white #FFFFFF</div>
  <div class="border border-[#FFFAFA] bg-[#FFFAFA]/25 text-[#FFFAFA]">snow 	#FFFAFA</div>
  <div class="border border-[#F0FFF0] bg-[#F0FFF0]/25 text-[#F0FFF0]">honeydew	#F0FFF0</div>
  <div class="border border-[#F5FFFA] bg-[#F5FFFA]/25 text-[#F5FFFA]">mintcream 	#F5FFFA</div>
  <div class="border border-[#F0FFFF] bg-[#F0FFFF]/25 text-[#F0FFFF]">azure	#F0FFFF</div>
  <div class="border border-[#F0F8FF] bg-[#F0F8FF]/25 text-[#F0F8FF]">aliceblue	#F0F8FF</div>
  <div class="border border-[#F8F8FF] bg-[#F8F8FF]/25 text-[#F8F8FF]">ghostwhite	#F8F8FF</div>
  <div class="border border-[#F5F5F5] bg-[#F5F5F5]/25 text-[#F5F5F5]">whitesmoke	#F5F5F5</div>
  <div class="border border-[#FFF5EE] bg-[#FFF5EE]/25 text-[#FFF5EE]">seashell	#FFF5EE</div>
  <div class="border border-[#F5F5DC] bg-[#F5F5DC]/25 text-[#F5F5DC]">beige	#F5F5DC</div>
  <div class="border border-[#FDF5E6] bg-[#FDF5E6]/25 text-[#FDF5E6]">oldlace	#FDF5E6</div>
  <div class="border border-[#FFFAF0] bg-[#FFFAF0]/25 text-[#FFFAF0]">floralwhite	#FFFAF0</div>
  <div class="border border-[#FFFFF0] bg-[#FFFFF0]/25 text-[#FFFFF0]">ivory #FFFFF0</div>
  <div  class="border border-[#FAEBD7] bg-[#FAEBD7]/25 text-[#FAEBD7]">antiquewhite #FAEBD7</div>
  <div class="border border-[#FAF0E6] bg-[#FAF0E6]/25 text-[#FAF0E6]">linen #FAF0E6</div>
  <div class="border border-[#FFF0F5] bg-[#FFF0F5]/25 text-[#FFF0F5]">lavenderblush	#FFF0F5	</div>
  <div class="border border-[#FFE4E1] bg-[#FFE4E1]/25 text-[#FFE4E1]">mistyrose	#FFE4E1</div>
    <div class="border border-[#DCDCDC] bg-[#DCDCDC]/25 text-[#DCDCDC]">gainsboro	#DCDCDC</div>
    <div class="border border-[#D3D3D3] bg-[#D3D3D3]/25 text-[#D3D3D3]">lightgray	#D3D3D3</div>
    <div class="border border-sky-50"><div class="border border-[#C0C0C0] bg-[#C0C0C0]/25 text-[#C0C0C0]">silver	#C0C0C0</div></div>
    <div class="border border-[#A9A9A9] bg-[#A9A9A9]/25 text-[#A9A9A9]">darkgray	#A9A9A9</div>
    <div class="border border-[#696969] bg-[#696969]/25 text-[#696969]">dimgray	#696969</div>
    <div class="border border-sky-50"><div class="border border-[#808080] bg-[#808080]/25 text-[#808080]">gray #808080</div></div>
    <div class="border border-[#778899] bg-[#778899]/25 text-[#778899]">lightslategray	#778899</div>
    <div class="border border-[#708090] bg-[#708090]/25 text-[#708090]">slategray #708090</div>
    <div class="border border-[#2F4F4F] bg-[#2F4F4F]/25 text-[#2F4F4F]">darkslategray	#2F4F4F</div>
    <div class="border border-[#000000] bg-[#000000]/25 text-[#000000]">black	#000000</div>
</div>
</div>

















</template>
