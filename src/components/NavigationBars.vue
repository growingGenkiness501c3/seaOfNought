<script setup lang="ts">
import SplitOneTwoThree from "@/components/SplitOneTwoThree.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import NavigationButtonBar from "@/components/NavigationButtonBar.vue";

defineOptions({
  name: "NavigationBars"
});
</script>
<template>
  <SplitOneTwoThree>
    <template #one>
      <NavigationButtonBar />
    </template>
    <template #two>
      <nav  class="flex flex-wrap items-center justify-center gap-3">
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
          <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
          <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
          </nav>
    </template>
    <template #four>
      <NavigationBar />     
    </template>
  </SplitOneTwoThree>
</template>

<!--
<script setup lang="ts">
import SplitOneTwoThree from "@/components/SplitOneTwoThree.vue";
import wordBar from "@/components/wordBar.vue";
defineOptions({
  name: "NavigationBar"
});
</script>
<template>🧭
<SplitOneTwoThree>
<template #one>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <div class="border border-yellow-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">∅</a></div>
      <div class="border border-amber-500 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">📐</a></div>
      <div class="border border-orange-600 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">🛠</a></div>
      <div class="border border-red-600 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">🎬</a></div>
      <div class="border border-rose-500 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">👑</a></div>
      <div class="border border-pink-500 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">📆</a></div>
      <div class="border border-fuchsia-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">📊</a></div>
      <div class="border border-purple-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">📅</a></div>
      <div class="border border-violet-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">👌</a></div>
      <div class="border border-indigo-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">📓</a></div>
      <div class="border border-blue-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">🏛️</a></div>
      <div class="border border-sky-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">💬</a></div>
      <div class="border border-cyan-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">🎪</a></div>
      <div class="border border-teal-500 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">📁</a></div>
      <div class="border border-emerald-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">📖</a></div>
      <div class="border border-green-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">✅</a></div>
      <div class="border border-lime-400 cursor-pointer"><a href="http://localhost:5173/" class="" target="_blank" rel="noopener noreferrer">🗽</a></div>
    </div>
</template>
<template #two>
<nav  class="flex flex-wrap items-center justify-center gap-3">
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
    <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
    </nav>
  
</template>
<template #four>
  <nav class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-1 p-1 text-xs">
    <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/"> ∅<br> NaughtSea</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-amber-200 border border-amber-200 cursor-pointer" to="/orientation">📐<br>Orientation</RouterLink>      
    <RouterLink class="p-2.5; text-sky-200 hover:text-orange-200 border border-orange-200 cursor-pointer" to="/anchor">🛠<br>Git</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-red-200 border border-red-200 cursor-pointer" to="/dailies">🎬Dailies<br></RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-rose-200 border border-rose-200 cursor-pointer" to="/royalwe">👑RoyalWe<br></RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-pink-200 border border-pink-200 cursor-pointer" to="/">📆Monthlies</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-fuchsia-200 border border-fuchsia-200 cursor-pointer" to="/forecastle">📊<br>Forecasting</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200 border border-purple-200 cursor-pointer" to="/">📅<br>Yearlies</RouterLink>  
    <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="p-2.5; text-sky-200 hover:text-violet-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">👌<br>Perfection</a>          
    <RouterLink class="p-2.5; text-sky-200 hover:text-indigo-200 border border-indigo-200 cursor-pointer" to="/">📓<br>㏒</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-blue-200 border border-blue-200 cursor-pointer" to="/library">🏛️<br>libraries</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-sky-200 border border-sky-200 cursor-pointer" to="/">💬<br>gG</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-cyan-200 border border-cyan-200 cursor-pointer" to="/exhibits">🎪<br>Xhibition</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-teal-200 border border-teal-200 cursor-pointer" to="/">📁<br>Sorting</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-emerald-200 border border-emerald-200 cursor-pointer" to="/vocabulary">📖<br>Vocabulary</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-green-200 border border-green-200 cursor-pointer" to="/check">✅<br>Czech</RouterLink>            
    <RouterLink class="p-2.5; text-sky-200 hover:text-lime-200 border border-lime-200 cursor-pointer" to="/royalwethepeople">🗽<br>RoyalWeThePeople</RouterLink>            
    </nav>      
