<script setup lang="ts">
defineOptions({
  name: "gG01primary"
});
</script>
<template>

primary issues
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5">
    <div class="border border-sky-300 bg-yellow-500/30 text-yellow-500" >yellow
    </div>
    <div class="border border-sky-300 bg-red-500/30 text-red-500" >red
    </div>
    <div class="border border-sky-300 bg-blue-500/30 text-blue-500" >blue
    </div>
  </div>
  <br>  <br>  <br>
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5">
    <div class="border border-sky-300 bg-yellow-500/30 text-yellow-500 text-[55px] m" >physical
    </div>
    <div class="border border-sky-300 bg-red-500/30 text-red-500 text-[55px] m" >emotional
    </div>
    <div class="border border-sky-300 bg-blue-500/30 text-blue-500  text-[55px] m" >social
    </div>
  </div>  <br>  <br>  <br>  <br>
<div class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-2 p-4 text-[55px] mea-culpa-regular">
  <div class="text-[33px] mea-culpa-regular bg-slate-950">colorPaint</div>
  <div class="text-[33px] mea-culpa-regular bg-slate-950">colorLight</div>
  <div class="text-[33px] mea-culpa-regular bg-slate-950">colorPigment</div>
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5  text-center flex items-center justify-center">
    <div class="border border-sky-300 bg-yellow-500/30 text-yellow-500" >yellow
    </div>
    <div class="border border-sky-300 bg-red-500/30 text-red-500" >red
    </div>
    <div class="border border-sky-300 bg-blue-500/30 text-blue-500" >blue
    </div>
    <div></div>
    <div><div><img src="/color/YRB-Paint.png" class="h-22 object-cover rounded-md" /></div></div>
    <div></div>
  </div>
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5  text-center flex items-center justify-center">
    <div class="border border-sky-300 bg-red-500/30 text-red-500" >red
    </div>
    <div class="border border-sky-300 bg-green-500/30 text-green-500" >green
    </div>
    <div class="border border-sky-300 bg-blue-500/30 text-blue-500" >blue
    </div>
    <div></div>
    <div><div><img src="/color/RGB-Additive.png" class="h-22 object-cover rounded-md" /></div></div>
    <div></div>

  </div>
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5  text-center flex items-center justify-center">
    <div class="border border-sky-300 bg-yellow-500/30 text-yellow-500" >yellow
    </div>
    <div class="border border-sky-300 bg-fuchsia-500/30 text-fuchsia-500" >magenta
    </div>
    <div class="border border-sky-300 bg-cyan-500/30 text-cyan-500" >cyan
    </div>
    <div></div>
    <div> <div><img src="/color/YMC-Subtractive.png" class="h-22 object-cover rounded-md" /></div></div>
    <div></div>

  </div>
</div>
<br><br><br>





</template>