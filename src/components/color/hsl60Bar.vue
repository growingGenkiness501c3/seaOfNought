<script setup lang="ts">
defineOptions({
  name: "hsl60Bar"
});
</script>
<template>

<div class="overflow-auto">
  <table class="table-fixed border-collapse border border-gray-400">
    <thead>
      <tr>
        <!-- Top-left empty corner -->
        <th class="border border-gray-400 w-12 h-12"></th>
        <!-- 20 column headers -->
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">hsl</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">w-3</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">hex</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">oklch</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">unicode</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">mat-icon</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">i-name</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">email</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">title.html</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">chrome</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">git</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">short</th>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">url</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">90.1°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(90,100%,50%)] p-3">hsl(90.1,100%,50%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[Chartreuse] p-3">Chartreuse</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#7FFF00] p-3">#7FFF00</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(87.82%_0.258_134.39)]">oklch(87.82%_0.258_134.39)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >👩‍💻</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #7FFF00">manufacturing</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">manufacturing</td>
        <td class="border border-gray-400 w-12 h-12 text-center">veronicajeananderson@outlook.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">give_me_spice</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">vueJeanie</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">vue人</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://localhost:5175/" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://localhost:5175/</u></a></td>
      </tr>
      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">218.5°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(218.5,79.2%,66.1%)] p-3">hsl(218.5,79.2%,66.1%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[CornflowerBlue] p-3">CornflowerBlue</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >🧙‍♂️</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #6495ED">patient_list</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">patient_list</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>
      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">42.9°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(42.9,74.4%,49.0%)] p-3">hsl(42.9,74.4%,49.0%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[goldenrod] p-3">goldenrod</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >📐</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: goldenrod">width_normal</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">width_normal</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>
      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(203.0,92.0%,75.5%)] p-3">hsl(203.0,92.0%,75.5%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[lightskyblue] p-3">lightskyblue</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >🕵️‍♀️</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: lightskyblue">replay_5</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">replay_5</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>
      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(203.0,92.0%,75.5%)] p-3">hsl(203.0,92.0%,75.5%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[pink] p-3">pink</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >🩰</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: pink">token</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">token</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(203.0,92.0%,75.5%)] p-3">hsl(203.0,92.0%,75.5%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[sandybrown] p-3">sandybrown</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >🐮</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: sandybrown">widget_width</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">widget_width</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(203.0,92.0%,75.5%)] p-3">hsl(203.0,92.0%,75.5%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[mediumaquamarine] p-3">mediumaquamarine</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >🔰</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: mediumaquamarine">graph_5</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">graph_5</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(203.0,92.0%,75.5%)] p-3">hsl(203.0,92.0%,75.5%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[DeepSkyBlue] p-3">DeepSkyBlue</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >⛵</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: DeepSkyBlue">category_search</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">category_search</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(203.0,92.0%,75.5%)] p-3">hsl(203.0,92.0%,75.5%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[orangered] p-3">orangered</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#6495ED] p-3">#6495ED</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >🌶️</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: orangered">patient_list</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">patient_list</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(342,28%,26%)] p-3">hsl(342.2,27.8%,26.1%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#55303b] p-3"></td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#55303b] p-3">#55303b</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(36.0%_0.053_6.0)]">oklch(36.0%_0.053_6.0)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >🧿</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #6495ED">manufacturing</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">manufacturing</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(342,28%,36%)] p-3">hsl(342,28%,36%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[lightskyblue] p-3">lightskyblue</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#764252] p-3">#764252 </td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >⇧</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #6495ED">patient_list</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">patient_list</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(342,28%,16%)] p-3">hsl(342,28%,16%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[lightskyblue] p-3">lightskyblue</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#341d24] p-3">#341d24</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem] text-[#341d24] " >⇩</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #6495ED">patient_list</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">patient_list</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">240°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(240,100%,81%)] p-3">hsl(240,100%,81%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[lightskyblue] p-3"></td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#9e9eff] p-3">#9e9eff</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >⇦</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #6495ED">patient_list</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">patient_list</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr> 
      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">203.0°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(357,100%,74%)] p-3">hsl(357, 100%, 74%)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[lightskyblue] p-3"></td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#ff7b82] p-3">#ff7b82 </td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >⇨</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #6495ED">patient_list</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">patient_list</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>
      <tr>
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center p-3">342°</th>
        <td class="border border-gray-400 w-12 h-12 text-center text-[hsl(42.9_74.4%_49%)] p-3"> 
          hsl(42.9_74.4%_49%)</td>        
        <td class="border border-gray-400 w-12 h-12 text-center text-[lightskyblue] p-3"></td>
        <td class="border border-gray-400 w-12 h-12 text-center text-[#4b3a3f] p-3">
          #4b3a3f
        </td>        
        <td class="border border-gray-400 w-12 h-12 text-center text-[#4b3a3f] p-3">#4b3a3f </td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3 text-[oklch(67.8%_0.117_224.8)]">oklch(67.8%_0.117_224.8)</td>
        
        <td class="border border-gray-400 w-12 h-12 text-center text-[5.5rem]" >◯</td>
        <td class="border border-gray-400 w-12 h-12 text-center"><i class="material-symbols-outlined" style="font-size: 5.5rem; color: #6495ED">patient_list</i></td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">patient_list</td>
        <td class="border border-gray-400 w-12 h-12 text-center">allostasissy@gmail.com</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">allostasissy</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">twitch/Meleneth</td>
        <td class="border border-gray-400 w-12 h-12 text-center p-3">
          <a href="http://twitch.tv/Meleneth" target="_blank" rel="noopener noreferrer"
            class="block w-full h-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <u>http://twitch.tv/Meleneth</u></a></td>
      </tr>           
    </tbody>
  </table>
  </div>