</template>
</SplitOneTwoThree>



 <nav class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-1 p-1 text-xs"></nav>




























  <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-3 p-5 ">
      <div class="border border-yellow-400 cursor-pointer">
        ∅ NaughtSea</div>
      <div class="border border-amber-500 cursor-pointer">
        📐 Orientation</div>
      <div class="border border-orange-600 cursor-pointer">
        🛠 Git</div>
      <div class="border border-red-600 cursor-pointer">
        🎬 Dailies</div>
      <div class="border border-rose-500 cursor-pointer">
        👑 RoyalWe</div>
      <div class="border border-pink-500 cursor-pointer">
        📆 Monthlies</div>
      <div class="border border-fuchsia-400 cursor-pointer">
        📊 Forecasting</div>
      <div class="border border-purple-400 cursor-pointer">
        📅 Yearlies</div>
      <div class="border border-violet-400 cursor-pointer">
        👌 Perfection</div>
      <div class="border border-indigo-400 cursor-pointer">
        📓 ㏒</div>
      <div class="border border-blue-400 cursor-pointer">
        🏛️ libraries</div>
      <div class="border border-sky-400 cursor-pointer">
        💬 gG</div>
      <div class="border border-cyan-400 cursor-pointer">
        🎪 Xhibition</div>
      <div class="border border-teal-500 cursor-pointer">
        📁Sorting</div>
      <div class="border border-emerald-400 cursor-pointer">
        📖 Vocabulary</div>
      <div class="border border-green-400 cursor-pointer">
        ✅ Czech</div>
      <div class="border border-lime-400 cursor-pointer">
        👑🗽 RoyalWeThePeople</div>
    </div>

    <SplitOneTwoThree>
    <template #one><br><br>
      <nav  class="flex flex-wrap items-center justify-center gap-3">
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
        </nav>
    </template>
    <template #two><br>
      <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-3 p-5 ">
                          <nav class="flex flex-wrap items-center justify-center gap-3">
                            <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-amber-200 border border-amber-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
                            <RouterLink class="p-2.5; text-sky-200 hover:text-orange-200 border border-orange-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-red-200 border border-red-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-rose-200 border border-rose-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-pink-200 border border-pink-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-fuchsia-200 border border-fuchsia-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200 border border-purple-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
                            <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-violet-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
                            <RouterLink class="p-2.5; text-sky-200 hover:text-indigo-200 border border-indigo-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-blue-200 border border-blue-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-sky-200 border border-sky-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-cyan-200 border border-cyan-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-teal-200 border border-teal-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-emerald-200 border border-emerald-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-green-200 border border-green-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-lime-200 border border-lime-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
                            </nav>        
          <div class="border border-yellow-400 cursor-pointer">
            ∅ </div>
          <div class="border border-amber-500 cursor-pointer">
            📐</div>
          <div class="border border-orange-600 cursor-pointer">
            🛠</div>
          <div class="border border-red-600 cursor-pointer">
            🎬</div>
          <div class="border border-rose-500 cursor-pointer">
            👑</div>
          <div class="border border-pink-500 cursor-pointer">
            📆</div>
          <div class="border border-fuchsia-400 cursor-pointer">
            📊</div>
          <div class="border border-purple-400 cursor-pointer">
            📅</div>
          <div class="border border-violet-400 cursor-pointer">
            👌</div>
          <div class="border border-indigo-400 cursor-pointer">
            📓</div>
          <div class="border border-blue-400 cursor-pointer">
            🏛️</div>
          <div class="border border-sky-400 cursor-pointer">
            💬</div>
          <div class="border border-cyan-400 cursor-pointer">
            🎪</div>
          <div class="border border-teal-500 cursor-pointer">
            📁</div>
          <div class="border border-emerald-400 cursor-pointer">
            📖 </div>
          <div class="border border-green-400 cursor-pointer">
            ✅ </div>
          <div class="border border-lime-400 cursor-pointer">
            🗽 </div>
        </div>
    </template>
    <template #four>
      <nav class="flex flex-wrap items-center justify-center gap-3">
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-amber-200 border border-amber-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
        <RouterLink class="p-2.5; text-sky-200 hover:text-orange-200 border border-orange-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-red-200 border border-red-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-rose-200 border border-rose-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-pink-200 border border-pink-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-fuchsia-200 border border-fuchsia-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200 border border-purple-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-violet-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
        <RouterLink class="p-2.5; text-sky-200 hover:text-indigo-200 border border-indigo-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-blue-200 border border-blue-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-sky-200 border border-sky-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-cyan-200 border border-cyan-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-teal-200 border border-teal-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-emerald-200 border border-emerald-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-green-200 border border-green-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-lime-200 border border-lime-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
        </nav>      
      <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-3 p-5 ">
          <div class="border border-yellow-400 cursor-pointer">
            ∅ NaughtSea</div>
          <div class="border border-amber-500 cursor-pointer">
            📐 Orientation</div>
          <div class="border border-orange-600 cursor-pointer">
            🛠 Git</div>
          <div class="border border-red-600 cursor-pointer">
            🎬 Dailies</div>
          <div class="border border-rose-500 cursor-pointer">
            👑 RoyalWe</div>
          <div class="border border-pink-500 cursor-pointer">
            📆 Monthlies</div>
          <div class="border border-fuchsia-400 cursor-pointer">
            📊 Forecasting</div>
          <div class="border border-purple-400 cursor-pointer">
            📅 Yearlies</div>
          <div class="border border-violet-400 cursor-pointer">
            👌 Perfection</div>
          <div class="border border-indigo-400 cursor-pointer">
            📓 ㏒</div>
          <div class="border border-blue-400 cursor-pointer">
            🏛️ libraries</div>
          <div class="border border-sky-400 cursor-pointer">
            💬 gG</div>
          <div class="border border-cyan-400 cursor-pointer">
            🎪 Xhibition</div>
          <div class="border border-teal-500 cursor-pointer">
            📁Sorting</div>
          <div class="border border-emerald-400 cursor-pointer">
            📖 Vocabulary</div>
          <div class="border border-green-400 cursor-pointer">
            ✅ Czech</div>
          <div class="border border-lime-400 cursor-pointer">
            👑🗽 RoyalWeThePeople</div>
        </div>
    </template>
  </SplitOneTwoThree>

        <nav class="flex flex-wrap items-center justify-center">
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
      </nav> 
      <hr>
      <nav class="flex flex-wrap items-center justify-center">
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
      </nav> 



