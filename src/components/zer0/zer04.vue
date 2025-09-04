<style>
/*
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
*/
a {
text-decoration: none;
margin: 0;
}
</style>
<script setup lang="ts">
defineOptions({
  name: "zer04"
});
/*
import { ref } from "vue"

const rotate = ref(false)
*/
</script>
<template>
<!--
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[Chartreuse] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[Chartreuse] 
                            bg-[#7FFF0088] text-[Chartreuse] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#7FFF0066] 
                            hover:text-[#7FFF00] 
                            hover:border-[#7FFF0033] 
                            transition-colors">    
                    <span class="text-[6rem]">👩‍💻</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: Chartreuse;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              manufacturing
            </i>
        </td>
        <td class="px-4 py-2 text-[Chartreuse]"><span class="text-[2rem]">vue 人</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">manufacturing</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(90, 100%, 50%)</span><br>
          <span class="text-[1rem]">#7FFF00</span><br>
          <span class="text-[1rem]">Chartreuse</span><br>
          <span class="text-[1rem]">oklch(87.82% 0.258 134.39)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[CornflowerBlue] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[CornflowerBlue] 
                            bg-[#6495ED88] text-[CornflowerBlue] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#6495ED66] 
                            hover:text-[#7FFF00] 
                            hover:border-[#7FFF0033] 
                            transition-colors">    
                    <span class="text-[6rem]">🧙‍♂️</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: CornflowerBlue;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              patient_list
            </i>
        </td>
        <td class="px-4 py-2 text-[CornflowerBlue]"><span class="text-[2rem]">twitch/meleneth</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">patient_list</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(219, 79%, 66%)</span><br>
          <span class="text-[1rem]">#6495ED</span><br>
          <span class="text-[1rem]">CornflowerBlue</span><br>
          <span class="text-[1rem]">oklch(66.83% 0.209 259.89)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="https://www.twitch.tv/meleneth"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[Goldenrod] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[Goldenrod] 
                            bg-[#DAA52088] text-[Goldenrod] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#DAA52066] 
                            hover:text-[#7FFF00] 
                            hover:border-[#DAA52033] 
                            transition-colors">    
                    <span class="text-[6rem]">📐</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: Goldenrod;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              width_normal
            </i>
        </td>
        <td class="px-4 py-2 text-[Goldenrod]"><span class="text-[2rem]">今 frame.html </span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">width_normal</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(43, 74%, 49%)</span><br>
          <span class="text-[1rem]">#DAA520</span><br>
          <span class="text-[1rem]">Goldenrod</span><br>
          <span class="text-[1rem]">oklch(73.47% 0.171 84.18)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="file:///D:/125/Tailwinds/frame.html"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5174/"
            target="_blank" rel="noopener noreferrer"
            class="block border border-[LightSkyBlue] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[LightSkyBlue] 
                            bg-[#87CEFA88] text-[LightSkyBlue] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#87CEFA66] 
                            hover:text-[#87CEFA] 
                            hover:border-[#87CEFA33] 
                            transition-colors">    
                    <span class="text-[6rem]">🕵️‍♀️</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: LightSkyBlue;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              replay_5
            </i>
        </td>
        <td class="px-4 py-2 text-[LightSkyBlue]"><span class="text-[2rem]">calf/tyit50 </span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">replay_5</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(203, 92%, 75%)</span><br>
          <span class="text-[1rem]">#87CEFA</span><br>
          <span class="text-[1rem]">LightSkyBlue</span><br>
          <span class="text-[1rem]">oklch(84.17% 0.174 238.04)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5174/"
            target="_blank" rel="noopener noreferrer"
            class="block border border-[pink] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[pink] 
                            bg-[#FFC0CB88] text-[pink] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#FFC0CB66] 
                            hover:text-[#FFC0CB] 
                            hover:border-[#FFC0CB33] 
                            transition-colors">    
                    <span class="text-[6rem]">🩰</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: pink;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              token
            </i>
        </td>
        <td class="px-4 py-2 text-[Pink]"><span class="text-[2rem]">calf/BWGP</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">token</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(350, 100%, 88%)</span><br>
          <span class="text-[1rem]">#FFC0CB</span><br>
          <span class="text-[1rem]">pink</span><br>
          <span class="text-[1rem]">oklch(84.84% 0.067 15.41)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5174/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5174/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[SandyBrown] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[SandyBrown] 
                            bg-[#F4A46088] text-[SandyBrown] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#F4A46066] 
                            hover:text-[#F4A460] 
                            hover:border-[#F4A46033] 
                            transition-colors">    
                    <span class="text-[6rem]">🐮</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: SandyBrown;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              widget_width
            </i>
        </td>
        <td class="px-4 py-2 text-[SandyBrown]"><span class="text-[2rem]">calf</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">widget_width</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(28, 87%, 67%)</span><br>
          <span class="text-[1rem]">#F4A460</span><br>
          <span class="text-[1rem]">SandyBrown</span><br>
          <span class="text-[1rem]">oklch(78.66% 0.179 57.30)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[MediumAquamarine] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[MediumAquamarine] 
                            bg-[#66CDAA88] text-[MediumAquamarine] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#66CDAA66] 
                            hover:text-[#66CDAA] 
                            hover:border-[#66CDAA33] 
                            transition-colors">    
                    <span class="text-[6rem]">🔰</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: MediumAquamarine;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              graph_5
            </i>
        </td>
        <td class="px-4 py-2 text-[MediumAquamarine]"><span class="text-[2rem]">material-symbols-outlined</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">graph_5</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(160, 51%, 60%)</span><br>
          <span class="text-[1rem]">#66CDAA</span><br>
          <span class="text-[1rem]">MediumAquamarine</span><br>
          <span class="text-[1rem]">oklch(76.04% 0.150 175.91)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[DeepSkyBlue] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[DeepSkyBlue] 
                            bg-[#00BFFF88] text-[DeepSkyBlue] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#00BFFF66] 
                            hover:text-[#00BFFF] 
                            hover:border-[#00BFFF33] 
                            transition-colors">    
                    <span class="text-[6rem]">⛵</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: DeepSkyBlue;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              category_search
            </i>
        </td>
        <td class="px-4 py-2 text-[DeepSkyBlue]"><span class="text-[2rem]">NaughtSea </span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">category_search</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(195, 100%, 50%)</span><br>
          <span class="text-[1rem]">#00BFFF</span><br>
          <span class="text-[1rem]">DeepSkyBlue</span><br>
          <span class="text-[1rem]">oklch(75.93% 0.246 230.62)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
https://fonts.google.com/icons?selected=Material+Symbols+Outlined:width_normal:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3
https://en.wikipedia.org/wiki/METAR
https://github.com/gregmalcolm/python_koans
https://emojipedia.org/
https://www.jam-software.com/treesize
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

-->

<div>140 w3 color names</div>
<div>
<div class="flex flex-wrap justify-center gap-2 p-2 bg-sky-950/25 h-11">
  <div class="inline-block"><img src="/public/token.png" class="w-11 h-11" /></div>  
  <div class="h-11 border border-[#ffc0cb] bg-[#ffc0cb]/25 text-[#ffc0cb] flex items-center justify-center">pink #ffc0cb </div> 
  <div class="h-11 border border-[#ffb6c1] bg-[#ffb6c1]/25 text-[#ffb6c1] flex items-center justify-center">lightpink #ffb6c1</div>
  <div class="h-11 border border-[#ff69b4] bg-[#ff69b4]/25 text-[#ff69b4] flex items-center justify-center">hotpink #ff69b4</div>
  <div class="border border-[#ff1493] bg-[#ff1493]/25 text-[#ff1493] flex items-center justify-center">deeppink #ff1493</div>
  <div class="border border-[#db7093] bg-[#db7093]/25 text-[#db7093] flex items-center justify-center">palevioletred #db7093</div>
  <div class="border border-[#c71585] bg-[#c71585]/25 text-[#c71585] flex items-center justify-center">mediumvioletred #c71585</div>
  <div class="border border-[#E6E6FA] bg-[#E6E6FA]/25 text-[#E6E6FA] flex items-center justify-center">lavender #E6E6FA</div>
  <div class="border border-[#D8BFD8] bg-[#D8BFD8]/25 text-[#D8BFD8] flex items-center justify-center">thistle #D8BFD8</div>
  <div class="border border-[#DDA0DD] bg-[#DDA0DD]/25 text-[#DDA0DD] flex items-center justify-center">plum 	#DDA0DD</div>
  <div class="border border-[#DA70D6] bg-[#DA70D6]/25 text-[#DA70D6] flex items-center justify-center">orchid 	#DA70D6</div>
  <div class="border border-[#EE82EE] bg-[#EE82EE]/25 text-[#EE82EE] flex items-center justify-center">violet #EE82EE</div>
  <div class="border border-[#FF00FF] bg-[#FF00FF]/25 text-[#FF00FF] flex items-center justify-center">fuchsia 	#FF00FF</div>
  <div class="border border-[#FF00FF] bg-[#FF00FF]/25 text-[#FF00FF] flex items-center justify-center">magenta 	#FF00FF</div>
  <div class="border border-[#BA55D3] bg-[#BA55D3]/25 text-[#BA55D3] flex items-center justify-center">mediumorchid 	#BA55D3</div>
  <div class="border border-[#9932CC] bg-[#9932CC]/25 text-[#9932CC] flex items-center justify-center">darkorchid #9932CC</div>
  <div class="border border-[#9400D3] bg-[#9400D3]/25 text-[#9400D3] flex items-center justify-center">darkviolet 	#9400D3</div>  
  <div class="border border-[#8A2BE2] bg-[#8A2BE2]/25 text-[#8A2BE2] flex items-center justify-center">blueviolet 	#8A2BE2</div>
  <div class="border border-[#8B008B] bg-[#8B008B]/25 text-[#8B008B] flex items-center justify-center">darkmagenta 	#8B008B</div>
  <div class="border border-[#800080] bg-[#800080]/25 text-[#800080] flex items-center justify-center">purple 	#800080</div>
  <div class="border border-[#9370DB] bg-[#9370DB]/25 text-[#9370DB] flex items-center justify-center">mediumpurple 	#9370DB</div>
  <div class="border border-[#7B68EE] bg-[#7B68EE]/25 text-[#7B68EE] flex items-center justify-center">mediumslateblue 	#7B68EE</div>
  <div class="border border-[#6A5ACD] bg-[#6A5ACD]/25 text-[#6A5ACD] flex items-center justify-center">slateblue 	#6A5ACD</div>
  <div class="border border-[#483D8B] bg-[#483D8B]/25 text-[#483D8B] flex items-center justify-center">darkslateblue 	#483D8B</div>
  <div class="inline-block"><img src="/volunteer_activism.png" class="w-11 h-11" /></div> 
  <div class="border border-sky-50"><div class="border border-[#663399] bg-[#663399]/50 text-[#663399] flex items-center justify-center">rebeccapurple 	#663399</div></div>
  <div class="border border-sky-50"><div class="border border-[#4B0082] bg-[#4B0082]/25 text-[#4B0082] flex items-center justify-center">indigo	#4B0082</div></div>
  <div class="border border-[#FFA07A] bg-[#ffc0cb]/25 text-[#FFA07A] flex items-center justify-center">lightsalmon 	#FFA07A</div>
  <div class="border border-[#FA8072] bg-[#FA8072]/25 text-[#FA8072] flex items-center justify-center">salmon 	#FA8072</div>
  <div class="border border-[#E9967A] bg-[#E9967A]/25 text-[#E9967A] flex items-center justify-center">darksalmon 	#E9967A</div>
  <div class="border border-[#F08080] bg-[#F08080]/25 text-[#F08080] flex items-center justify-center">lightcoral 	#F08080</div>
  <div class="border border-[#CD5C5C] bg-[#CD5C5C]/25 text-[#CD5C5C] flex items-center justify-center">indianred 	#CD5C5C</div>
  <div class="border border-[#DC143C] bg-[#DC143C]/25 text-[#DC143C] flex items-center justify-center">crimson #DC143C</div>
  <div class="border border-sky-50"><div class="border border-[#FF0000] bg-[#FF0000]/25 text-[#FF0000] flex items-center justify-center">red #FF0000</div></div>
  <div class="border border-[#B22222] bg-[#B22222]/25 text-[#B22222] flex items-center justify-center">firebrick 	#B22222</div>
  <div class="border border-[#8B0000] bg-[#8B0000]/25 text-[#8B0000] flex items-center justify-center">darkred #8B0000</div>
  <div class="border border-[#ffc0cb] bg-[#ffc0cb]/25 text-[#ffc0cb] flex items-center justify-center">orange #FFA500</div>
  <div class="border border-[#FF8C00] bg-[#FF8C00]/25 text-[#FF8C00] flex items-center justify-center">darkorange 	#FF8C00</div>
  <div class="border border-[#FF7F50] bg-[#FF7F50]/25 text-[#FF7F50] flex items-center justify-center">coral 	#FF7F50</div>
  <div class="border border-[#FF6347] bg-[#FF6347]/25 text-[#FF6347] flex items-center justify-center">tomato #FF6347</div>
<div class="inline-block"><img src="/public/heat.png" class="w-11 h-11" /></div>
  <div class="border border-[#FF4500] bg-[#FF4500]/25 text-[#FF4500] flex items-center justify-center">orangered #FF4500</div>
  <div class="border border-sky-50"><div class="border border-[#FFD700] bg-[#FFD700]/25 text-[#FFD700] flex items-center justify-center">gold #FFD700</div></div>
  <div class="border border-sky-50"><div class="border border-[#FFFF00] bg-[#FFFF00]/25 text-[#FFFF00] flex items-center justify-center">yellow #FFFF00</div></div>
  <div class="border border-[#FFFFE0] bg-[#FFFFE0]/25 text-[#FFFFE0] flex items-center justify-center">lightyellow 	#FFFFE0</div>
  <div class="border border-[#FFFACD] bg-[#FFFACD]/25 text-[#FFFACD] flex items-center justify-center">lemonchiffon #FFFACD</div>
  <div class="border border-[#FAFAD2] bg-[#FAFAD2]/25 text-[#FAFAD2] flex items-center justify-center">lightgoldenrodyellow #FAFAD2	</div>
  <div class="border border-[#FFEFD5] bg-[#FFEFD5]/25 text-[#FFEFD5] flex items-center justify-center">papayawhip 	#FFEFD5</div>
  <div class="border border-[#FFE4B5] bg-[#FFE4B5]/25 text-[#FFE4B5] flex items-center justify-center">moccasin 	#FFE4B5</div>
  <div class="border border-[#FFDAB9] bg-[#FFDAB9]/25 text-[#FFDAB9] flex items-center justify-center">peachpuff 	#FFDAB9</div>
  <div class="border border-[#EEE8AA] bg-[#EEE8AA]/25 text-[#EEE8AA] flex items-center justify-center">palegoldenrod #EEE8AA</div>
  <div class="border border-[#F0E68C] bg-[#F0E68C]/25 text-[#F0E68C] flex items-center justify-center">khaki 	#F0E68C</div>
  <div class="border border-[#BDB76B] bg-[#BDB76B]/25 text-[#BDB76B] flex items-center justify-center">darkkhaki	#BDB76B</div>
  <div class="border border-[#ADFF2F] bg-[#ADFF2F]/25 text-[#ADFF2F] flex items-center justify-center">greenyellow	#ADFF2F</div>
  <div class="border border-[#7FFF00] bg-[#7FFF00]/25 text-[#7FFF00] flex items-center justify-center">chartreuse	#7FFF00</div>
  <div class="inline-block"><img src="/public/cycle.png" class="w-11 h-11" /></div>
  <div class="border border-[#7CFC00] bg-[#7CFC00]/25 text-[#7CFC00] flex items-center justify-center">lawngreen #7CFC00</div>
  <div class="border border-[#00FF00] bg-[#00FF00]/25 text-[#00FF00] flex items-center justify-center">lime #00FF00</div>
  <div class="border border-[#32CD32] bg-[#32CD32]/25 text-[#32CD32] flex items-center justify-center">limegreen #32CD32</div>
  <div class="border border-[#98FB98] bg-[#98FB98]/25 text-[#98FB98] flex items-center justify-center">palegreen	#98FB98</div>
  <div class="border border-[#90EE90] bg-[#90EE90]/25 text-[#90EE90] flex items-center justify-center">lightgreen	#90EE90</div>
  <div class="border border-[#00FA9A] bg-[#00FA9A]/25 text-[#00FA9A] flex items-center justify-center">mediumspringgreen	#00FA9A</div>
  <div class="border border-[#00FF7F] bg-[#00FF7F]/25 text-[#00FF7F] flex items-center justify-center">springgreen	#00FF7F</div>
  <div class="border border-[#3CB371] bg-[#3CB371]/25 text-[#3CB371] flex items-center justify-center">mediumseagreen	#3CB371</div>
  <div class="border border-[#2E8B57] bg-[#2E8B57]/25 text-[#2E8B57] flex items-center justify-center">seagreen	#2E8B57	</div>
  <div class="border border-[#228B22] bg-[#228B22]/25 text-[#228B22] flex items-center justify-center">forestgreen	#228B22</div>
  <div class="border border-[#008000] bg-[#008000]/25 text-[#008000] flex items-center justify-center">green	#008000</div>
  <div class="border border-[#006400] bg-[#006400]/25 text-[#006400] flex items-center justify-center">darkgreen	#006400</div>
  <div class="border border-[#9ACD32] bg-[#9ACD32]/25 text-[#9ACD32] flex items-center justify-center">yellowgreen	#9ACD32</div>
  <div class="border border-[#6B8E23] bg-[#6B8E23]/25 text-[#6B8E23] flex items-center justify-center">olivedrab	#6B8E23</div>
  <div class="border border-[#556B2F] bg-[#556B2F]/25 text-[#556B2F] flex items-center justify-center">darkolivegreen	#556B2F</div>
    <div class="inline-block"><img src="/public/navigation.png" class="w-11 h-11" /></div>
  <div class="border border-[#66CDAA] bg-[#66CDAA]/25 text-[#66CDAA] flex items-center justify-center">mediumaquamarine	#66CDAA</div>
  <div  class="border border-[#8FBC8F] bg-[#8FBC8F]/25 text-[#8FBC8F] flex items-center justify-center">darkseagreen #8FBC8F</div>
  <div class="border border-[#20B2AA] bg-[#20B2AA]/25 text-[#20B2AA] flex items-center justify-center">lightseagreen	#20B2AA</div>
  <div class="border border-[#008B8B] bg-[#008B8B]/25 text-[#008B8B] flex items-center justify-center">darkcyan	#008B8B</div>
  <div class="border border-[#008080] bg-[#008080]/25 text-[#008080] flex items-center justify-center">teal 	#008080</div>
  <div class="border border-[#00FFFF] bg-[#00FFFF]/25 text-[#00FFFF] flex items-center justify-center">aqua	#00FFFF</div>
  <div class="border border-[#00FFFF] bg-[#00FFFF]/25 text-[#00FFFF] flex items-center justify-center">cyan	#00FFFF</div>
  <div  class="border border-[#E0FFFF] bg-[#E0FFFF]/25 text-[#E0FFFF] flex items-center justify-center">lightcyan	#E0FFFF</div>
  <div class="border border-[#AFEEEE] bg-[#AFEEEE]/25 text-[#AFEEEE] flex items-center justify-center">paleturquoise #AFEEEE</div>
  <div class="border border-[#7FFFD4] bg-[#7FFFD4]/25 text-[#7FFFD4] flex items-center justify-center">aquamarine	#7FFFD4</div>
  <div class="border border-[#40E0D0] bg-[#40E0D0]/25 text-[#40E0D0] flex items-center justify-center">turquoise	#40E0D0</div>
  <div class="border border-[#48D1CC] bg-[#48D1CC]/25 text-[#48D1CC] flex items-center justify-center">mediumturquoise	#48D1CC</div>
  <div class="border border-[#00CED1] bg-[#00CED1]/25 text-[#00CED1] flex items-center justify-center">darkturquoise	#00CED1</div>
  <div class="border border-[#5F9EA0] bg-[#5F9EA0]/25 text-[#5F9EA0] flex items-center justify-center">cadetblue	#5F9EA0</div>
  <div class="border border-[#4682B4] bg-[#4682B4]/25 text-[#4682B4] flex items-center justify-center">steelblue	#4682B4</div>
  <div class="border border-[#B0C4DE] bg-[#B0C4DE]/25 text-[#B0C4DE] flex items-center justify-center">lightsteelblue	#B0C4DE</div>
  <div class="border border-[#ADD8E6] bg-[#ADD8E6]/25 text-[#ADD8E6] flex items-center justify-center">lightblue	#ADD8E6</div>
  <div class="border border-[#B0E0E6] bg-[#B0E0E6]/25 text-[#B0E0E6] flex items-center justify-center">powderblue	#B0E0E6</div>
  <div class="inline-block"><img src="/public/replay_5.png" class="w-11 h-11" /></div>
  <div class="border border-[#87CEFA] bg-[#87CEFA]/25 text-[#87CEFA] flex items-center justify-center">lightskyblue	#87CEFA</div>
  <div class="border border-[#87CEEB] bg-[#87CEEB]/25 text-[#87CEEB] flex items-center justify-center">skyblue	#87CEEB</div>
  <div class="border border-[#6495ED] bg-[#6495ED]/25 text-[#6495ED] flex items-center justify-center">cornflowerblue	#6495ED </div>
  <div class="inline-block"><img src="/public/category_search.png" class="w-11 h-11" /></div>
  
    
  <div class="border border-[#00BFFF] bg-[#00BFFF]/25 text-[#00BFFF] flex items-center justify-center">deepskyblue #00BFFF</div>
  <div class="border border-[#1E90FF] bg-[#1E90FF]/25 text-[#1E90FF] flex items-center justify-center">dodgerblue	#1E90FF</div>
  <div class="border border-sky-50"><div class="border border-[#4169E1] bg-[#4169E1]/25 text-[#4169E1] flex items-center justify-center">royalblue	#4169E1</div></div>
  <div class="border border-sky-50"><div class="border border-[#0000FF] bg-[#0000FF]/25 text-[#0000FF] flex items-center justify-center">blue	#0000FF</div></div>
  <div class="border border-[#0000CD] bg-[#0000CD]/25 text-[#0000CD] flex items-center justify-center">mediumblue	#0000CD</div>
  <div class="border border-[#00008B] bg-[#00008B]/25 text-[#00008B] flex items-center justify-center">darkblue	#00008B</div>
  <div class="border border-[#000080] bg-[#000080]/25 text-[#000080] flex items-center justify-center">navy	#000080</div>
  <div class="border border-[#191970] bg-[#191970]/25 text-[#191970] flex items-center justify-center">midnightblue #191970</div>
  <div class="border border-[#FFF8DC] bg-[#FFF8DC]/25 text-[#FFF8DC] flex items-center justify-center">cornsilk	#FFF8DC</div>
  <div class="border border-[#FFEBCD] bg-[#FFEBCD]/25 text-[#FFEBCD] flex items-center justify-center">blanchedalmond	#FFEBCD</div>
  <div class="border border-[#FFE4C4] bg-[#FFE4C4]/25 text-[#FFE4C4] flex items-center justify-center">bisque #FFE4C4</div>
  <div class="border border-[#FFDEAD] bg-[#FFDEAD]/25 text-[#FFDEAD] flex items-center justify-center">navajowhite	#FFDEAD</div>
  <div class="border border-[#F5DEB3] bg-[#F5DEB3]/25 text-[#F5DEB3] flex items-center justify-center">wheat	#F5DEB3</div>
  <div class="border border-[#DEB887] bg-[#DEB887]/25 text-[#DEB887] flex items-center justify-center">burlywood	#DEB887</div>
  <div class="border border-[#D2B48C] bg-[#D2B48C]/25 text-[#D2B48C] flex items-center justify-center">tan	#D2B48C</div>
  <div class="border border-[#BC8F8F] bg-[#BC8F8F]/25 text-[#BC8F8F] flex items-center justify-center">rosybrown	#BC8F8F</div>
<div class="inline-block"><img src="/public/widget_width.png" class="w-11 h-11" /></div>
  <div class="border border-[#F4A460] bg-[#F4A460]/25 text-[#F4A460] flex items-center justify-center">sandybrown	#F4A460</div>
  <div class="inline-block"><img src="/public/width_normal.png" class="w-11 h-11" /></div>
  <div class="border border-[#DAA520] bg-[#DAA520]/25 text-[#DAA520] flex items-center justify-center">goldenrod #DAA520	</div>
  <div class="border border-[#B8860B] bg-[#B8860B]/25 text-[#B8860B] flex items-center justify-center">darkgoldenrod #B8860B	</div>
  <div class="border border-[#CD853F] bg-[#CD853F]/25 text-[#CD853F] flex items-center justify-center">peru	#CD853F</div>
  <div class="border border-[#D2691E] bg-[#D2691E]/25 text-[#D2691E] flex items-center justify-center">chocolate #D2691E</div>
  <div class="border border-[#808000] bg-[#808000]/25 text-[#808000] flex items-center justify-center">olive #808000</div>
  <div class="border border-[#8B4513] bg-[#8B4513]/25 text-[#8B4513] flex items-center justify-center">saddlebrown #8B4513</div>
  <div class="border border-[#A0522D] bg-[#A0522D]/25 text-[#A0522D] flex items-center justify-center">sienna	#A0522D	</div>
  <div class="border border-[#A52A2A] bg-[#A52A2A]/25 text-[#A52A2A] flex items-center justify-center">brown	#A52A2A</div>
  <div class="border border-sky-50"><div class="border border-[#800000] bg-[#800000]/25 text-[#800000]">maroon #800000</div></div>
  <div class="border border-[#FFFFFF] bg-[#FFFFFF]/25 text-[#FFFFFF] flex items-center justify-center">white #FFFFFF</div>
  <div class="border border-[#FFFAFA] bg-[#FFFAFA]/25 text-[#FFFAFA] flex items-center justify-center">snow 	#FFFAFA</div>
  <div class="border border-[#F0FFF0] bg-[#F0FFF0]/25 text-[#F0FFF0] flex items-center justify-center">honeydew	#F0FFF0</div>
  <div class="border border-[#F5FFFA] bg-[#F5FFFA]/25 text-[#F5FFFA] flex items-center justify-center">mintcream 	#F5FFFA</div>
  <div class="border border-[#F0FFFF] bg-[#F0FFFF]/25 text-[#F0FFFF] flex items-center justify-center">azure	#F0FFFF</div>
  <div class="border border-[#F0F8FF] bg-[#F0F8FF]/25 text-[#F0F8FF] flex items-center justify-center">aliceblue	#F0F8FF</div>
  <div class="border border-[#F8F8FF] bg-[#F8F8FF]/25 text-[#F8F8FF] flex items-center justify-center">ghostwhite	#F8F8FF</div>
  <div class="border border-[#F5F5F5] bg-[#F5F5F5]/25 text-[#F5F5F5] flex items-center justify-center">whitesmoke	#F5F5F5</div>
  <div class="border border-[#FFF5EE] bg-[#FFF5EE]/25 text-[#FFF5EE] flex items-center justify-center">seashell	#FFF5EE</div>
  <div class="border border-[#F5F5DC] bg-[#F5F5DC]/25 text-[#F5F5DC] flex items-center justify-center">beige	#F5F5DC</div>
  <div class="border border-[#FDF5E6] bg-[#FDF5E6]/25 text-[#FDF5E6] flex items-center justify-center">oldlace	#FDF5E6</div>
  <div class="border border-[#FFFAF0] bg-[#FFFAF0]/25 text-[#FFFAF0] flex items-center justify-center">floralwhite	#FFFAF0</div>
  <div class="border border-[#FFFFF0] bg-[#FFFFF0]/25 text-[#FFFFF0] flex items-center justify-center">ivory #FFFFF0</div>
  <div  class="border border-[#FAEBD7] bg-[#FAEBD7]/25 text-[#FAEBD7] flex items-center justify-center">antiquewhite #FAEBD7</div>
  <div class="border border-[#FAF0E6] bg-[#FAF0E6]/25 text-[#FAF0E6] flex items-center justify-center">linen #FAF0E6</div>
  <div class="border border-[#FFF0F5] bg-[#FFF0F5]/25 text-[#FFF0F5] flex items-center justify-center">lavenderblush	#FFF0F5	</div>
  <div class="border border-[#FFE4E1] bg-[#FFE4E1]/25 text-[#FFE4E1] flex items-center justify-center">mistyrose	#FFE4E1</div>
    <div class="border border-[#DCDCDC] bg-[#DCDCDC]/25 text-[#DCDCDC] flex items-center justify-center">gainsboro	#DCDCDC</div>
    <div class="border border-[#D3D3D3] bg-[#D3D3D3]/25 text-[#D3D3D3] flex items-center justify-center">lightgray	#D3D3D3</div>
    <div class="border border-sky-50"><div class="border border-[#C0C0C0] bg-[#C0C0C0]/25 text-[#C0C0C0] flex items-center justify-center">silver	#C0C0C0</div></div>
    <div class="border border-[#A9A9A9] bg-[#A9A9A9]/25 text-[#A9A9A9] flex items-center justify-center">darkgray	#A9A9A9</div>
    <div class="border border-[#696969] bg-[#696969]/25 text-[#696969] flex items-center justify-center">dimgray	#696969</div>
    <div class="border border-sky-50"><div class="border border-[#808080] bg-[#808080]/25 text-[#808080] flex items-center justify-center">gray #808080</div></div>
    <div class="border border-[#778899] bg-[#778899]/25 text-[#778899] flex items-center justify-center">lightslategray	#778899</div>
    <div class="border border-[#708090] bg-[#708090]/25 text-[#708090] flex items-center justify-center">slategray #708090</div>
    <div class="border border-[#2F4F4F] bg-[#2F4F4F]/25 text-[#2F4F4F] flex items-center justify-center">darkslategray	#2F4F4F</div>
    <div class="border border-[#000000] bg-[#000000]/25 text-[#000000] flex items-center justify-center">black	#000000</div>
</div>
</div>

















</template>
