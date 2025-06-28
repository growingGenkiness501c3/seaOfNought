<script setup lang="ts">
import SplitOneTwoThree from '@/components/SplitOneTwoThree.vue'
import Clock from '@/components/Clock.vue'
defineOptions({
  name: "naughtSea"
});
</script>
<template>
<br><br><br><br>

<SplitOneTwoThree class="w-full">
  <template #one><span class="text-4xl"> <br><br><br><br><br><br><br><br>🐣 </span></template>
  <template #two><span class="text-5xl"> <br><br>🐤 <br><br><clock /><br><br></span></template>
  <template #four><span class="text-[222px]"> 🐘 </span></template>
</SplitOneTwoThree>
</template>