<nav class="flex flex-wrap items-center justify-center">
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
</nav> 

<wordBar />
<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-10 p-5 ">
  <div class="border border-yellow-400 cursor-pointer hover:opacity-30 text-center">
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">∅</a><br></div>
  <div class="border border-amber-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/orientation" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📐</a></div>
  <div class="border border-orange-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/anchor" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🛠</a></div>
  <div class="border border-red-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/dailies" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🎬</a></div>
  <div class="border border-rose-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwe" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👑</a></div>
  <div class="border border-pink-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📆</a></div>
  <div class="border border-fuchsia-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/forecastle" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📊</a></div>
  <div class="border border-purple-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📅</a></div>
  <div class="border border-violet-400 cursor-pointer hover:opacity-30" >
    <br><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👌</a></div>
  <div class="border border-indigo-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📓</a></div>
  <div class="border border-blue-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/library" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🏛️</a></div>
  <div class="border border-sky-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">💬</a></div>
  <div class="border border-cyan-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/exhibits" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🎪</a></div>
  <div class="border border-teal-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📁</a></div>
  <div class="border border-emerald-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/vocabulary" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📖</a></div>
  <div class="border border-green-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/check" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">✅</a></div>
  <div class="border border-lime-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👑🗽</a></div>
</div>
<br><br><br><br>
<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-10 p-5 ">
  <div class="border border-yellow-400 cursor-pointer hover:opacity-30 text-center">
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">0</a><br></div>
  <div class="border border-amber-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/orientation" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">1</a></div>
  <div class="border border-orange-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/anchor" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="border border-red-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/dailies" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">3</a></div>
  <div class="border border-rose-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwe" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="border border-pink-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">5</a></div>
  <div class="border border-fuchsia-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/forecastle" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="border border-purple-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">7</a></div>
  <div class="border border-violet-400 cursor-pointer hover:opacity-30" >
    <br><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="border border-indigo-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">9</a></div>
  <div class="border border-blue-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/library" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">+</a></div>
  <div class="border border-sky-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">11</a></div>
  <div class="border border-cyan-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/exhibits" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">12</a></div>
  <div class="border border-teal-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">13</a></div>
  <div class="border border-emerald-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/vocabulary" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">14</a></div>
  <div class="border border-green-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/check" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">15</a></div>
  <div class="border border-lime-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">16</a></div>
