<script setup lang="ts">
import SplitOneTwoThree from "@/components/SplitOneTwoThree.vue";

defineOptions({
  name: "NaughtSeaHeader"
});
</script>
<template>
  <SplitOneTwoThree>
    <template #one><br><br>
      <span class="mea-culpa text-[33px]">🧭</span><span class="mea-culpa text-[33px]">©</span>
      <span class="mea-culpa-regular" style="font-size: 33px"> NaughtSea </span>
      <span class="mea-culpa-regular" style="font-size: 33px">∅⛵</span>
      <a href="http://localhost:5173/aardvarkVue" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🐗🦡🦔</a>
    </template>
    <template #two><br>
      <span class="mea-culpa text-[44px]"> ∅</span><span class="mea-culpa text-[55px]">⛵ &nbsp;&nbsp;&nbsp;</span>
      <span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;</span>
      <span class="mea-culpa-regular" style="font-size: 55px">🧭© <br /></span>
    </template>
    <template #four>
      <span class="mea-culpa text-[77px]"> ∅© </span>
      <span class="mea-culpa-regular" style="font-size: 77px">NaughtSea</span>
      <span class="mea-culpa-regular" style="font-size: 77px">🧭⛵<br /></span>
    </template>
  </SplitOneTwoThree>
</template>
