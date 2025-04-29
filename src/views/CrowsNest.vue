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


⛵⾈<br>

&nbsp;oO0&nbsp;<whiteFlag>&nbsp;oO0&nbsp;<blackFlag>&nbsp;oO0&nbsp;<yellowFlag>&nbsp;oO0&nbsp;<magentaFlag>&nbsp;oO0&nbsp;<cyanFlag>&nbsp;oO0&nbsp;<flag>&nbsp;oO0&nbsp;&nbsp;</flag>&nbsp;oO0&nbsp;</cyanFlag>&nbsp;oO0&nbsp;</magentaFlag>&nbsp;oO0&nbsp;</yellowFlag>&nbsp;oO0&nbsp;</blackFlag>&nbsp;oO0&nbsp;</whiteFlag>&nbsp;oO0&nbsp;<br>
<br>
<br>
<whiteFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;whiteFlag</whiteFlag><br>
<br>
<blackFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;blackFlag</blackFlag><br>
<br>
<yellowFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;yellowFlag</yellowFlag><br>
<br>
<magentaFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;magentaFlag</magentaFlag><br>
<br>
<cyanFlag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;cyanFlag</cyanFlag><br>
<br>
<Flag>&nbsp;&nbsp;&nbsp;oO0&nbsp;&nbsp;&nbsp;Flag</Flag><br>
<br>
<SplitOneTwoThree>
  <template #one><yellowFlag><hr>1</yellowFlag></template>
  <template #two><magentaFlag><hr>2</magentaFlag></template>
  <template #four><cyanFlag><hr>3</cyanFlag></template>
</SplitOneTwoThree>
</template>