</div>

  <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-3 p-5 ">
      <div class="border border-yellow-400 cursor-pointer">
        ∅ NaughtSea</div>
      <div class="border border-amber-500 cursor-pointer">
        📐 Orientation</div>
      <div class="border border-orange-600 cursor-pointer">
        🛠 Git</div>
      <div class="border border-red-600 cursor-pointer">
        🎬 Dailies</div>
      <div class="border border-rose-500 cursor-pointer">
        👑 RoyalWe</div>
      <div class="border border-pink-500 cursor-pointer">
        📆 Monthlies</div>
      <div class="border border-fuchsia-400 cursor-pointer">
        📊 Forecasting</div>
      <div class="border border-purple-400 cursor-pointer">
        📅 Yearlies</div>
      <div class="border border-violet-400 cursor-pointer">
        👌 Perfection</div>
      <div class="border border-indigo-400 cursor-pointer">
        📓 ㏒</div>
      <div class="border border-blue-400 cursor-pointer">
        🏛️ libraries</div>
      <div class="border border-sky-400 cursor-pointer">
        💬 gG</div>
      <div class="border border-cyan-400 cursor-pointer">
        🎪 Xhibition</div>
      <div class="border border-teal-500 cursor-pointer">
        📁Sorting</div>
      <div class="border border-emerald-400 cursor-pointer">
        📖 Vocabulary</div>
      <div class="border border-green-400 cursor-pointer">
        ✅ Czech</div>
      <div class="border border-lime-400 cursor-pointer">
        👑🗽 RoyalWeThePeople</div>
    </div>

    <SplitOneTwoThree>
    <template #one><br><br>
      <nav  class="flex flex-wrap items-center justify-center gap-3">
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
        </nav>
    </template>
    <template #two><br>
      <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-3 p-5 ">
                          <nav class="flex flex-wrap items-center justify-center gap-3">
                            <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-amber-200 border border-amber-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
                            <RouterLink class="p-2.5; text-sky-200 hover:text-orange-200 border border-orange-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-red-200 border border-red-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-rose-200 border border-rose-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-pink-200 border border-pink-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-fuchsia-200 border border-fuchsia-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200 border border-purple-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
                            <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-violet-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
                            <RouterLink class="p-2.5; text-sky-200 hover:text-indigo-200 border border-indigo-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-blue-200 border border-blue-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-sky-200 border border-sky-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-cyan-200 border border-cyan-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-teal-200 border border-teal-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-emerald-200 border border-emerald-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-green-200 border border-green-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
                            <RouterLink class="p-2.5; text-sky-200 hover:text-lime-200 border border-lime-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
                            </nav>        
          <div class="border border-yellow-400 cursor-pointer">
            ∅ </div>
          <div class="border border-amber-500 cursor-pointer">
            📐</div>
          <div class="border border-orange-600 cursor-pointer">
            🛠</div>
          <div class="border border-red-600 cursor-pointer">
            🎬</div>
          <div class="border border-rose-500 cursor-pointer">
            👑</div>
          <div class="border border-pink-500 cursor-pointer">
            📆</div>
          <div class="border border-fuchsia-400 cursor-pointer">
            📊</div>
          <div class="border border-purple-400 cursor-pointer">
            📅</div>
          <div class="border border-violet-400 cursor-pointer">
            👌</div>
          <div class="border border-indigo-400 cursor-pointer">
            📓</div>
          <div class="border border-blue-400 cursor-pointer">
            🏛️</div>
          <div class="border border-sky-400 cursor-pointer">
            💬</div>
          <div class="border border-cyan-400 cursor-pointer">
            🎪</div>
          <div class="border border-teal-500 cursor-pointer">
            📁</div>
          <div class="border border-emerald-400 cursor-pointer">
            📖 </div>
          <div class="border border-green-400 cursor-pointer">
            ✅ </div>
          <div class="border border-lime-400 cursor-pointer">
            🗽 </div>
        </div>
    </template>
    <template #four>
      <nav class="flex flex-wrap items-center justify-center gap-3">
        <RouterLink class="p-2.5; text-sky-200 hover:text-yellow-200 border border-yellow-200 cursor-pointer" to="/">&nbsp;| ∅ NaughtSea |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-amber-200 border border-amber-200 cursor-pointer" to="/orientation">&nbsp;| 📐 Orientation |&nbsp;</RouterLink>      
        <RouterLink class="p-2.5; text-sky-200 hover:text-orange-200 border border-orange-200 cursor-pointer" to="/anchor">&nbsp;| 🛠 Git |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-red-200 border border-red-200 cursor-pointer" to="/dailies">&nbsp;| 🎬 Dailies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-rose-200 border border-rose-200 cursor-pointer" to="/royalwe">&nbsp;| 👑 RoyalWe |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-pink-200 border border-pink-200 cursor-pointer" to="/">&nbsp;| 📆 Monthlies |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-fuchsia-200 border border-fuchsia-200 cursor-pointer" to="/forecastle">&nbsp;| 📊 Forecasting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200 border border-purple-200 cursor-pointer" to="/">&nbsp;| 📅 Yearlies |&nbsp;</RouterLink>  
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full p-2.5; text-sky-200 hover:text-violet-200 border border-violet-200 cursor-pointer" target="_blank" rel="noopener noreferrer">| 👌 Perfection ✨ |</a>          
        <RouterLink class="p-2.5; text-sky-200 hover:text-indigo-200 border border-indigo-200 cursor-pointer" to="/">&nbsp;| 📓 ㏒ |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-blue-200 border border-blue-200 cursor-pointer" to="/library">&nbsp;| 🏛️ libraries |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-sky-200 border border-sky-200 cursor-pointer" to="/">&nbsp;| 💬 gG |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-cyan-200 border border-cyan-200 cursor-pointer" to="/exhibits">&nbsp;| 🎪 Xhibition |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-teal-200 border border-teal-200 cursor-pointer" to="/">&nbsp;| 📁 Sorting |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-emerald-200 border border-emerald-200 cursor-pointer" to="/vocabulary">&nbsp;| 📖 Vocabulary |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-green-200 border border-green-200 cursor-pointer" to="/check">&nbsp;| ✅ Czech |&nbsp;</RouterLink>            
        <RouterLink class="p-2.5; text-sky-200 hover:text-lime-200 border border-lime-200 cursor-pointer" to="/royalwethepeople">&nbsp;| 🗽 RoyalWeThePeople |&nbsp;</RouterLink>            
        </nav>      
      <div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-3 p-5 ">
          <div class="border border-yellow-400 cursor-pointer">
            ∅ NaughtSea</div>
          <div class="border border-amber-500 cursor-pointer">
            📐 Orientation</div>
          <div class="border border-orange-600 cursor-pointer">
            🛠 Git</div>
          <div class="border border-red-600 cursor-pointer">
            🎬 Dailies</div>
          <div class="border border-rose-500 cursor-pointer">
            👑 RoyalWe</div>
          <div class="border border-pink-500 cursor-pointer">
            📆 Monthlies</div>
          <div class="border border-fuchsia-400 cursor-pointer">
            📊 Forecasting</div>
          <div class="border border-purple-400 cursor-pointer">
            📅 Yearlies</div>
          <div class="border border-violet-400 cursor-pointer">
            👌 Perfection</div>
          <div class="border border-indigo-400 cursor-pointer">
            📓 ㏒</div>
          <div class="border border-blue-400 cursor-pointer">
            🏛️ libraries</div>
          <div class="border border-sky-400 cursor-pointer">
            💬 gG</div>
          <div class="border border-cyan-400 cursor-pointer">
            🎪 Xhibition</div>
          <div class="border border-teal-500 cursor-pointer">
            📁Sorting</div>
          <div class="border border-emerald-400 cursor-pointer">
            📖 Vocabulary</div>
          <div class="border border-green-400 cursor-pointer">
            ✅ Czech</div>
          <div class="border border-lime-400 cursor-pointer">
            👑🗽 RoyalWeThePeople</div>
        </div>
    </template>
  </SplitOneTwoThree>
        <nav class="flex flex-wrap items-center justify-center">
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
      </nav> 
      <hr>
      <nav class="flex flex-wrap items-center justify-center">
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
        <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
        <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
        <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
        <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
      </nav> 



