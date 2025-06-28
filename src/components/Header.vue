
<script setup lang="ts">
import IkigaiBar from "@/components/IkigaiBar.vue"
import AllostasissyBar from "@/components/AllostasissyBar.vue"
defineOptions({
  name: "Header"
});
</script>
<template>
<div class="grid grid-cols-3 h-1">
  <div><hr><p class="text-right bg-[#0000ff80] text-[#fff]">right-aligned</p></div>
  <div class="place-items-center">
    <p class="text-center bg-[#ffff0080] text-[#000] text-[11px]">⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅</p>
  </div>
  <div><hr><p class="text-left bg-[#ff000080] text-[#fff]">left-aligned</p></div>
</div> 
<div class="flex flex-col items-center justify-top h-38">
  <div class="w-full text-center">
    <dfn class="updock-regular text-neutral-100 text-[33px]">falsus in uno, falsus in omnibus :: </dfn>
    &nbsp; &nbsp; &nbsp; &nbsp; best viewed at 100% and 3840x2160 &nbsp; &nbsp; &nbsp; &nbsp; 
    <dfn class="updock-regular text-neutral-100 text-[33px]"> :: no one lies better than a Christian</dfn>
  </div>
  <div class="w-full bg-neutral-400 text-sky-950 text-center text-[33px]">
    <span class="orbitron text-[33px]"><strong>allostasissy.studio </strong>||</span>
    <span class="rajdhani-bold"> [allosta{(sis)]sy}</span>
    <span class="updock-regular">&nbsp; ··· &nbsp; </span>
    <span class="text-[33px]">studio o<span class="text-[33px] mea-culpa-regular">f</span>&nbsp; </span>
    <span class="hubot-sans">(s<i class="material-icons" style="font-size: 33px">accessibility</i>s)</span>,
    <span class="updock-regular">{sissy}</span>,
    <span class="text-[33px]">&&nbsp; </span>
    <span class="orbitron text-[33px]">[allostasis]</span>
    <span class="updock-regular text-[33px]"><strong>&nbsp; ||</strong> growinggenkiness.me</span>
  </div>
  <div class="w-full hubot-sans text-neutral-950 bg-yellow-100 text-center text-[22px]">
    allostasissy@gmail.com
  </div>
  <div class="grid grid-cols-3 h-5">
    <div><p class="text-right bg-[#0000ff80] text-[#fff]">right-aligned</p></div>
    <div class="place-items-center">
      <p class="text-center bg-[#ffff0080] text-[#000] text-[11px]">⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅</p>
    </div>
    <div><p class="text-left bg-[#ff000080] text-[#fff]">left-aligned</p></div>
  </div> 
</div>
<!--
<div class="flex flex-col items-center justify-center h-55">
  <div class="text-center">
    <dfn class="updock-regular text-neutral-100 text-[33px]">falsus in uno, falsus in omnibus ::</dfn>
    <dfn class="updock-regular text-neutral-100 text-[33px]">:: no one lies better than a Christian</dfn>
    &nbsp; &nbsp; &nbsp; &nbsp; best viewed at 100% and 3840x2160
  </div>

  <div class="bg-neutral-400 text-sky-950 text-center text-[33px]">
    <span class="orbitron text-[33px]"><strong>allostasissy.studio</strong></span>
    <span class="rajdhani-bold"> [allosta{(sis)]sy}</span>
    <span class="text-[33px]">studio o<span class="text-[33px] mea-culpa-regular">f</span>&nbsp; </span>
    <span class="hubot-sans">(s<i class="material-icons" style="font-size: 33px">accessibility</i>s)</span>,
    <span class="updock-regular">{sissy}</span>,
    <span class="text-[33px]">&&nbsp; </span>
    <span class="orbitron text-[33px]">[allostasis]</span>
  </div>

  <div class="hubot-sans text-neutral-950 bg-yellow-100 text-center text-[33px]">
    allostasissy@gmail.com
  </div>
</div>

<div class="flex flex-col items-center justify-center h-55">
  <div><dfn class="updock-regular text-neutral-100 text-[33px]">falsus in uno, falsus in omnibus ::</dfn> <dfn class="updock-regular text-neutral-100 text-[33px]">:: no one lies better than a Christian</dfn> &nbsp; &nbsp; &nbsp; &nbsp; best viewed at 100% and 3840x2160  </div>
  <div class="bg-neutral-400 text-sky-950 text-[33px]"><span class="orbitron  text-[33px]"><strong>allostasissy.studio</strong></span> <span  class="rajdhani-bold"> [allosta{(sis)]sy}</span>  <span class="text-[33px]">studio o<span class="text-[33px] mea-culpa-regular">f</span>&nbsp; </span><span class="hubot-sans">(s<i class="material-icons" style="font-size: 33px">accessibility</i>s)</span>, <span class="updock-regular">{sissy}</span>, <span class="text-[33px]">&&nbsp; </span> <span class="orbitron text-[33px]">[allostasis]</span> </div>
  <div class="hubot-sans text-neutral-950 bg-yellow-100 text-[33px]">allostasissy@gmail.com</div>
</div>
<center>
  <dfn class="updock-regular text-neutral-100 text-[33px]">falsus in uno, falsus in omnibus ::</dfn> <dfn class="updock-regular text-neutral-100 text-[33px]">:: no one lies better than a Christian</dfn> &nbsp; &nbsp; &nbsp; &nbsp; best viewed at 100% and 3840x2160  </center>
  <center  class="hubot-sans text-neutral-950 bg-yellow-100 text-[33px]">allostasissy@gmail.com</center>
  <center class="bg-neutral-400 text-sky-950 text-[33px]"><span class="orbitron  text-[33px]"><strong>allostasissy.studio</strong></span> <span  class="rajdhani-bold"> [allosta{(sis)]sy}</span>  <span class="text-[33px]">studio o<span class="text-[33px] mea-culpa-regular">f</span>&nbsp; </span><span class="hubot-sans">(s<i class="material-icons" style="font-size: 33px">accessibility</i>s)</span>, <span class="updock-regular">{sissy}</span>, <span class="text-[33px]">&&nbsp; </span> <span class="orbitron text-[33px]">[allostasis]</span> 
</center>
-->

<div class="bg-[#00000077] w-full h-1">
  <img src="/unicorn.png" class="float-left w-22" />
  <p>thou sayeth</p> 
  <img src="/unicorn-inverted.png" class="float-right w-22" />
</div>
<div class="grid grid-cols-[1fr_1fr_1fr] h-33">
  <div class="flex items-center justify-center border border-gray-950 bg-gray-50/0 gap-1">
      <div> <img src="/color/YMC-Subtractive.png" class="w-33 object-cover rounded-md" /></div>
      <div> <img src="/color/RGB-Additive.png" class="w-33 object-cover rounded-md" /></div>
      <div> <img src="/color/YRB-Paint.png" class="w-33 object-cover rounded-md" /></div>
      <div> <img src="/color/BWG circles.png" class="w-33 object-cover rounded-md rotate-180" /></div>
      <!-- <div> <img src="/home.png" class="w-111 object-cover rounded-md" /></div>-->
    </div>
    <div class="grid grid-rows-[1fr_1fr] border border-gray-400 bg-gray-900/50 h-66">
      <IkigaiBar />
      <AllostasissyBar />
    </div>
  <div class="flex items-top justify-center border border-gray-950 bg-gray-50/50">
    <img src="/Allostatic_load_sketch.svg" class="h-33" alt="Description of image" />
  </div>
</div>
<br><br><br>


</template>
