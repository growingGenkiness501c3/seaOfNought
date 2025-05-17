<script setup lang="ts">
defineOptions({
  name: "seaOfNoughtNavigationBar"
});
</script>
<template>
<nav class="flex flex-wrap items-center justify-center">
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-300" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-200" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
</nav>
</template>
