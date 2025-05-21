<script setup lang="ts">
import { ref } from 'vue'
import cyanFlag from '@/components/color/cyanFlag.vue'
import whiteFlag from '@/components/color/whiteFlag.vue'


defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }} </h1>

<center>
  <div class="card">
    <whiteFlag>How many times have I clicked this button?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <cyanFlag><button type="button" @click="count++">count is {{ count }}</button></cyanFlag></whiteFlag>
  </div>
</center>
</template>
<style scoped>

</style>
