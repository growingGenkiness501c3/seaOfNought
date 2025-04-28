<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Flag from './components/Flag.vue'

</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Flag>Some Flagged Value</Flag>
  <HelloWorld msg="Vite + Vue" />
  <Flag>Some Other Flagged Value</Flag>

</template>

