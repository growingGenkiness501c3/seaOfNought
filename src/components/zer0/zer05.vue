<script setup lang="ts">
import clock from "@/components/Clock.vue"

defineOptions({
name: "zer05"
});
</script>
<template>

<div class="bg-gray-950/75 p-2">
  <div class="hubot-sans text-neutral-950 bg-yellow-100 text-[18px]">allostasissy@gmail.com
  </div>
  <div><span class="text-[17px] orbitron text-fuchsia-100"><span class="text-[11px]">an</span> Ecclesiastical approach</span>
  </div>
  <div><span class="text-[17px] orbitron text-fuchsia-100"><span class="text-[11px]">to</span> Allostatic Regulation</span>
  </div>
  <div><span class="text-[18px] hubot-sans text-sky-200">Do I have the self-discipline and mental acuity to stay alive in a world that wants me dead?</span>
  </div>
  <div><span class="text-[15px] hubot-sans text-sky-200">mental acuity</span>
  </div>
  <div><span class="text-[15px] hubot-sans text-sky-200"> the ability to hear, see, & think accurately and clearly</span>
  </div><br>
  <div  class="hubot-sans bg-neutral-400 text-sky-950 text-[27px]"><strong>allostasissy.studio</strong>
  </div>
          <nav class="border border-zinc-500 gap-1 p-1 flex items-center justify-center  text-[27px]">
          <RouterLink class="p-1 text-zinc-500 hover:text-yellow-200 border border-zinc-500 cursor-pointer" 
          to="/zincVue"><div>🛒 <br>zinc</div></RouterLink> 
          <RouterLink class="p-1 text-gray-500 hover:text-yellow-200 border border-gray-500 cursor-pointer" 
          to="/grayVue"><div>🧷 <br>gray</div></RouterLink> 
          <RouterLink class="p-1 text-neutral-500 hover:text-yellow-200 border border-neutral-500 cursor-pointer " 
          to="/neutralVue"><div>📺 <br>neutral</div></RouterLink>  
          <RouterLink class="p-1 text-slate-500 hover:text-yellow-200 border border-slate-500 cursor-pointer" 
          to="/slateVue"><div>🐃 <br>slate</div></RouterLink>  
          <RouterLink class="p-1 text-stone-500 hover:text-yellow-200 border border-stone-500 cursor-pointer" 
          to="/stoneVue"><div>🧱 <br>stone</div></RouterLink> 
          </nav>
  <br>
  <div  class="hubot-sans bg-neutral-400 text-sky-950 text-[29px]"><strong>allostasissy.com</strong>
  </div>
          <nav class="border border-yellow-500 gap-1 p-1 flex items-center justify-center text-[27px]">
          <RouterLink class="p-1 text-yellow-500 hover:text-yellow-200 border border-yellow-500 cursor-pointer" 
          to="/yellowVue">⚜️ <br>yellow</RouterLink>  
          </nav>
  <br>
          <nav class="border border-red-500 gap-1 p-1 flex items-center justify-center text-[27px]">
          <RouterLink class="p-1 text-fuchsia-500 hover:text-yellow-200 border border-fuchsia-500 cursor-pointer" 
          to="/fuchsiaVue">🧠 <br>fuchsia</RouterLink>  
          <RouterLink class="p-1 text-red-500 hover:text-yellow-200 border border-red-500 cursor-pointer" 
          to="/redVue">🛑 <br>red</RouterLink>  
          <RouterLink class="p-1 text-rose-500 hover:text-yellow-200 border border-rose-500 cursor-pointer" 
          to="/roseVue">🌹 <br>rose</RouterLink> 
          <RouterLink class="p-1 text-pink-500 hover:text-yellow-200 border border-pink-500 cursor-pointer" 
          to="/pinkVue">🐷 <br>pink<br>CBT</RouterLink>            
          </nav>
  <br>
          <nav class="border border-blue-500 gap-1 p-1 flex items-center justify-center text-[27px]">
          <RouterLink class="p-1 text-sky-500 hover:text-blue-200 border border-blue-500 cursor-pointer" 
          to="/blueVue">🛹 <br>blue</RouterLink>  
          <RouterLink class="p-1 text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
          to="/cyanVue">🧩 <br>cyan</RouterLink>  
          <RouterLink class="p-1 text-sky-500 hover:text-yellow-200 border border-sky-500 cursor-pointer" 
          to="/skyVue">🌃 <br>sky</RouterLink> 
          <RouterLink class="p-1 text-teal-500 hover:text-yellow-200 border border-teal-500 cursor-pointer" 
          to="/tealVue">🔰 <br>teal</RouterLink>               
          </nav><br>
  <div  class="hubot-sans bg-neutral-400 text-sky-950 text-[29px]"><strong>allostasissy.org</strong>
  </div>
          <nav class="border border-orange-500 text-orange-500 gap-1 p-1 flex items-center justify-center gap-1 text-[27px]" >
          <RouterLink class="p-1 text-orange-500 hover:text-yellow-200 border border-orange-500 cursor-pointer" 
          to="/orangeVue">🏀 <br>orange</RouterLink>  
          <RouterLink class="p-1 border border-amber-500 text-amber-500 hover:text-amber-500 cursor-pointer" 
          to="/amberVue"><i class="material-icons  hover:text-sky-50" style="font-size: 11px">filter_center_focus</i> 🛕 <i class="material-icons  hover:text-sky-50" style="font-size: 11px">filter_center_focus</i><br>amber</RouterLink>             
          </nav>
  <br>
          <nav class="border border-purple-500 text-purple-500 gap-1 p-1 flex items-center justify-center text-[27px]" >
          <RouterLink class="p-1 border-purple-500 text-purple-500 hover:text-yellow-200 border cursor-pointer" 
          to="/purpleVue">🛍️ <br>purple<br>CGBT</RouterLink>             
          <RouterLink class="p-1 text-indigo-500 hover:text-yellow-200 border border-indigo-500 cursor-pointer" 
          to="/indigoVue">🎵 <br>indigo</RouterLink> 
          <RouterLink class="p-1 text-violet-500 hover:text-yellow-200 border border-violet-500 cursor-pointer" 
          to="/violetVue">☔ <br>violet</RouterLink>  
          </nav>
  <br>  
          <nav class="border border-green-500 text-green-500 gap-1 p-1 flex items-center justify-center text-[27px]" >
          <RouterLink class="p-1 text-green-500 hover:text-yellow-200 border border-green-500 cursor-pointer" 
          to="/greenVue">💲 <br>green</RouterLink> 
          <RouterLink class="p-1 text-lime-500 hover:text-yellow-200 border border-lime-500 cursor-pointer" 
          to="/limeVue">🦗 <br>lime</RouterLink>              
          <RouterLink class="p-1 text-emerald-500 hover:text-yellow-200 border border-emerald-500 cursor-pointer" 
          to="/emeraldVue">🦎 <br>emerald</RouterLink> 
          </nav>

</div>
<div><clock /></div>
    <br><div>
     <div class="alumni-sans-pinstripe-regular  text-[11px] grid grid-cols-[repeat(1,minmax(0,1fr))] gap-2 p-4 bg-sky-950/50">

      <div> <br><img src="/color/BWG circles.png" class="w-55 object-cover rounded-md rotate-180" /></div>
      <div> <br><img src="/color/YRB-Paint.png" class="h-55 object-cover rounded-md" /></div>
      <div> <br><img src="/color/RGB-Additive.png" class="w-55 object-cover rounded-md" /></div>
      <div> <br><img src="/color/YMC-Subtractive.png" class="w-55 object-cover rounded-md" /></div>
    </div></div>



</template>
