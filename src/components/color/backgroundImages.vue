<script setup lang="ts">
defineOptions({
  name: "backgroundImages"
});
</script>
<style scoped>
  .bg-layered-background {
    background-image: url('/NaughtSea.png');
    background-position: 0, 0px;
    background-repeat: repeat;
    background-size: auto;
    
    /*background-image: url('/color/30 hsl wheel-0red 10k opacity 10 - yellow.png'), url('/color/30 hsl wheel-0red 10k opacity 10 - yellow.png'), url('/NaughtSea.png');
    background-position: 1 11 0, 33px 11px 0px;
    background-repeat: repeat, repeat, repeat;
    background-size: 333px, 1111px, auto;
    */
  }
</style>
<template>

<div class="bg-layered-background w-full h-full" >
  <slot name="default">

  </slot>
</div>


</template>
