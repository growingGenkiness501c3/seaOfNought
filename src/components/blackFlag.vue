<script setup lang="ts">
defineOptions({
  name: "blackFlag"
});
</script>
<template>
  <code class="hubot-sans bg-stone-950/25 p-1 text-stone-950" style="font-size: 20px;">
    <slot name="default">
    </slot>
  </code>
</template>
