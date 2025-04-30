<script setup lang="ts">
import { ref } from 'vue'
import cyanFlag from '@/components/cyanFlag.vue'
import whiteFlag from '@/components/whiteFlag.vue'


defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

</template>
<style scoped>

</style>
