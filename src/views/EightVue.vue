<script setup lang="ts">
import Clock from '@/components/Clock.vue'
import LargeClock from '@/components/LargeClock.vue'
import eightIcon from '@/components/svgsAsVues/eightIcon.vue';
import eightHolyIcon from '@/components/svgsAsVues/eightHolyIcon.vue';

defineOptions({
  name: "EightVue"
});
</script>

<template class="#ffffff80">

<clock />
<span class="text-[#0f0]"><eightIcon /></span>
<h1 class="text-[99px]">Eight Vue</h1>
<br><hr><br><hr><br>
<span class="text-[#f00]"><eightHolyIcon /></span>
<h2 class="text-[99px]">Eight Vue</h2>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h3 class="text-[99px]">Eight Vue</h3>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h4 class="text-[99px]">Eight Vue</h4>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h5 class="text-[99px]">Eight Vue</h5>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h6 class="text-[99px]">Eight Vue</h6>
<hr><br><hr><br><hr><br><hr><br><hr><br>

<LargeClock />
</template>