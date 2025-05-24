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
  }
</style>
<template>

<div class="bg-layered-background w-full h-full" >
  <slot name="default">

  </slot>
</div>

</template>