<div class="bg-[#fc9727] text-[hsl(210_100%_50%)] p-[13px]">
  Test JIT
</div>
<div class="m-4 space-y-4">
  <!-- Hex arbitrary value -->
  <div class="p-[13px] bg-[#fc9727] text-white rounded">
    bg-[#fc9727] (orange)
  </div>

  <!-- HSL arbitrary value -->
  <div class="p-[13px] bg-white text-[hsl(210_100%_50%)] rounded">
    text-[hsl(210_100%_50%)] (bright blue text)
  </div>

  <!-- OKLCH arbitrary value -->
  <div class="p-[13px] bg-[oklch(87.82%_0.258_134.39)] text-black rounded">
    bg-[oklch(87.82%_0.258_134.39)] (chartreuse background)
  </div>
</div>

<!--
<br>
<hr>
<br>
<div class="overflow-auto">
  <table class="table-fixed border-collapse border border-gray-400">
    <thead>
      <tr>
        <!-- Top-left empty corner --><!--
        <th class="border border-gray-400 w-12 h-12 bg-gray-200">🧿</th>
        <!-- 20 column headers --><!--
        <th v-for="col in 20" :key="'col-' + col" 
            class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">
          H{{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- 20 rows --><!--
      <tr v-for="row in 20" :key="'row-' + row">
        <!-- Header column --><!--
        <th class="border border-gray-400 w-12 h-12 bg-gray-200 text-center">
          H{{ row }}
        </th>
        <!-- 20 cells --><!--
        <td v-for="col in 20" :key="'cell-' + row + '-' + col" 
            class="border border-gray-400 w-12 h-12 text-center">
          {{ row }},{{ col }}
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!--

<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[Chartreuse] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[Chartreuse] 
                            bg-[#7FFF0088] text-[Chartreuse] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#7FFF0066] 
                            hover:text-[#7FFF00] 
                            hover:border-[#7FFF0033] 
                            transition-colors">    
                    <span class="text-[6rem]">👩‍💻</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: Chartreuse;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              manufacturing
            </i>
        </td>
        <td class="px-4 py-2 text-[Chartreuse]"><span class="text-[2rem]">vue 人</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">manufacturing</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(90, 100%, 50%)</span><br>
          <span class="text-[1rem]">#7FFF00</span><br>
          <span class="text-[1rem]">Chartreuse</span><br>
          <span class="text-[1rem]">oklch(87.82% 0.258 134.39)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[CornflowerBlue] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[CornflowerBlue] 
                            bg-[#6495ED88] text-[CornflowerBlue] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#6495ED66] 
                            hover:text-[#7FFF00] 
                            hover:border-[#7FFF0033] 
                            transition-colors">    
                    <span class="text-[6rem]">🧙‍♂️</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: CornflowerBlue;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              patient_list
            </i>
        </td>
        <td class="px-4 py-2 text-[CornflowerBlue]"><span class="text-[2rem]">twitch/meleneth</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">patient_list</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(219, 79%, 66%)</span><br>
          <span class="text-[1rem]">#6495ED</span><br>
          <span class="text-[1rem]">CornflowerBlue</span><br>
          <span class="text-[1rem]">oklch(66.83% 0.209 259.89)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="https://www.twitch.tv/meleneth"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[Goldenrod] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[Goldenrod] 
                            bg-[#DAA52088] text-[Goldenrod] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#DAA52066] 
                            hover:text-[#7FFF00] 
                            hover:border-[#DAA52033] 
                            transition-colors">    
                    <span class="text-[6rem]">📐</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: Goldenrod;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              width_normal
            </i>
        </td>
        <td class="px-4 py-2 text-[Goldenrod]"><span class="text-[2rem]">今 frame.html </span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">width_normal</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(43, 74%, 49%)</span><br>
          <span class="text-[1rem]">#DAA520</span><br>
          <span class="text-[1rem]">Goldenrod</span><br>
          <span class="text-[1rem]">oklch(73.47% 0.171 84.18)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="file:///D:/125/Tailwinds/frame.html"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5174/"
            target="_blank" rel="noopener noreferrer"
            class="block border border-[LightSkyBlue] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[LightSkyBlue] 
                            bg-[#87CEFA88] text-[LightSkyBlue] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#87CEFA66] 
                            hover:text-[#87CEFA] 
                            hover:border-[#87CEFA33] 
                            transition-colors">    
                    <span class="text-[6rem]">🕵️‍♀️</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: LightSkyBlue;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              replay_5
            </i>
        </td>
        <td class="px-4 py-2 text-[LightSkyBlue]"><span class="text-[2rem]">calf/tyit50 </span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">replay_5</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(203, 92%, 75%)</span><br>
          <span class="text-[1rem]">#87CEFA</span><br>
          <span class="text-[1rem]">LightSkyBlue</span><br>
          <span class="text-[1rem]">oklch(84.17% 0.174 238.04)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5174/"
            target="_blank" rel="noopener noreferrer"
            class="block border border-[pink] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[pink] 
                            bg-[#FFC0CB88] text-[pink] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#FFC0CB66] 
                            hover:text-[#FFC0CB] 
                            hover:border-[#FFC0CB33] 
                            transition-colors">    
                    <span class="text-[6rem]">🩰</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: pink;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              token
            </i>
        </td>
        <td class="px-4 py-2 text-[Pink]"><span class="text-[2rem]">calf/BWGP</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">token</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(350, 100%, 88%)</span><br>
          <span class="text-[1rem]">#FFC0CB</span><br>
          <span class="text-[1rem]">pink</span><br>
          <span class="text-[1rem]">oklch(84.84% 0.067 15.41)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5174/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5174/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[SandyBrown] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[SandyBrown] 
                            bg-[#F4A46088] text-[SandyBrown] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#F4A46066] 
                            hover:text-[#F4A460] 
                            hover:border-[#F4A46033] 
                            transition-colors">    
                    <span class="text-[6rem]">🐮</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: SandyBrown;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              widget_width
            </i>
        </td>
        <td class="px-4 py-2 text-[SandyBrown]"><span class="text-[2rem]">calf</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">widget_width</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(28, 87%, 67%)</span><br>
          <span class="text-[1rem]">#F4A460</span><br>
          <span class="text-[1rem]">SandyBrown</span><br>
          <span class="text-[1rem]">oklch(78.66% 0.179 57.30)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[MediumAquamarine] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[MediumAquamarine] 
                            bg-[#66CDAA88] text-[MediumAquamarine] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#66CDAA66] 
                            hover:text-[#66CDAA] 
                            hover:border-[#66CDAA33] 
                            transition-colors">    
                    <span class="text-[6rem]">🔰</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: MediumAquamarine;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              graph_5
            </i>
        </td>
        <td class="px-4 py-2 text-[MediumAquamarine]"><span class="text-[2rem]">material-symbols-outlined</span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">graph_5</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(160, 51%, 60%)</span><br>
          <span class="text-[1rem]">#66CDAA</span><br>
          <span class="text-[1rem]">MediumAquamarine</span><br>
          <span class="text-[1rem]">oklch(76.04% 0.150 175.91)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
<br>
<div class="table-auto border border-sky-400 px-4 py-2 gap-11">
   <table class="table-auto  px-4 py-2">
    <tbody>
      <tr>
        <td>
          <a href="http://localhost:5175/" 
            target="_blank" rel="noopener noreferrer"
            class="block border border-[DeepSkyBlue] p-2 bg-[#88888888] rounded-[55px] ">
                <div class="hover:flip-vert border border-[DeepSkyBlue] 
                            bg-[#00BFFF88] text-[DeepSkyBlue] 
                            p-2 flex items-center gap-2  rounded-[55px]
                            hover:bg-[#00BFFF66] 
                            hover:text-[#00BFFF] 
                            hover:border-[#00BFFF33] 
                            transition-colors">    
                    <span class="text-[6rem]">⛵</span>
                </div>                            
          </a>
        </td>
        <td style="width: 6rem; height: 6rem;" class="px-6 py-4">
          <i
              style="font-size: 99px; color: DeepSkyBlue;
              display:block; transition:transform 615s; transform:rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
              class="material-symbols-outlined">
              category_search
            </i>
        </td>
        <td class="px-4 py-2 text-[DeepSkyBlue]"><span class="text-[2rem]">NaughtSea </span></td>

        <td class="px-4 py-2"><span class="text-[1rem]">category_search</span></td>
        <td class="px-4 py-2">
          <span class="text-[1rem]">hsl(195, 100%, 50%)</span><br>
          <span class="text-[1rem]">#00BFFF</span><br>
          <span class="text-[1rem]">DeepSkyBlue</span><br>
          <span class="text-[1rem]">oklch(75.93% 0.246 230.62)</span><br>
        </td>
        <td class="px-4 py-2">
          <span class="text-[.75rem]">href="http://localhost:5175/"</span></td>
      </tr>
    </tbody>
  </table>
</div>                            
-->
<br>  
<div class="grid grid-cols-61 gap-1 p-1 text-[22px] text-center alumni-sans-pinstripe-regular">
      <div class="rounded-full border-3 border-[hsl(90,50%,50%,100%)] bg-[hsl(90,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">90</div>
      <div class="rounded-full border-3 border-[hsl(84,50%,50%,100%)] bg-[hsl(84,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">84</div>
      <div class="rounded-full border-3 border-[hsl(78,50%,50%,100%)] bg-[hsl(78,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">78</div>
      <div class="rounded-full border-3 border-[hsl(72,50%,50%,100%)] bg-[hsl(72,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">72</div>
      <div class="rounded-full border-3 border-[hsl(66,50%,50%,100%)] bg-[hsl(66,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">66</div>
      <div class="rounded-full border-3 border-[hsl(60,50%,50%,100%)] bg-[hsl(60,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">60</div>
      <div class="rounded-full border-3 border-[hsl(54,50%,50%,100%)] bg-[hsl(54,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">54</div>
      <div class="rounded-full border-3 border-[hsl(48,50%,50%,100%)] bg-[hsl(48,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">48</div>
      <div class="rounded-full border-3 border-[hsl(42,50%,50%,100%)] bg-[hsl(42,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">42</div>
      <div class="rounded-full border-3 border-[hsl(36,50%,50%,100%)] bg-[hsl(36,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">36</div>
      <div class="rounded-full border-3 border-[hsl(30,50%,50%,100%)] bg-[hsl(30,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">30</div>
      <div class="rounded-full border-3 border-[hsl(24,50%,50%,100%)] bg-[hsl(24,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">24</div>
      <div class="rounded-full border-3 border-[hsl(18,50%,50%,100%)] bg-[hsl(18,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">18</div>
      <div class="rounded-full border-3 border-[hsl(12,50%,50%,100%)] bg-[hsl(12,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">12</div>
      <div class="rounded-full border-3 border-[hsl(6,50%,50%,100%)] bg-[hsl(6,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">6</div>
      <div class="rounded-full border-3 border-[hsl(360,50%,50%,100%)] bg-[hsl(360,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">360</div>
      <div class="rounded-full border-3 border-[hsl(354,50%,50%,100%)] bg-[hsl(354,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">354</div>
      <div class="rounded-full border-3 border-[hsl(348,50%,50%,100%)] bg-[hsl(348,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">348</div>
      <div class="rounded-full border-3 border-[hsl(342,50%,50%,100%)] bg-[hsl(342,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">342</div>
      <div class="rounded-full border-3 border-[hsl(336,50%,50%,100%)] bg-[hsl(336,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">336</div>
      <div class="rounded-full border-3 border-[hsl(330,50%,50%,100%)] bg-[hsl(330,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">330</div>
      <div class="rounded-full border-3 border-[hsl(324,50%,50%,100%)] bg-[hsl(324,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">324</div>
      <div class="rounded-full border-3 border-[hsl(318,50%,50%,100%)] bg-[hsl(318,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">318</div>
      <div class="rounded-full border-3 border-[hsl(312,50%,50%,100%)] bg-[hsl(312,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">312</div>
      <div class="rounded-full border-3 border-[hsl(306,50%,50%,100%)] bg-[hsl(306,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">306</div>
      <div class="rounded-full border-3 border-[hsl(300,50%,50%,100%)] bg-[hsl(300,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">300</div>
      <div class="rounded-full border-3 border-[hsl(294,50%,50%,100%)] bg-[hsl(294,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">294</div>
      <div class="rounded-full border-3 border-[hsl(288,50%,50%,100%)] bg-[hsl(288,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">288</div>
      <div class="rounded-full border-3 border-[hsl(282,50%,50%,100%)] bg-[hsl(282,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">282</div>
      <div class="rounded-full border-3 border-[hsl(276,50%,50%,100%)] bg-[hsl(276,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">276</div>
      <div class="rounded-full border-3 border-[hsl(270,50%,50%,100%)] bg-[hsl(270,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">270</div>
      <div class="rounded-full border-3 border-[hsl(264,50%,50%,100%)] bg-[hsl(264,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">264</div>
      <div class="rounded-full border-3 border-[hsl(258,50%,50%,100%)] bg-[hsl(258,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">258</div>
      <div class="rounded-full border-3 border-[hsl(252,50%,50%,100%)] bg-[hsl(252,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">252</div>
      <div class="rounded-full border-3 border-[hsl(246,50%,50%,100%)] bg-[hsl(246,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">246</div>
      <div class="rounded-full border-3 border-[hsl(240,50%,50%,100%)] bg-[hsl(240,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">240</div>
      <div class="rounded-full border-3 border-[hsl(234,50%,50%,100%)] bg-[hsl(234,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">234</div>
      <div class="rounded-full border-3 border-[hsl(228,50%,50%,100%)] bg-[hsl(228,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">228</div>
      <div class="rounded-full border-3 border-[hsl(222,50%,50%,100%)] bg-[hsl(222,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">222</div>
      <div class="rounded-full border-3 border-[hsl(216,50%,50%,100%)] bg-[hsl(216,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">216</div>
      <div class="rounded-full border-3 border-[hsl(210,50%,50%,100%)] bg-[hsl(210,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">210</div>
      <div class="rounded-full border-3 border-[hsl(204,50%,50%,100%)] bg-[hsl(204,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">204</div>
      <div class="rounded-full border-3 border-[hsl(198,50%,50%,100%)] bg-[hsl(198,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">198</div>
      <div class="rounded-full border-3 border-[hsl(192,50%,50%,100%)] bg-[hsl(192,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">192</div>
      <div class="rounded-full border-3 border-[hsl(186,50%,50%,100%)] bg-[hsl(186,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">186</div>
      <div class="rounded-full border-3 border-[hsl(180,50%,50%,100%)] bg-[hsl(180,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">180</div>
      <div class="rounded-full border-3 border-[hsl(174,50%,50%,100%)] bg-[hsl(174,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">174</div>
      <div class="rounded-full border-3 border-[hsl(168,50%,50%,100%)] bg-[hsl(168,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">168</div>
      <div class="rounded-full border-3 border-[hsl(162,50%,50%,100%)] bg-[hsl(162,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">162</div>
      <div class="rounded-full border-3 border-[hsl(156,50%,50%,100%)] bg-[hsl(156,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">156</div>
      <div class="rounded-full border-3 border-[hsl(150,50%,50%,100%)] bg-[hsl(150,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">150</div>
      <div class="rounded-full border-3 border-[hsl(144,50%,50%,100%)] bg-[hsl(144,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">144</div>
      <div class="rounded-full border-3 border-[hsl(138,50%,50%,100%)] bg-[hsl(138,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">138</div>
      <div class="rounded-full border-3 border-[hsl(132,50%,50%,100%)] bg-[hsl(132,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">132</div>
      <div class="rounded-full border-3 border-[hsl(126,50%,50%,100%)] bg-[hsl(126,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">126</div>
      <div class="rounded-full border-3 border-[hsl(120,50%,50%,100%)] bg-[hsl(120,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">120</div>
      <div class="rounded-full border-3 border-[hsl(114,50%,50%,100%)] bg-[hsl(114,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">114</div>
      <div class="rounded-full border-3 border-[hsl(108,50%,50%,100%)] bg-[hsl(108,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">108</div>
      <div class="rounded-full border-3 border-[hsl(102,50%,50%,100%)] bg-[hsl(102,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">102</div>
      <div class="rounded-full border-3 border-[hsl(96,50%,50%,100%)] bg-[hsl(96,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">96</div>
      <div class="rounded-full border-3 border-[hsl(90,50%,50%,100%)] bg-[hsl(90,50%,50%,50%)] text-[hsl(0,00%,100%,100%)]">90</div>
  </div>
</template>
