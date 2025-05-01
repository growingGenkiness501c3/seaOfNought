<script setup lang="ts">
import Flag from '@/components/Flag.vue'

import blackFlag from '@/components/blackFlag.vue'
import whiteFlag from '@/components/whiteFlag.vue'
import yellowFlag from '@/components/yellowFlag.vue'
import magentaFlag from '@/components/magentaFlag.vue'
import cyanFlag from '@/components/cyanFlag.vue'
import SplitOneTwoThree from '@/components/SplitOneTwoThree.vue'
defineOptions({
  name: "CrowsNest"
});
</script>
<template>
<whiteFlag>⛵<br></whiteFlag>
<blackFlag>🐦‍<br></blackFlag>
<br>
<SplitOneTwoThree>
  <template #one><yellowFlag><hr>⛵</yellowFlag></template>
  <template #two><magentaFlag><hr>🐦
  </magentaFlag></template>
  <template #four><cyanFlag><hr>🔹🖥️📱🧩📦⚙️🔧🗂️</cyanFlag></template>
</SplitOneTwoThree>
<blackFlag>🐦‍<br></blackFlag>
<whiteFlag>⛵<br></whiteFlag>
</template>