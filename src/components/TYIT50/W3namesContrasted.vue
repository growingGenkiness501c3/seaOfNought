<script setup lang="ts">
defineOptions({
  name: "W3namesContrasted"
});
import W3ColorNames from "@/components/ReComp/W3ColorNames.vue";
</script>
<template>

<div class="h-[3333] flex items-start justify-center bg-gray-100/0">
  <div class="grid grid-cols-3 grid-rows-3 gap-4 p-4 w-full">
    <div class="p-11 bg-[#000000c0] grid place-items-center">
      <W3ColorNames />      
    </div>
    <div class="p-11 bg-[#808080c0] grid place-items-center">
      <W3ColorNames />      
    </div>
    <div class="p-11 bg-[#ffffffc0] grid place-items-center">
      <W3ColorNames />      
    </div>
  </div>
</div>

</template>