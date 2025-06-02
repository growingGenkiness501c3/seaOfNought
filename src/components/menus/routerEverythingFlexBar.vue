<script setup lang="ts">
import { createDocumentRegistry } from 'typescript';

defineOptions({
  name: "routerEverythingFlexBar"
});
</script>
<template>
  <center>
    <RouterLink class="p-2.5; text-amber-200 hover:text-amber-200 border border-amber-400 cursor-pointer" to="/wccScaffolding">| 🐢 wccScaffolding |</RouterLink>            
    <div class="alumni-sans-pinstripe-regular  text-[11px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-2 p-4 bg-sky-200/20">
      <div> mixing black and white</div>
      <div> mixing light</div>
      <div> mixing pigment</div>
      <div> mixing pigment</div>
      <div> <br><img src="/color/BWG circles.png" class="w-33 object-cover rounded-md rotate-180" /></div>
      <div> <br><img src="/color/YRB-Paint.png" class="h-33 object-cover rounded-md" /></div>
      <div> <br><img src="/color/RGB-Additive.png" class="w-33 object-cover rounded-md" /></div>
      <div> <br><img src="/color/YMC-Subtractive.png" class="w-33 object-cover rounded-md" /></div>
    </div>
    <div class="bg-neutral-700/50">
      <div class="alumni-sans-pinstripe-regular  text-[11px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-1 p-1">
        <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-1 p-1  text-center flex items-center justify-center">
          <div class="border border-slate-950 bg-slate-950/30 text-slate-950" ><strong>slate-950</strong>
          </div>
          <div class="border border-neutral-50 bg-neutral-50/30 text-neutral-50" ><strong>neutral-50</strong>
          </div>
          <div class="border border-gray-500 bg-gray-500/30 text-gray-500" ><strong>gray-500</strong>
          </div>
        </div>
        <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-1 p-1  text-center flex items-center justify-center">
          <div class="border border-bg-yellow-300 bg-yellow-300/30 text-yellow-300/50" >yellow-300
          </div>
          <div class="border border-red-500 bg-red-500/30 text-red-500" >red-500
          </div>
          <div class="border border-blue-700 bg-blue-700/30 text-blue-700" >blue-700
          </div>
        </div>
        <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-1 p-1  text-center flex items-center justify-center">
          <div class="border border-red-500 bg-red-500/30 text-red-500" >red-500
          </div>
          <div class="border border-green-500 bg-green-500/30 text-green-500" >green-500
          </div>
          <div class="border border-blue-700 bg-blue-700/30 text-blue-700" >blue-700
          </div>
        </div>
        <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-1 p-1  text-center flex items-center justify-center">
          <div class="border border-yellow-500 bg-yellow-500/30 text-yellow-500" >yellow-500
          </div>
          <div class="border border-fuchsia-500 bg-fuchsia-500/30 text-fuchsia-500" >fuchsia-500
          </div>
          <div class="border border-cyan-500 bg-cyan-500/30 text-cyan-500" >cyan-500
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <center class="border border-zinc-500 bg-zinc-500/50 gap-1 p-1 flex items-center justify-center">
    <div class="alumni-sans-pinstripe-regular text-[9px] gap-1 p-1 text-center flex items-center justify-center">
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-50 hover:text-yellow-200 border border-zinc-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 50</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-100 hover:text-yellow-200 border border-zinc-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 100</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-200 hover:text-yellow-200 border border-zinc-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 200</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-300 hover:text-yellow-200 border border-zinc-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 300</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-400 hover:text-yellow-200 border border-zinc-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 400</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 500</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-600 hover:text-yellow-200 border border-zinc-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 600</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-700 hover:text-yellow-200 border border-zinc-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 700</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-800 hover:text-yellow-200 border border-zinc-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 800</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-900 hover:text-yellow-200 border border-zinc-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 900</a>
      <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-950 hover:text-yellow-200 border border-zinc-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤ 950</a>
      
    </div>
    </center>

    <center>
    <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center">
      <nav class="border border-zinc-500 gap-1 p-1 flex items-center justify-center">
        <RouterLink class="p-2.5; text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer" 
          to="/zincVue">🛒 zinc</RouterLink> 
        <RouterLink class="p-2.5; text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer" 
          to="/grayVue">🧷 gray</RouterLink> 
        <RouterLink class="p-2.5; text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer" 
          to="/neutralVue">📺 neutral</RouterLink>  
        <RouterLink class="p-2.5; text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer" 
          to="/slateVue">🐃 slate</RouterLink>  
        <RouterLink class="p-2.5; text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer" 
          to="/stoneVue">🧱 stone</RouterLink> 
      </nav>
    </div>
    </center>
    <center>
      <div class="alumni-sans-pinstripe-regular  text-[11px] w-full gap-1 p-1 text-center flex items-center justify-center">
        <nav class="border border-yellow-500 gap-5 p-1 flex items-center justify-center">
          <RouterLink class="p-2.5; text-yellow-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer" 
            to="/yellowVue">⚜️ yellow</RouterLink>  
        </nav>
        <nav class="border border-fuchsia-500 gap-1 p-1 flex items-center justify-center">
          <RouterLink class="p-2.5; text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer" 
            to="/fuchsiaVue">🧠 fuchsia</RouterLink>  
          <RouterLink class="p-2.5; text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer" 
            to="/redVue">🛑 red</RouterLink>  
          <RouterLink class="p-2.5; text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer" 
          to="/roseVue">🌹 rose</RouterLink> 
        </nav>
        <nav class="border border-cyan-500 gap-1 p-1 flex items-center justify-center">
          <RouterLink class="p-2.5; text-sky-500 hover:text-blue-200 border border-blue-500 cursor-pointer" 
            to="/blueVue">🛹 blue</RouterLink>  
          <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
            to="/cyanVue">🧩 cyan</RouterLink>  
          <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
            to="/skyVue">🌃 sky</RouterLink> 
          <RouterLink class="p-2.5; text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer" 
            to="/tealVue">🔰 teal</RouterLink>               
        </nav>
      </div>
    </center>        
    <center  class="alumni-sans-pinstripe-regular  text-[11px]">
      <div class="flex items-center justify-center gap-1 p-1">
        <nav class="border border-orange-500 text-orange-500 gap-1 p-1 flex items-center justify-center gap-1" >
          <RouterLink class="p-2.5; text-orange-500 hover:text-yellow-200 border border-orange-500 cursor-pointer" 
            to="/orangeVue">🏀 orange</RouterLink>  
          <RouterLink class="p-2.5; border border-amber-500 text-amber-500 hover:text-amber-500 cursor-pointer" 
            to="/amberVue">🛕 amber</RouterLink>             
        </nav>
        <nav class="border border-purple-500 text-purple-500 gap-1 p-1 flex items-center justify-center" >
            <RouterLink class="p-2.5; border-purple-500 text-purple-500 hover:text-yellow-200 border cursor-pointer" 
              to="/purpleVue">🛍️ purple</RouterLink>             
            <RouterLink class="p-2.5; text-pink-500 hover:text-yellow-200 border border-pink-500 cursor-pointer" 
              to="/pinkVue">🐷 pink</RouterLink>  
            <RouterLink class="p-2.5; text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer" 
              to="/indigoVue">🎵 indigo</RouterLink> 
            <RouterLink class="p-2.5; text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer" 
              to="/violetVue">☔ violet</RouterLink>  
        </nav>
        <nav class="border border-green-500 text-green-500 gap-1 p-1 flex items-center justify-center" >
          <RouterLink class="p-2.5; text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer" 
            to="/greenVue">💲 green</RouterLink> 
          <RouterLink class="p-2.5; text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer" 
            to="/limeVue">🦗 lime</RouterLink>              
          <RouterLink class="p-2.5; text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer" 
            to="/emeraldVue">🦎 emerald</RouterLink> 
        </nav>
      </div>
    </center>  
  </center>
  <center class="alumni-sans-pinstripe-regular text-[11px]">
    <div class="grid grid-cols-[repeat(15,minmax(0,1fr))] w-full h-6 gap-1 p-1  text-center flex items-center justify-center">
      <div class="border border-yellow-300 bg-yellow-500/30 text-yellow-500" >yellow
      </div>
      <div class="border border-orange-300 bg-orange-500/30 text-orange-500" >orange
      </div>
      <div class="border border-red-300 bg-red-500/30 text-red-500" >red
      </div>
      <div class="border border-purple-300 bg-purple-500/30 text-purple-500" >purple
      </div>
      <div class="border border-blue-300 bg-blue-500/30 text-blue-500" >blue
      </div>
      <div class="border border-green-300 bg-green-500/30 text-green-500" >green
      </div>
      <div class="border border-white-300 bg-neutral-300/30 text-neutral-300" >white
      </div>
      <div class="border border-slate-300 bg-stone-950/30 text-stone-950" >black
      </div>
      <div class="border border-gray-300 bg-gray-500/30 text-gray-500" >gray
      </div>
      <div class="border border-pink-300 bg-pink-500/30 text-pink-500" >pink
      </div>
      <div class="border border-cyan-300 bg-cyan-500/30 text-cyan-500" >cyan
      </div>
      <div class="border border-amber-700 bg-amber-800/30 text-amber-800" >brown
      </div>
      <div class="border border-gray-500 bg-gray-500/30 text-[#FFC0CB]" ><strong>pink<br> on<br> gray</strong>
      </div>
      <div class="border border-neutral-300 bg-neutral-300/30 text-stone-950" ><strong>black <br>on<br> white</strong>
      </div>
      <div class="border border-stone-950 bg-stone-950/30 text-neutral-300" ><strong>white <br>on<br> black</strong>
      </div>
    </div>
    <br><br><br>
    <div class="alumni-sans-pinstripe-regular  text-[9px] grid grid-cols-[repeat(15,minmax(0,1fr))] w-full h-6 gap-1 p-1  text-center flex items-center justify-center">
      <div class="border border-stone-950 bg-stone-950/30 text-neutral-300" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
          to="/royalwethepeople">🗽</RouterLink>         
      
        </div>
      <div class="border border-neutral-300 bg-neutral-300/30 text-stone-950" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/">🥰</RouterLink>       
      </div>
      <div class="border border-gray-500 bg-gray-500/30 text-[#FFC0CB]" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/exhibits">🎪</RouterLink>        
      </div>

      <div class="border border-yellow-300 bg-yellow-500/30 text-yellow-500" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/">📓</RouterLink>      
      </div>
      <div class="border border-orange-300 bg-orange-500/30 text-orange-500" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/orientation">📐</RouterLink>         
      </div>
      <div class="border border-red-300 bg-red-500/30 text-red-500" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/anchor">🛠</RouterLink>       
      </div>
      <div class="border border-purple-300 bg-purple-500/30 text-purple-500" >
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" target="_blank" rel="noopener noreferrer">👌</a>                
      </div>
      <div class="border border-blue-300 bg-blue-500/30 text-blue-500" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/vocabulary">📖</RouterLink>        
      </div>
      <div class="border border-green-300 bg-green-500/30 text-green-500" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/check">✅</RouterLink>       
      </div>
      <div class="border border-white-300 bg-neutral-300/30 text-neutral-300">
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/royalwe">👑</RouterLink>       
      </div>
      <div class="border border-slate-300 bg-slate-950/30 text-stone-950" >
        <RouterLink class="p-2.5; text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer" 
        to="/forecastle">📊</RouterLink>       
      </div>
      <div class="border border-gray-300 bg-gray-500/30 text-gray-500" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/">📆</RouterLink>    
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/">📅</RouterLink>           
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/dailies">🎬</RouterLink>  
      </div>
      <div class="border border-pink-300 bg-pink-500/30 text-pink-500" >
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/">💬</RouterLink>       
      </div>
      <div class="border border-cyan-300 bg-cyan-500/30 text-cyan-500" >
  
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/">📁</RouterLink>              
      </div>
      <div class="border border-amber-700 bg-amber-800/30 text-amber-800" >
  
        <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
        to="/library">🏛️</RouterLink>                 
       
      </div>

    </div>    
    <br><br>    
  </center>
