<script setup lang="ts">
import Flag from '@/components/Flag.vue'

import blackFlag from '@/components/blackFlag.vue'
import whiteFlag from '@/components/whiteFlag.vue'
import yellowFlag from '@/components/yellowFlag.vue'
import magentaFlag from '@/components/magentaFlag.vue'
import cyanFlag from '@/components/cyanFlag.vue'
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
  <template #four><cyanFlag><hr>🔹🖥️📱🧩📦⚙️🔧🗂️</cyanFlag></template>
</SplitOneTwoThree>

 
<center><dfn>will it blend?</dfn><br>
  <a href="https://tailwindcss.com/docs/colors" class="text-sky-100 hover:underline text-right"> tailwindcss/docs/colors </a>
  </center>
  
  <h1>{{ msg }} </h1>

<center>
  <div class="card">
    <whiteFlag>How many times have I clicked this button?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <cyanFlag><button type="button" @click="count++">count is {{ count }}</button></cyanFlag></whiteFlag>
  </div>
</center>

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