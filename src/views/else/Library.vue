<script setup lang="ts">
import Flag from '@/components/Flag.vue'

import blackFlag from '@/components/color/blackFlag.vue'
import whiteFlag from '@/components/color/whiteFlag.vue'
import yellowFlag from '@/components/color/yellowFlag.vue'
import magentaFlag from '@/components/color/magentaFlag.vue'
import cyanFlag from '@/components/color/cyanFlag.vue'
import SplitOneTwoThree from '@/components/SplitOneTwoThree.vue'
defineOptions({
  name: "Library"
});
</script>
<template>
<whiteFlag>📚<br></whiteFlag>

<br>
<SplitOneTwoThree>
  <template #one><yellowFlag><hr>⛵</yellowFlag></template>
  <template #two><magentaFlag><hr>🐦</magentaFlag></template>
  <template #four><cyanFlag><hr>🔹🖥️📱🧩📦⚙️🔧🗂️https://symbl.cc/en/unicode-table/#khmer-symbols</cyanFlag></template>
</SplitOneTwoThree>

 
<div><dfn>will it blend?</dfn><br>
  <a href="https://tailwindcss.com/docs/colors" class="text-sky-100 hover:underline text-right"> tailwindcss/docs/colors </a>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the    
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >
    what is IDE?
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more - I guess I should re-add them...</p>


<whiteFlag>📚<br></whiteFlag>

</template>