<nav class="flex flex-wrap items-center justify-center">
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/">&nbsp;| 🏠 Crow's Nest |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/anchor">&nbsp;| ⚓ Anchor |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/royalwe">&nbsp;| 🤴 RoyalWe |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/forecastle">&nbsp;| 🏰 forecastle |&nbsp;</RouterLink>
  <a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="text-sky-50 hover:text-purple-300" target="_blank">✨ perfection 👌</a>
  <RouterLink class="p-2.5; text-sky-100 hover:text-purple-100" to="/library">&nbsp;| library 📚 |&nbsp;</routerLink>
  <RouterLink class="p-2.5; text-sky-200 hover:text-purple-200" to="/exhibits">&nbsp;| exhibits 👸|&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-300 hover:text-purple-300" to="/vocabulary">&nbsp;| vocabulary 📖 |&nbsp;</RouterLink>
  <RouterLink class="p-2.5; text-sky-400 hover:text-purple-400" to="/royalwethepeople">&nbsp;| RoyalWeThePeople 👑 |&nbsp;</RouterLink>
</nav> 

<wordBar />
<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-10 p-5 ">
  <div class="border border-yellow-400 cursor-pointer hover:opacity-30 text-center">
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">∅</a><br></div>
  <div class="border border-amber-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/orientation" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📐</a></div>
  <div class="border border-orange-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/anchor" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🛠</a></div>
  <div class="border border-red-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/dailies" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🎬</a></div>
  <div class="border border-rose-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwe" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👑</a></div>
  <div class="border border-pink-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📆</a></div>
  <div class="border border-fuchsia-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/forecastle" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📊</a></div>
  <div class="border border-purple-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📅</a></div>
  <div class="border border-violet-400 cursor-pointer hover:opacity-30" >
    <br><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👌</a></div>
  <div class="border border-indigo-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📓</a></div>
  <div class="border border-blue-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/library" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🏛️</a></div>
  <div class="border border-sky-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">💬</a></div>
  <div class="border border-cyan-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/exhibits" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">🎪</a></div>
  <div class="border border-teal-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📁</a></div>
  <div class="border border-emerald-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/vocabulary" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">📖</a></div>
  <div class="border border-green-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/check" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">✅</a></div>
  <div class="border border-lime-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">👑🗽</a></div>
</div>
<br><br><br><br>
<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-10 p-5 ">
  <div class="border border-yellow-400 cursor-pointer hover:opacity-30 text-center">
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">0</a><br></div>
  <div class="border border-amber-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/orientation" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">1</a></div>
  <div class="border border-orange-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/anchor" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="border border-red-600 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/dailies" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">3</a></div>
  <div class="border border-rose-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwe" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="border border-pink-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">5</a></div>
  <div class="border border-fuchsia-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/forecastle" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="border border-purple-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">7</a></div>
  <div class="border border-violet-400 cursor-pointer hover:opacity-30" >
    <br><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="border border-indigo-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">9</a></div>
  <div class="border border-blue-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/library" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">+</a></div>
  <div class="border border-sky-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">11</a></div>
  <div class="border border-cyan-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/exhibits" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">12</a></div>
  <div class="border border-teal-500 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">13</a></div>
  <div class="border border-emerald-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/vocabulary" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">14</a></div>
  <div class="border border-green-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/check" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">15</a></div>
  <div class="border border-lime-400 cursor-pointer hover:opacity-30" >
    <br><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full text-4xl" target="_blank" rel="noopener noreferrer">16</a></div>
</div>
-->

