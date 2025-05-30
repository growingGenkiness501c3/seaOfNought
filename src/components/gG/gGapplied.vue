<script setup lang="ts">
import age from '@/components/gG/age.vue'
import years from '@/components/gG/years.vue'
import planForPublicationForWCC from '@/components/gG/planForPublicationForWCC.vue'
import colorPaint from '@/components/gG/colorPaint.vue'
import colorLight from '@/components/gG/colorLight.vue'
import colorPigment from '@/components/gG/colorPigment.vue'
import seventeen from '@/components/gG/seventeen.vue'
import aiYellow from '@/components/gG/aiYellow.vue'
import gG13tridenary from '@/components/gG/gG13tridenary.vue'
import gG12duodenary from '@/components/gG/gG12duodenary.vue'
import gG11undenary from '@/components/gG/gG11undenary.vue'
import gG10denary from '@/components/gG/gG10denary.vue'
import gG09nonary from '@/components/gG/gG09nonary.vue'
import gG08octonary from '@/components/gG/gG08octonary.vue'
import gG07septenary from '@/components/gG/gG07septenary.vue'
import gG06senary from  '@/components/gG/gG06senary.vue'
import gG05quinary from '@/components/gG/gG05quinary.vue'
import gG04quaternary from '@/components/gG/gG04quaternary.vue'
import gG03tertiary from '@/components/gG/gG03tertiary.vue'
import gG02secondary from '@/components/gG/gG02secondary.vue'
import gG01primary from '@/components/gG/gG01primary.vue'
import gGw3 from '@/components/gG/gGw3.vue'

defineOptions({
  name: "gGapplied"
});
</script>
<template>
<div class="text-[99px] mea-culpa-regular bg-slate-950">age</div>
<div class="bg-neutral-950/50"> <age /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">years</div>
<div class="bg-neutral-300/30"> <years /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">planForPublicationForWCC</div>
<div class="bg-neutral-700/30"> <planForPublicationForWCC /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">color</div>
<span class="text-[99px] mea-culpa-regular">color</span>
<div class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-2 p-4 text-[55px] mea-culpa-regular bg-gray-950/50">
  <div class="text-[99px] mea-culpa-regular bg-slate-950">colorPaint</div>
  <div class="text-[99px] mea-culpa-regular bg-slate-950">colorLight</div>
  <div class="text-[99px] mea-culpa-regular bg-slate-950">colorPigment</div>
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5  text-center flex items-center justify-center">
    <div class="border border-sky-300 bg-yellow-500/30 text-red-500" >yellow
    </div>
    <div class="border border-sky-300 bg-red-500/30 text-red-500" >red
    </div>
    <div class="border border-sky-300 bg-blue-500/30 text-blue-500" >blue
    </div>
  </div>
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5  text-center flex items-center justify-center">
    <div class="border border-sky-300 bg-red-500/30 text-red-500" >red
    </div>
    <div class="border border-sky-300 bg-green-500/30 text-green-500" >green
    </div>
    <div class="border border-sky-300 bg-blue-500/30 text-blue-500" >blue
    </div>
  </div>
  <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] w-full h-6 gap-2 p-5  text-center flex items-center justify-center">
    <div class="border border-sky-300 bg-yellow-500/30 text-yellow-500" >yellow
    </div>
    <div class="border border-sky-300 bg-fuchsia-500/30 text-fuchsia-500" >magenta
    </div>
    <div class="border border-sky-300 bg-cyan-500/30 text-cyan-500" >cyan
    </div>
  </div>
  <div> <br><img src="/color/YRB-Paint.png" class="h-55 object-cover rounded-md" /></div>
  <div> <br><img src="/color/RGB-Additive.png" class="w-55 object-cover rounded-md" /></div>
  <div> <br><img src="/color/YMC-Subtractive.png" class="w-55 object-cover rounded-md" /></div>
  <div> mixing paint</div>
  <div> mixing light</div>
  <div> mixing pigment</div>
  <div> <colorPaint /></div>
  <div> <colorLight /></div>
  <div> <colorPigment /></div>
</div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">seventeen</div>
<div class="bg-pink-300/20"> <seventeen /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">aiYellow</div>
<div class="bg-yellow-700/20"> <aiYellow /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG01primary</div>
<div class="bg-rose-700/20"> <gG01primary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG02secondary</div>
<div class="bg-zinc-700/20"> <gG02secondary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG03tertiary</div>
<div class="bg-sky-700/20"> <gG03tertiary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG04quaternary</div>
<div class="bg-lime-700/20"> <gG04quaternary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG05quinary</div>
<div class="bg-emerald-700/20"> <gG05quinary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG06senary</div>
<div class="bg-fuschia-700/20"> <gG06senary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG07septenary</div>
<div class="bg-amber-700/20"> <gG07septenary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG08octonary</div>
<div class="bg-cyan-700/20"> <gG08octonary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG09nonary</div>
<div class="bg-natural-700/20"> <gG09nonary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG10denary</div>
<div class="bg-green-700/20"> <gG10denary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG11undenary</div>
<div class="bg-purple-700/20"> <gG11undenary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG12duodenary</div>
<div class="bg-blue-700/20"> <gG12duodenary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gG13tridenary</div>
<div class="bg-red-700/20"> <gG13tridenary /></div>
<div class="text-[99px] mea-culpa-regular bg-slate-950">gGw3</div>
<div class="bg-slate-50/50"> <gGw3 /></div>

<br><br><br>

<div class="text-[99px] mea-culpa-regular bg-slate-950">WashingtonCountyCourt</div>
</template>