<br><hr><br>

  <center>
  <nav  class="flex flex-wrap items-center justify-center gap-3 p-10">
            
          
 
    
          
        
           
           
           
          
           
           
  </nav>
  </center>
<!--
<br><hr><br>    
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/amberVue"> | 🛕 amberVue |</RouterLink>       
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/blueVue"> | 🛹 blueVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/cyanVue"> | 🔰 cyanVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/emeraldVue"> | 🦎 emeraldVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/fuchsiaVue"> | 🧠 fuchsiaVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/grayVue"> | 🧷 grayVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/greenVue"> | 💲 greenVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/indigoVue"> | 🎵 indigoVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/limeVue"> | 🦗 limeVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/neutralVue"> | 📺 neutralVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/orangeVue"> | 🏀 orangeVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/pinkVue"> | 🐷 pinkVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/purpleVue"> | 🛍️ purpleVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/redVue"> | 🛑 redVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/roseVue"> | 🌹 roseVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/skyVue"> | 🌃 skyVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/slateVue"> | 🐃 slateVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/stoneVue"> | 🧱 stoneVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/tealVue"> | 🧩 tealVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/violetVue"> | ☔ violetVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/yellowVue"> | ⚜️ yellowVue |</RouterLink>  
    <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
    to="/zincVue"> | 🛒 zincVue |</RouterLink>  
    </nav> 
  </center>
-->
</template>
