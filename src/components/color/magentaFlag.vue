<script setup lang="ts">
defineOptions({
  name: "magentaFlag"
});
</script>
<template>
  <code class="hubot-sans bg-fuchsia-600/25 p-2 text-fuchsia-600" style="font-size: 20px;">
    <slot name="default">
    </slot>
  </code>
</template>
