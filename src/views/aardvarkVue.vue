<script setup lang="ts">
import aardvarkComponent from '@/components/aardvarkComponent.vue'

defineOptions({
  name: "aardvarkVue"
});
</script>
<template>
  <aardvarkComponent />
  
<div class="grid grid-cols-[repeat(25,minmax(0,1fr))] w-full h-6">
  <div class="bg-yellow-200 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🧬</a></div>
  <div class="bg-rose-200 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">💉</a></div>
  <div class="bg-indigo-200 cursor-pointer hover:opacity-80 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🔵</a></div>
</div>

</template>