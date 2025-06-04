<script setup lang="ts">
import skyTop from "@/components/color/skyTop.vue"
import skyBottom from "@/components/color/skyBottom.vue"
import NavigationBar from "@/components/NavigationBar.vue"
import backgroundImages from "@/components/color/backgroundImages.vue"
import clock from "@/components/Clock.vue"
import routerBar from "@/components/routerBar.vue"
import hsl60Bar from "@/components/color/hsl60Bar.vue"
import { RouterLink, RouterView } from "vue-router"
import TailwindColorNameBar from "@/components/color/tailwindColorNameBar.vue"
import wccScaffolding from "@/views/wccScaffolding.vue"
import amberComponent from "@/components/color/tailwindColors/amberComponent.vue"
import limeComponent from "@/components/color/tailwindColors/limeComponent.vue"
import grayComponent from "@/components/color/tailwindColors/grayComponent.vue"
import routerFlexBar from "./components/menus/routerFlexBar.vue"
import routerEverythingFlexBar from "./components/menus/routerEverythingFlexBar.vue"

</script>
<template>
<backgroundImages><br><br>
<nav>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <RouterLink class="p-1 text-sky-300 text-[22px] hover:sky-950 " to="/">  <i class="material-icons hover:text-sky-50" style="font-size: 55px">album</i></RouterLink> <RouterLink class="p-1 text-sky-300 text-[22px]" to="/routerEverythingFlexBar">  <i class="material-icons  hover:text-sky-50" style="font-size: 55px">developer_board</i></RouterLink> <RouterLink class="text-[55px]" to="/wccScaffolding">🐢</RouterLink></nav>
<center><dfn class="updock-regular text-pink-100 text-[99px]">falsus in uno, falsus in omnibus</dfn></center>
<center><dfn class="updock-regular text-teal-100 text-[99px]">no one lies better than a Christian</dfn></center>
<center class="w-full text-[55px] gap-1 p-1 flex items-center justify-center">
  <div class="border border-stone-500 p-1"><a class="text-stone-50" href="https://allostasissy.squarespace.com/config/pages/683a8b78429bfc5167849479" target="_blank" rel="noopener noreferrer"> 🧱 </a></div>
  <div class="border border-stone-50  p-1"><a class="text-stone-50" href="https://www.chase.com/?jp_pet=tnt-11070a&"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-100  p-1"><a class="text-stone-100" href="https://allostasissy.squarespace.com/config/pages/683a8b78429bfc5167849479"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-200  p-1"><a class="text-stone-200" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-300  p-1"><a class="text-stone-300" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-400  p-1"><a class="text-stone-400" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-500  p-1"><a class="text-stone-500" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-600  p-1"><a class="text-stone-600" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-700  p-1"><a class="text-stone-700" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-800  p-1"><a class="text-stone-800" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-900  p-1"><a class="text-stone-900" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>
  <div class="border border-stone-950  p-1"><a class="text-stone-950" href="https://allostasissy.squarespace.com/config/"  target="_blank" rel="noopener noreferrer"> ⬤ </a></div>  
</center><br>
    <br><center>
     <div class="alumni-sans-pinstripe-regular  text-[11px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-2 p-4 bg-sky-950/50">

      <div> <br><img src="/color/BWG circles.png" class="w-33 object-cover rounded-md rotate-180" /></div>
      <div> <br><img src="/color/YRB-Paint.png" class="h-33 object-cover rounded-md" /></div>
      <div> <br><img src="/color/RGB-Additive.png" class="w-33 object-cover rounded-md" /></div>
      <div> <br><img src="/color/YMC-Subtractive.png" class="w-33 object-cover rounded-md" /></div>
    </div></center>
