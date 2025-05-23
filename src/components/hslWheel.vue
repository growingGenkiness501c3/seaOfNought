<script setup lang="ts">
defineOptions({
  name: "hslWheel"
});
</script>
<style scoped>
  .bg-layered-background {
    background-image: url('/NaughtSea.png'), url('/color/30 hsl wheel-0red 10k opacity 30.png');
    background-position: center, top right;
    background-repeat: repeat, no-repeat;
    background-size: cover, contain;
  }
</style>
<template>
<div class="bg-layered-background w-full h-screen">
  <slot name="default">


    
  </slot>
</div>


</template>
