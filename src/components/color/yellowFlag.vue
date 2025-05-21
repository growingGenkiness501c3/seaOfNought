<script setup lang="ts">
defineOptions({
  name: "yellowFlag"
});
</script>
<template>
  <code class="hubot-sans bg-yellow-300/25 p-3 text-yellow-300" style="font-size: 20px;">
    <slot name="default">
    </slot>
  </code>
</template>