<br>
<div class="bg-sky-300/30">
  <center class="anonymous-pro-regular text-[11px]">
    <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full gap-1 p-1 text-center flex items-center justify-center">
      <div></div>
      <div style="border-color: yellow; color: yellow; background-color: #ffff0040;" class="border">yellow<br>physical</div>
      <div style="border-color: orange; color: orange; background-color: #ffa50040;" class="border">orange<br>occupational</div>
      <div style="border-color: red; color: red; background-color: #ff000040;" class="border">red<br>emotional</div>
      <div style="border-color: purple; color: purple; background-color: #80008040;" class="border">purple<br>intellectual</div>
      <div style="border-color: blue; color: blue; background-color: #0000ff40;" class="border">blue<br>social</div>
      <div style="border-color: green; color: green; background-color: #00800040;" class="border">green<br>environmental</div>
      <div style="border-color: white; color: white; background-color: #ffffff40;" class="border">white<br>spiritual</div>
      <div style="border-color: black; color: black; background-color: #00000040;" class="border"><strong>black<br>factual</strong></div>
      <div style="border-color: gray; color: gray; background-color: #80808040;" class="border">gray<br>nutritional</div>
      <div style="border-color: pink; color: pink; background-color: #ffc0cb40;" class="border">pink<br>generational</div>
      <div style="border-color: cyan; color: cyan; background-color: #00ffff40;" class="border">cyan<br>miscellaneal</div>
      <div style="border-color: brown; color: brown; background-color: #a52a2a40;" class="border">brown<br>punctuational</div>
      <div style="border-color: pink; color: pink; background-color: #808080;" class="border"><strong>pink<br> ( on )<br> gray</strong></div>
      <div style="border-color: white; color: black; background-color: #ffffff;" class="border"><strong>black <br>{ on }<br> white</strong></div>
      <div style="border-color: black; color: white; background-color: #000000;" class="border"><strong>white <br>[ on ]<br> black</strong></div>
      <div></div>
    </div>
  </center>
  <center class="anonymous-pro-regular text-[11px]">
    <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] gap-1 p-1  text-center flex items-center justify-center">
      <div></div>
      <div>
        <RouterLink class="p-1 bg-[#ffff0040] text-[#ffff00ff] hover:text-sky-200 border border-[#ffff00ff] cursor-pointer" 
        to="/">ffff0040</RouterLink>    
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffa50040] text-[#ffa500ff] hover:text-sky-200 border border-[#ffa500ff] cursor-pointer" 
        to="/orientation">ffa50040</RouterLink>         
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ff000040] text-[#ff0000ff] hover:text-sky-200 border border-[#ff0000ff] cursor-pointer" 
        to="/anchor">ff000040</RouterLink>       
      </div>
      <div>
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 bg-[#80008040] text-[#800080] hover:text-sky-200 border border-[#800080] cursor-pointer" target="_blank" rel="noopener noreferrer">80008040</a>                
      </div>
      <div>
        <RouterLink class="p-1 bg-[#0000ff40] text-[#0000ff] hover:text-sky-200 border border-[#0000ff] cursor-pointer" 
        to="/vocabulary">0000ff40</RouterLink>        
      </div>
      <div>
        <RouterLink class="p-1 bg-[#00800040] text-[#008000] hover:text-sky-200 border border-[#008000] cursor-pointer" 
        to="/check">00800040</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffffff40] text-[#ffffff] hover:text-sky-200 border border-[#ffffff] cursor-pointer" 
        to="/royalwe">ffffff40</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#00000040] text-[#000000] hover:text-sky-200 border border-[#00000040]  cursor-pointer" 
        to="/forecastle">00000040</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1  bg-[#80808040] text-[#808080] hover:text-sky-200 border border-[#808080]   cursor-pointer" 
        to="/dailies">808080</RouterLink>  
      </div>
      <div>
        <RouterLink class="p-1  bg-[#ffc0cb40] text-[#ffc0cb] hover:text-sky-200 border border-[#ffc0cb]   cursor-pointer" 
        to="/">ffc0cb40</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1   bg-[#00ffff40] text-[#00ffff] hover:text-sky-200 border border-[#00ffff]   cursor-pointer" 
        to="/">00ffff40</RouterLink>              
      </div>
      <div>
        <RouterLink class="p-1  bg-[#a52a2a40] text-[#a52a2a] hover:text-sky-200 border border-[#a52a2a]  cursor-pointer" 
        to="/library">a52a2a40</RouterLink>                 
      </div>
      <div>
        <RouterLink class="p-1 bg-[#808080]  text-[44px] text-[#ffc0cb] hover:text-sky-500 border border-[#ffc0cb] cursor-pointer" 
        to="/exhibits"><i class="material-icons" style="font-size: 33px">accessibility</i></RouterLink>        
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffffff]  text-[44px] text-[#000000] hover:text-sky-500 border border-[#000000] cursor-pointer" 
        to="/"><i class="material-icons" style="font-size: 33px">accessibility</i></RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#000000]  text-[44px] text-[#ffffff] hover:text-sky-500 border border-[#ffffff] cursor-pointer" 
          to="/royalwethepeople"><i class="material-icons" style="font-size: 33px">accessibility</i></RouterLink>         
        </div>
        <div></div>
    </div>
  </center>
  <center class="anonymous-pro-regular text-[55px]">
    <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] gap-1 p-1  text-center flex items-center justify-center">
      <div></div>
      <div>
        <RouterLink class="p-1 bg-[#ffff0040] text-[#ffff00ff] hover:text-sky-200 border border-[#ffff00ff] cursor-pointer" 
        to="/">📓</RouterLink>    
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffa50040] text-[#ffa500ff] hover:text-sky-200 border border-[#ffa500ff] cursor-pointer" 
        to="/orientation">📐</RouterLink>         
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ff000040] text-[#ff0000ff] hover:text-sky-200 border border-[#ff0000ff] cursor-pointer" 
        to="/anchor">🛠</RouterLink>       
      </div>
      <div>
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 bg-[#80008040] text-[#800080] hover:text-sky-200 border border-[#800080] cursor-pointer" target="_blank" rel="noopener noreferrer">👌</a>                
      </div>
      <div>
        <RouterLink class="p-1 bg-[#0000ff40] text-[#0000ff] hover:text-sky-200 border border-[#0000ff] cursor-pointer" 
        to="/vocabulary">📖</RouterLink>        
      </div>
      <div>
        <RouterLink class="p-1 bg-[#00800040] text-[#008000] hover:text-sky-200 border border-[#008000] cursor-pointer" 
        to="/check">✅</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffffff40] text-[#ffffff] hover:text-sky-200 border border-[#ffffff] cursor-pointer" 
        to="/royalwe">👑</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#00000040] text-[#000000] hover:text-sky-200 border border-[#00000040]  cursor-pointer" 
        to="/forecastle">📊</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1  bg-[#80808040] text-[#808080] hover:text-sky-200 border border-[#808080]   cursor-pointer" 
        to="/dailies">🎬</RouterLink>  
      </div>
      <div>
        <RouterLink class="p-1  bg-[#ffc0cb40] text-[#ffc0cb] hover:text-sky-200 border border-[#ffc0cb]   cursor-pointer" 
        to="/">💬</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1   bg-[#00ffff40] text-[#00ffff] hover:text-sky-200 border border-[#00ffff]   cursor-pointer" 
        to="/">📁</RouterLink>              
      </div>
      <div>
        <RouterLink class="p-1  bg-[#a52a2a40] text-[#a52a2a] hover:text-sky-200 border border-[#a52a2a]  cursor-pointer" 
        to="/library">🏛️</RouterLink>                 
      </div>
      <div>
        <RouterLink class="p-1 bg-[#808080] text-[#ffc0cb] hover:text-sky-200 border border-[#ffc0cb] cursor-pointer" 
        to="/exhibits">🎪</RouterLink>        
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffffff] text-[#000000] hover:text-sky-200 border border-[#000000] cursor-pointer" 
        to="/">🥰</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#000000] text-[#ffffff] hover:text-sky-200 border border-[#ffffff] cursor-pointer" 
          to="/royalwethepeople">🗽</RouterLink>         
        </div>
        <div></div>
    </div>
  </center>
  <center class="anonymous-pro-regular text-[22px]">
    <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] gap-1 p-1 text-center flex items-center justify-center">
      <div></div>
      <div>
        <RouterLink class="p-1 bg-[#ffff0040] text-[#ffff00ff] hover:text-sky-200 border border-[#ffff00ff] cursor-pointer" 
        to="/">/</RouterLink>    
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffa50040] text-[#ffa500ff] hover:text-sky-200 border border-[#ffa500ff] cursor-pointer" 
        to="/orientation">/orientation</RouterLink>         
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ff000040] text-[#ff0000ff] hover:text-sky-200 border border-[#ff0000ff] cursor-pointer" 
        to="/anchor">/anchor</RouterLink>       
      </div>
      <div>
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 bg-[#80008040] text-[#800080] hover:text-sky-200 border border-[#800080] cursor-pointer" target="_blank" rel="noopener noreferrer">perfection</a>                
      </div>
      <div>
        <RouterLink class="p-1 bg-[#0000ff40] text-[#0000ff] hover:text-sky-200 border border-[#0000ff] cursor-pointer" 
        to="/vocabulary">/vocabulary</RouterLink>        
      </div>
      <div>
        <RouterLink class="p-1 bg-[#00800040] text-[#008000] hover:text-sky-200 border border-[#008000] cursor-pointer" 
        to="/check">/check</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffffff40] text-[#ffffff] hover:text-sky-200 border border-[#ffffff] cursor-pointer" 
        to="/royalwe">/royalwe</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#00000040] text-[#000000] hover:text-sky-200 border border-[#00000040]  cursor-pointer" 
        to="/forecastle">/forecastle</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1  bg-[#80808040] text-[#808080] hover:text-sky-200 border border-[#808080]   cursor-pointer" 
        to="/dailies">/dailies</RouterLink>  
      </div>
      <div>
        <RouterLink class="p-1  bg-[#ffc0cb40] text-[#ffc0cb] hover:text-sky-200 border border-[#ffc0cb]   cursor-pointer" 
        to="/">/</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1   bg-[#00ffff40] text-[#00ffff] hover:text-sky-200 border border-[#00ffff]   cursor-pointer" 
        to="/">/</RouterLink>              
      </div>
      <div>
        <RouterLink class="p-1  bg-[#a52a2a40] text-[#a52a2a] hover:text-sky-200 border border-[#a52a2a]  cursor-pointer" 
        to="/library">/library</RouterLink>                 
      </div>
      <div>
        <RouterLink class="p-1 bg-[#808080] text-[#ffc0cb] hover:text-sky-200 border border-[#ffc0cb] cursor-pointer" 
        to="/exhibits">/exhibits</RouterLink>        
      </div>
      <div>
        <RouterLink class="p-1 bg-[#ffffff] text-[#000000] hover:text-sky-200 border border-[#000000] cursor-pointer" 
        to="/">/</RouterLink>       
      </div>
      <div>
        <RouterLink class="p-1 bg-[#000000] text-[#ffffff] hover:text-sky-200 border border-[#ffffff] cursor-pointer" 
          to="/royalwethepeople">/royalwethepeople</RouterLink>         
        </div>
        <div></div>
    </div>    
  </center>
</div>
<br>
<div class="grid grid-cols-[1fr_2fr_1fr_1fr_4fr] gap-4 w-77">
  <div class="bg-gray-950/75 p-2"><br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br>⬤<br></div>
  <div class="bg-gray-950/75 p-2 w-99">
<div class="flex gap-4 p-4">
  <div class="flex-1"><br>
    <center>
        <div class="gap-1 p-1 flex items-center justify-center ">
          <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center border border-zinc-500 bg-zinc-500/0 g">
            <div class="border border-zinc-500 bg-zinc-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
              <RouterLink class="p-2.5; text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer text-[11px]" to="/zincVue">🛒</RouterLink> 
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-50 hover:text-yellow-200 border border-zinc-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-100 hover:text-yellow-200 border border-zinc-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-200 hover:text-yellow-200 border border-zinc-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-300 hover:text-yellow-200 border border-zinc-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-400 hover:text-yellow-200 border border-zinc-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-600 hover:text-yellow-200 border border-zinc-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-700 hover:text-yellow-200 border border-zinc-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-800 hover:text-yellow-200 border border-zinc-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-900 hover:text-yellow-200 border border-zinc-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-zinc-950 hover:text-yellow-200 border border-zinc-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
            </div>
            <div class="border border-gray-500 bg-gray-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
              <RouterLink class="p-2.5; text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer text-[11px]" to="/grayVue">🧷</RouterLink> 
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-50 hover:text-yellow-200 border border-gray-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-100 hover:text-yellow-200 border border-gray-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-200 hover:text-yellow-200 border border-gray-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-300 hover:text-yellow-200 border border-gray-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-400 hover:text-yellow-200 border border-gray-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-600 hover:text-yellow-200 border border-gray-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-700 hover:text-yellow-200 border border-gray-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-800 hover:text-yellow-200 border border-gray-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-900 hover:text-yellow-200 border border-gray-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-gray-950 hover:text-yellow-200 border border-gray-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
            </div>
            <div class="border border-neutral-500 bg-neutral-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
              <RouterLink class="p-2.5; text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer text-[11px]" to="/neutralVue">📺</RouterLink> 
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-50 hover:text-yellow-200 border border-neutral-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-100 hover:text-yellow-200 border border-neutral-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-200 hover:text-yellow-200 border border-neutral-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-300 hover:text-yellow-200 border border-neutral-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-400 hover:text-yellow-200 border border-neutral-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-600 hover:text-yellow-200 border border-neutral-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-700 hover:text-yellow-200 border border-neutral-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-800 hover:text-yellow-200 border border-neutral-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-900 hover:text-yellow-200 border border-neutral-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-neutral-950 hover:text-yellow-200 border border-neutral-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
            </div>
            <div class="border border-slate-500 bg-slate-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
              <RouterLink class="p-2.5; text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer text-[11px]" to="/grayVue">🐃</RouterLink> 
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-50 hover:text-yellow-200 border border-slate-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-100 hover:text-yellow-200 border border-slate-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-200 hover:text-yellow-200 border border-slate-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-300 hover:text-yellow-200 border border-slate-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-400 hover:text-yellow-200 border border-slate-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-600 hover:text-yellow-200 border border-slate-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-700 hover:text-yellow-200 border border-slate-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-800 hover:text-yellow-200 border border-slate-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-900 hover:text-yellow-200 border border-slate-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-slate-950 hover:text-yellow-200 border border-slate-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
            </div>
            <div class="border border-stone-500 bg-stone-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
              <RouterLink class="p-2.5; text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer text-[11px]" to="/stoneVue">🧱</RouterLink> 
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-50 hover:text-yellow-200 border border-stone-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-100 hover:text-yellow-200 border border-stone-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-200 hover:text-yellow-200 border border-stone-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-300 hover:text-yellow-200 border border-stone-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-400 hover:text-yellow-200 border border-stone-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-600 hover:text-yellow-200 border border-stone-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-700 hover:text-yellow-200 border border-stone-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-800 hover:text-yellow-200 border border-stone-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-900 hover:text-yellow-200 border border-stone-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
              <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-stone-950 hover:text-yellow-200 border border-stone-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
            </div>                
          </div>  
        </div>
    </center>
  </div>
</div>
<div class="flex gap-4 p-4">
  <div class="flex-1">

        <div class="gap-1 p-1 flex items-center justify-center ">
          <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center border border-zinc-500 bg-zinc-500/0">
        <div class="border border-yellow-500 bg-yellow-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer text-[11px]" to="/yellowVue">⚜️</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-50 hover:text-yellow-200 border border-yellow-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-100 hover:text-yellow-200 border border-yellow-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-300 hover:text-yellow-200 border border-yellow-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-400 hover:text-yellow-200 border border-yellow-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-600 hover:text-yellow-200 border border-yellow-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-700 hover:text-yellow-200 border border-yellow-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-800 hover:text-yellow-200 border border-yellow-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-900 hover:text-yellow-200 border border-yellow-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-yellow-950 hover:text-yellow-200 border border-yellow-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
      </div>  
      <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center border border-fuchsia-500 bg-fuchsia-500/0 g">
        <div class="border border-fuchsia-500 bg-fuchsia-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer text-[11px]" to="/fuchsiaVue">🧠</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-50 hover:text-yellow-200 border border-fuchsia-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-100 hover:text-yellow-200 border border-fuchsia-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-200 hover:text-yellow-200 border border-fuchsia-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-300 hover:text-yellow-200 border border-fuchsia-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-400 hover:text-yellow-200 border border-fuchsia-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-600 hover:text-yellow-200 border border-fuchsia-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-700 hover:text-yellow-200 border border-fuchsia-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-800 hover:text-yellow-200 border border-fuchsia-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-900 hover:text-yellow-200 border border-fuchsia-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-fuchsia-950 hover:text-yellow-200 border border-fuchsia-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-red-500 bg-red-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer text-[11px]" to="/redVue">🛑</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-50 hover:text-yellow-200 border border-red-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-100 hover:text-yellow-200 border border-red-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-200 hover:text-yellow-200 border border-red-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-300 hover:text-yellow-200 border border-red-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-400 hover:text-yellow-200 border border-red-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-600 hover:text-yellow-200 border border-red-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-700 hover:text-yellow-200 border border-red-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-800 hover:text-yellow-200 border border-red-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-900 hover:text-yellow-200 border border-red-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-red-950 hover:text-yellow-200 border border-red-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-rose-500 bg-rose-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer text-[11px]" to="/roseVue">🌹</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-50 hover:text-yellow-200 border border-rose-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-100 hover:text-yellow-200 border border-rose-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-200 hover:text-yellow-200 border border-rose-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-300 hover:text-yellow-200 border border-rose-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-400 hover:text-yellow-200 border border-rose-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-600 hover:text-yellow-200 border border-rose-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-700 hover:text-yellow-200 border border-rose-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-800 hover:text-yellow-200 border border-rose-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-900 hover:text-yellow-200 border border-rose-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-rose-950 hover:text-yellow-200 border border-rose-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-pink-500 bg-pink-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-pink-500 hover:text-yellow-200 border border-pink-500 cursor-pointer text-[11px]" to="/pinkVue">🐷</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-50 hover:text-yellow-200 border border-pink-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-100 hover:text-yellow-200 border border-pink-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-200 hover:text-yellow-200 border border-pink-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-300 hover:text-yellow-200 border border-pink-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-400 hover:text-yellow-200 border border-pink-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-500 hover:text-yellow-200 border border-pink-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-600 hover:text-yellow-200 border border-pink-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-700 hover:text-yellow-200 border border-pink-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-800 hover:text-yellow-200 border border-pink-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-900 hover:text-yellow-200 border border-pink-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-pink-950 hover:text-yellow-200 border border-pink-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
      </div>  
      <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center border border-cyan-500 bg-cyan-500/0 g">
        <div class="border border-cyan-500 bg-cyan-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-cyan-500 hover:text-yellow-200 border border-cyan-500 cursor-pointer text-[11px]" to="/cyanVue">🧩</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-50 hover:text-yellow-200 border border-cyan-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-100 hover:text-yellow-200 border border-cyan-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-200 hover:text-yellow-200 border border-cyan-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-300 hover:text-yellow-200 border border-cyan-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-400 hover:text-yellow-200 border border-cyan-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-500 hover:text-yellow-200 border border-cyan-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-600 hover:text-yellow-200 border border-cyan-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-700 hover:text-yellow-200 border border-cyan-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-800 hover:text-yellow-200 border border-cyan-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-900 hover:text-yellow-200 border border-cyan-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-cyan-950 hover:text-yellow-200 border border-cyan-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-blue-500 bg-blue-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-blue-500 hover:text-yellow-200 border border-blue-500 cursor-pointer text-[11px]" to="/blueVue">🛹</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-50 hover:text-yellow-200 border border-blue-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-100 hover:text-yellow-200 border border-blue-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-200 hover:text-yellow-200 border border-blue-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-300 hover:text-yellow-200 border border-blue-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-400 hover:text-yellow-200 border border-blue-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-500 hover:text-yellow-200 border border-blue-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-600 hover:text-yellow-200 border border-blue-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-700 hover:text-yellow-200 border border-blue-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-800 hover:text-yellow-200 border border-blue-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-900 hover:text-yellow-200 border border-blue-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-blue-950 hover:text-yellow-200 border border-blue-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-sky-500 bg-sky-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer text-[11px]" to="/skyVue">🌃</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-50 hover:text-yellow-200 border border-sky-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-100 hover:text-yellow-200 border border-sky-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-200 hover:text-yellow-200 border border-sky-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-300 hover:text-yellow-200 border border-sky-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-400 hover:text-yellow-200 border border-sky-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-600 hover:text-yellow-200 border border-sky-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-700 hover:text-yellow-200 border border-sky-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-800 hover:text-yellow-200 border border-sky-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-900 hover:text-yellow-200 border border-sky-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-sky-950 hover:text-yellow-200 border border-sky-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-teal-500 bg-teal-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer text-[11px]" to="/tealVue">🔰</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-50 hover:text-yellow-200 border border-teal-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-100 hover:text-yellow-200 border border-teal-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-200 hover:text-yellow-200 border border-teal-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-300 hover:text-yellow-200 border border-teal-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-400 hover:text-yellow-200 border border-teal-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-600 hover:text-yellow-200 border border-teal-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-700 hover:text-yellow-200 border border-teal-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-800 hover:text-yellow-200 border border-teal-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-900 hover:text-yellow-200 border border-teal-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-teal-950 hover:text-yellow-200 border border-teal-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
      </div>  
    </div>
  </div>
</div>
<div class="flex gap-4 p-4">
  <div class="flex-1">
    <div class="gap-1 p-1 flex items-center justify-center ">
      <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center border border-orange-500 bg-orange-500/0 g">
        <div class="border border-orange-500 bg-orange-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-orange-200 border border-orange-500 cursor-pointer text-[11px]" to="/yellowVue">🏀</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-50 hover:text-yellow-200 border border-orange-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-100 hover:text-yellow-200 border border-orange-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-200 hover:text-yellow-200 border border-orange-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-300 hover:text-yellow-200 border border-orange-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-400 hover:text-yellow-200 border border-orange-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-500 hover:text-yellow-200 border border-orange-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-600 hover:text-yellow-200 border border-orange-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-700 hover:text-yellow-200 border border-orange-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-800 hover:text-yellow-200 border border-orange-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-900 hover:text-yellow-200 border border-orange-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-orange-950 hover:text-yellow-200 border border-orange-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-amber-500 bg-amber-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-zinc-500 hover:text-amber-200 border border-amber-500 cursor-pointer text-[11px]" to="/amberVue">🛕</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-50 hover:text-yellow-200 border border-amber-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-100 hover:text-yellow-200 border border-amber-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-200 hover:text-yellow-200 border border-amber-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-300 hover:text-yellow-200 border border-amber-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-400 hover:text-yellow-200 border border-amber-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-500 hover:text-yellow-200 border border-amber-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-600 hover:text-yellow-200 border border-amber-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-700 hover:text-yellow-200 border border-amber-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-800 hover:text-yellow-200 border border-amber-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-900 hover:text-yellow-200 border border-amber-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-amber-950 hover:text-yellow-200 border border-amber-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>        
      </div>  
      <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center border border-purple-500 bg-purple-500/0 g">
        <div class="border border-purple-500 bg-purple-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-purple-500 hover:text-yellow-200 border border-purple-500 cursor-pointer text-[11px]" to="/purpleVue">🛍️</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-50 hover:text-yellow-200 border border-purple-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-100 hover:text-yellow-200 border border-purple-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-200 hover:text-yellow-200 border border-purple-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-300 hover:text-yellow-200 border border-purple-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-400 hover:text-yellow-200 border border-purple-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-500 hover:text-yellow-200 border border-purple-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-600 hover:text-yellow-200 border border-purple-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-700 hover:text-yellow-200 border border-purple-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-800 hover:text-yellow-200 border border-purple-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-900 hover:text-yellow-200 border border-purple-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-purple-950 hover:text-yellow-200 border border-purple-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-indigo-500 bg-indigo-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer text-[11px]" to="/indigoVue">🎵</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-50 hover:text-yellow-200 border border-indigo-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-100 hover:text-yellow-200 border border-indigo-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-200 hover:text-yellow-200 border border-indigo-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-300 hover:text-yellow-200 border border-indigo-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-400 hover:text-yellow-200 border border-indigo-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-600 hover:text-yellow-200 border border-indigo-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-700 hover:text-yellow-200 border border-indigo-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-800 hover:text-yellow-200 border border-indigo-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-900 hover:text-yellow-200 border border-indigo-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-indigo-950 hover:text-yellow-200 border border-indigo-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-violet-500 bg-violet-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer text-[11px]" to="/violetVue">☔</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-50 hover:text-yellow-200 border border-violet-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-100 hover:text-yellow-200 border border-violet-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-200 hover:text-yellow-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-300 hover:text-yellow-200 border border-violet-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-400 hover:text-yellow-200 border border-violet-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-600 hover:text-yellow-200 border border-violet-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-700 hover:text-yellow-200 border border-violet-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-800 hover:text-yellow-200 border border-violet-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-900 hover:text-yellow-200 border border-violet-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-violet-950 hover:text-yellow-200 border border-violet-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
      </div>  
      <div class="alumni-sans-pinstripe-regular text-[11px] gap-1 p-1 text-center flex items-center justify-center border border-lime-500 bg-lime-500/0 g">
        <div class="border border-lime-500 bg-lime-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer text-[11px]" to="/limeVue">🦗</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-50 hover:text-yellow-200 border border-lime-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-100 hover:text-yellow-200 border border-lime-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-200 hover:text-yellow-200 border border-lime-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-300 hover:text-yellow-200 border border-lime-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-400 hover:text-yellow-200 border border-lime-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-600 hover:text-yellow-200 border border-lime-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-700 hover:text-yellow-200 border border-lime-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-800 hover:text-yellow-200 border border-lime-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-900 hover:text-yellow-200 border border-lime-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-lime-950 hover:text-yellow-200 border border-lime-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-green-500 bg-green-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer text-[11px]" to="/cyanVue">💲</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-50 hover:text-yellow-200 border border-green-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-100 hover:text-yellow-200 border border-green-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-200 hover:text-yellow-200 border border-green-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-300 hover:text-yellow-200 border border-green-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-400 hover:text-yellow-200 border border-green-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-600 hover:text-yellow-200 border border-green-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-700 hover:text-yellow-200 border border-green-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-800 hover:text-yellow-200 border border-green-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-900 hover:text-yellow-200 border border-green-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-green-950 hover:text-yellow-200 border border-green-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
        <div class="border border-emerald-500 bg-emerald-500/0 gap-1 p-1 flex items-center justify-center alumni-sans-pinstripe-regular text-[5px] grid grid-cols-[repeat(1,minmax(0,1fr))] w-7 gap-1 p-1">
          <RouterLink class="p-2.5; text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer text-[11px]" to="/emeraldVue">🦎</RouterLink> 
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-50 hover:text-yellow-200 border border-emerald-50 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-100 hover:text-yellow-200 border border-emerald-100 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-200 hover:text-yellow-200 border border-emerald-200 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-300 hover:text-yellow-200 border border-emerald-300 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-400 hover:text-yellow-200 border border-emerald-400 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-600 hover:text-yellow-200 border border-emerald-600 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-700 hover:text-yellow-200 border border-emerald-700 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-800 hover:text-yellow-200 border border-emerald-800 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-900 hover:text-yellow-200 border border-emerald-900 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
          <div><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-1 gap-1 block text-emerald-950 hover:text-yellow-200 border border-emerald-950 cursor-pointer" target="_blank" rel="noopener noreferrer">⬤</a></div>
        </div>
      </div>  
    </div>
  </div>
  </div>
  </div>  
  <div class="bg-gray-950/75 p-2">
  
  <center  class="hubot-sans text-neutral-950 bg-yellow-100 text-[18px]">allostasissy@gmail.com</center>
  <center><span class="text-[17px] orbitron text-fuchsia-100"><span class="text-[11px]">an</span> Ecclesiastical approach</span></center>
  <center><span class="text-[17px] orbitron text-fuchsia-100"><span class="text-[11px]">to</span> Allostatic Regulation</span></center>
  <center><span class="text-[18px] hubot-sans text-sky-200">Do I have the self-discipline and mental acuity to stay alive in a world that wants me dead?</span></center>
  <center><span class="text-[15px] hubot-sans text-sky-200">mental acuity</span></center>
  <center><span class="text-[15px] hubot-sans text-sky-200"> the ability to hear, see, & think accurately and clearly</span></center><br>
  <center  class="hubot-sans bg-neutral-400 text-sky-950 text-[27px]"><strong>allostasissy.studio</strong></center>
  <nav class="border border-zinc-500 gap-1 p-1 flex items-center justify-center">
  <RouterLink class="p-1 text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer" 
  to="/zincVue">🛒 <br>zinc</RouterLink> 
  <RouterLink class="p-1 text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer" 
  to="/grayVue">🧷 <br>gray</RouterLink> 
  <RouterLink class="p-1 text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer" 
  to="/neutralVue">📺 <br>neutral</RouterLink>  
  <RouterLink class="p-1 text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer" 
  to="/slateVue">🐃 <br>slate</RouterLink>  
  <RouterLink class="p-1 text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer" 
  to="/stoneVue">🧱 <br>stone</RouterLink> 
  </nav>
  <br>
  <center  class="hubot-sans bg-neutral-400 text-sky-950 text-[29px]"><strong>allostasissy.com</strong></center>
  <nav class="border border-yellow-500 gap-1 p-1 flex items-center justify-center">
  <RouterLink class="p-1 text-yellow-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer" 
  to="/yellowVue">⚜️ <br>yellow</RouterLink>  
  </nav>
  <br>
  <nav class="border border-red-500 gap-1 p-1 flex items-center justify-center">
  <RouterLink class="p-1 text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer" 
  to="/fuchsiaVue">🧠 <br>fuchsia</RouterLink>  
  <RouterLink class="p-1 text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer" 
  to="/redVue">🛑 <br>red</RouterLink>  
  <RouterLink class="p-1 text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer" 
  to="/roseVue">🌹 <br>rose</RouterLink> 
  <RouterLink class="p-1 text-pink-500 hover:text-yellow-200 border border-pink-500 cursor-pointer" 
  to="/pinkVue">🐷 <br>pink</RouterLink>            
  </nav>
  <br>
  <nav class="border border-blue-500 gap-1 p-1 flex items-center justify-center">
  <RouterLink class="p-1 text-sky-500 hover:text-blue-200 border border-blue-500 cursor-pointer" 
  to="/blueVue">🛹 <br>blue</RouterLink>  
  <RouterLink class="p-1 text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
  to="/cyanVue">🧩 <br>cyan</RouterLink>  
  <RouterLink class="p-1 text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
  to="/skyVue">🌃 <br>sky</RouterLink> 
  <RouterLink class="p-1 text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer" 
  to="/tealVue">🔰 <br>teal</RouterLink>               
  </nav><br>
  <center  class="hubot-sans bg-neutral-400 text-sky-950 text-[29px]"><strong>allostasissy.org</strong></center>
  <nav class="border border-orange-500 text-orange-500 gap-1 p-1 flex items-center justify-center gap-1" >
  <RouterLink class="p-1 text-orange-500 hover:text-yellow-200 border border-orange-500 cursor-pointer" 
  to="/orangeVue">🏀 <br>orange</RouterLink>  
  <RouterLink class="p-1 border border-amber-500 text-amber-500 hover:text-amber-500 cursor-pointer" 
  to="/amberVue">🛕 <br>amber</RouterLink>             
  </nav>
  <br>
  <nav class="border border-purple-500 text-purple-500 gap-1 p-1 flex items-center justify-center" >
  <RouterLink class="p-1 border-purple-500 text-purple-500 hover:text-yellow-200 border cursor-pointer" 
  to="/purpleVue">🛍️ <br>purple</RouterLink>             
  <RouterLink class="p-1 text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer" 
  to="/indigoVue">🎵 <br>indigo</RouterLink> 
  <RouterLink class="p-1 text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer" 
  to="/violetVue">☔ <br>violet</RouterLink>  
  </nav>
  <br>  
  <nav class="border border-green-500 text-green-500 gap-1 p-1 flex items-center justify-center" >
  <RouterLink class="p-1 text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer" 
  to="/greenVue">💲 <br>green</RouterLink> 
  <RouterLink class="p-1 text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer" 
  to="/limeVue">🦗 <br>lime</RouterLink>              
  <RouterLink class="p-1 text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer" 
  to="/emeraldVue">🦎 <br>emerald</RouterLink> 
  </nav>
  </div>
  <div class="bg-gray-950/25 p-2 w-55">
    <br><br>
<div><clock /></div>
    <br><center>
     <div class="alumni-sans-pinstripe-regular  text-[11px] grid grid-cols-[repeat(1,minmax(0,1fr))] gap-2 p-4 bg-sky-950/50">

      <div> <br><img src="/color/BWG circles.png" class="w-33 object-cover rounded-md rotate-180" /></div>
      <div> <br><img src="/color/YRB-Paint.png" class="h-33 object-cover rounded-md" /></div>
      <div> <br><img src="/color/RGB-Additive.png" class="w-33 object-cover rounded-md" /></div>
      <div> <br><img src="/color/YMC-Subtractive.png" class="w-33 object-cover rounded-md" /></div>
    </div></center>

  </div>
  <div class="bg-sky-950/50 p-2 w-777">
    <center>
      <div class="text-xl"><skyTop /><skyTop /><br></div>
        <span  class="text-4xl">ن🖵無 </span><br>
          <RouterView />
        <span  class="text-4xl">無🖵ن </span><br>
      <span class="text-2xl"><skyBottom /><skyBottom /></span> 
    </center>
  </div>
</div>















<center>

<skyTop /><skyTop /><br>


<br><br><br><br><br><br><br><br><br><br><br><br>
<div class="text-xl"><skyTop /><skyTop /><br></div>
<skyTop /><skyTop /><br>
</center></backgroundImages>
<TailwindColorNameBar />
<routerBar class="text-[9px]" />
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
