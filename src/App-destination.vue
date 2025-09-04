<template>
  <main class="min-h-screen bg-slate-950 text-sky-400 p-4">
    <!-- Wrap into multiple rows when there isn't room -->
    <div class="flex flex-wrap gap-4 justify-center">
      <!-- Box 1: holds the routed page -->
      <section
        class="flex-none w-[1111px] h-[1111px] rounded-2xl bg-sky-300 shadow-sm border border-slate-200 overflow-auto p-4"
      >
        <router-view />
      </section>

      <!-- Box 2 -->
      <section
        class="flex-none w-[1111px] h-[1111px] rounded-2xl bg-white shadow-sm border border-slate-200 p-4 flex items-center justify-center text-slate-700"
      >
        Box 2
      </section>

      <!-- Box 3 -->
      <section
        class="flex-none w-[1111px] h-[1111px] rounded-2xl bg-white shadow-sm border border-slate-200 p-4 flex items-center justify-center text-slate-700"
      >
        Box 3
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
// Nothing needed here as long as you did app.use(router) in main.ts
</script>
