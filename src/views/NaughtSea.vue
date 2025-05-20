<script setup lang="ts">

import SplitOneTwoThree from '@/components/SplitOneTwoThree.vue'
import NaughtSeaHeader from "@/components/NaughtSeaHeader.vue";

defineOptions({
  name: "naughtSea"
});
</script>
<template>
<br><br><br><br>

<SplitOneTwoThree>
  <template #one><span class="text-4xl"> 🐣 </span></template>
  <template #two><span class="text-5xl"> 🐤</span></template>
  <template #four><span class="text-9xl"> 🐘 </span></template>
</SplitOneTwoThree>
</template>