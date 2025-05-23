<script setup lang="ts">
defineOptions({
  name: "hslWheel"
});
</script>
<style scoped>
  .bg-layered-background {
    background-image: url('/color/30 hsl wheel-0red 10k opacity 10.png'), url('/color/30 hsl wheel-0red 10k opacity 10.png'), url('/NaughtSea.png');
    background-position: 1 11 0, 33px 11px 0px;
    background-repeat: repeat, repeat, repeat;
    background-size: 333px, 1111px, auto;
  }
</style>
<template>
<div class="bg-layered-background w-full h-full">
  <slot name="default">



  </slot>
</div>


</template>
