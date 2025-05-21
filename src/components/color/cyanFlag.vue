<script setup lang="ts">
defineOptions({
  name: "cyanFlag"
});
</script>
<template>
  <code class="hubot-sans bg-cyan-500/25 p-1 text-cyan-500" style="font-size: 20px;">
    <slot name="default">
    </slot>
  </code>
</template>
