<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
 
  <pre class="text-center">will it blend?</pre>
  <a href="https://tailwindcss.com/docs/colors" class="text-sky-100 hover:underline text-right"> tailwindcss/docs/colors </a>
  
  <h1>{{ msg }} </h1>

  <div class="card">
    <p> What does this count? </p>
    <button type="button" @click="count++">count is {{ count }}</button>
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
</template>
<style scoped>

</style>
