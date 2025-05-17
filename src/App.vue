<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import Flag from "@/components/Flag.vue";
import oO0 from "@/components/oO0.vue";
import zer0Oo from "@/components/zer0Oo.vue";

import skyTop from "@/components/skyTop.vue";
import skyBottom from "@/components/skyBottom.vue";
import rainbowDots from "@/components/rainbowDots.vue";

import Clock from "@/components/Clock.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
<center>
<span class="font-mea-culpa text-[33px]"> ∅© </span>
<span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;<br /></span>
<skyTop /><skyTop /><br>
<span class="mea-culpa-regular" style="font-size: 22px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⾈&nbsp;with
Vite + Vue & tailwindcss &nbsp;⛵ </span><br />

</center>
<center>
<div class="grid grid-cols-13 gap-2">
  <div class="p-2 border hue090">hue090</div>
  <div class="p-2 border hue060">hue060</div>
  <div class="p-2 border hue030">hue030</div>
  <div class="p-2 border hue000">hue000</div>
  <div class="p-2 border hue330">hue330</div>
  <div class="p-2 border hue300">hue300</div>
  <div class="p-2 border hue270">hue270</div>
  <div class="p-2 border hue240">hue240</div>
  <div class="p-2 border hue210">hue210</div>
  <div class="p-2 border hue180">hue180</div>
  <div class="p-2 border hue150">hue150</div>
  <div class="p-2 border hue120">hue120</div>
  <div class="p-2 border hue090">hue090</div>
</div>
</center>
<br>

<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-2">
  <div class="bg-yellow-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏠</a></div>
  <div class="bg-amber-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-orange-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/anchor" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⚓</a></div>
  <div class="bg-red-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-rose-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwe" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🤴</a></div>
  <div class="bg-pink-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-fuchsia-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/forecastle" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏰</a></div>
  <div class="bg-purple-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-violet-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">✨👌</a></div>
  <div class="bg-indigo-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-blue-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/library" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📚</a></div>
  <div class="bg-sky-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-cyan-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/exhibits" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👸</a></div>
  <div class="bg-teal-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-emerald-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/vocabulary" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📖</a></div>
  <div class="bg-green-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-lime-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👑</a></div>
</div>
<Clock />
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


<center>
<h1> exhibitations </h1>
<h2> courage is contagious </h2>
<h3> prepare testimony for Oregon Medical Board </h3>
<h4> pinata</h4>
<h5> limitations </h5>
<h6> skills & healty habits </h6>
<sub> Mastering Weak to Master Meek</sub>
<sup>growingGenkiness</sup>
<sub> Mastering Weak to Master Meek</sub>
</center>

<div class="grid grid-cols-[repeat(51,minmax(0,1fr))] w-full h-6">
  <div class="bg-[hsl(0,0%,0%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">75</a></div>
  <div class="bg-[hsl(0,0%,2%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">76</a></div>
  <div class="bg-[hsl(0,0%,4%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">77</a></div>
  <div class="bg-[hsl(0,0%,6%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">78</a></div>
  <div class="bg-[hsl(0,0%,8%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">79</a></div>
  <div class="bg-[hsl(0,0%,10%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">80</a></div>
  <div class="bg-[hsl(0,0%,12%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">81</a></div>
  <div class="bg-[hsl(0,0%,14%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">82</a></div>
  <div class="bg-[hsl(0,0%,16%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">83</a></div>
  <div class="bg-[hsl(0,0%,18%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">84</a></div>
  <div class="bg-[hsl(0,0%,20%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">85</a></div>
  <div class="bg-[hsl(0,0%,22%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">86</a></div>
  <div class="bg-[hsl(0,0%,24%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">87</a></div>
  <div class="bg-[hsl(0,0%,26%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">88</a></div>
  <div class="bg-[hsl(0,0%,28%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">89</a></div>
  <div class="bg-[hsl(0,0%,30%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">90</a></div>
  <div class="bg-[hsl(0,0%,32%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">91</a></div>
  <div class="bg-[hsl(0,0%,34%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">92</a></div>
  <div class="bg-[hsl(0,0%,36%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">93</a></div>
  <div class="bg-[hsl(0,0%,38%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">94</a></div>
  <div class="bg-[hsl(0,0%,40%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">95</a></div>
  <div class="bg-[hsl(0,0%,42%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">96</a></div>
  <div class="bg-[hsl(0,0%,44%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">97</a></div>
  <div class="bg-[hsl(0,0%,46%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">98</a></div>
  <div class="bg-[hsl(0,0%,48%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">99</a></div>
  <div class="bg-[hsl(0,0%,50%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">100</a></div>
  <div class="bg-[hsl(0,0%,50%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">101</a></div>
  <div class="bg-[hsl(0,0%,52%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">102</a></div>
  <div class="bg-[hsl(0,0%,54%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">103</a></div>
  <div class="bg-[hsl(0,0%,56%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">104</a></div>
  <div class="bg-[hsl(0,0%,58%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">105</a></div>
  <div class="bg-[hsl(0,0%,60%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">106</a></div>
  <div class="bg-[hsl(0,0%,62%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">107</a></div>
  <div class="bg-[hsl(0,0%,64%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">108</a></div>
  <div class="bg-[hsl(0,0%,68%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">109</a></div>
  <div class="bg-[hsl(0,0%,70%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">110</a></div>
  <div class="bg-[hsl(0,0%,72%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">111</a></div>
  <div class="bg-[hsl(0,0%,74%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">112</a></div>
  <div class="bg-[hsl(0,0%,76%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">113</a></div>
  <div class="bg-[hsl(0,0%,78%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">114</a></div>
  <div class="bg-[hsl(0,0%,80%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">115</a></div>
  <div class="bg-[hsl(0,0%,82%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">116</a></div>
  <div class="bg-[hsl(0,0%,84%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">117</a></div>
  <div class="bg-[hsl(0,0%,86%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">118</a></div>
  <div class="bg-[hsl(0,0%,88%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">119</a></div>
  <div class="bg-[hsl(0,0%,90%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">120</a></div>
  <div class="bg-[hsl(0,0%,92%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">121</a></div>
  <div class="bg-[hsl(0,0%,94%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">122</a></div>
  <div class="bg-[hsl(0,0%,96%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">123</a></div>
  <div class="bg-[hsl(0,0%,98%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">124</a></div>
  <div class="bg-[hsl(0,0%,100%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">125</a></div>
</div>



<div class="grid grid-cols-[repeat(51,minmax(0,1fr))] w-full h-6">
  <div class="bg-[hsl(0,0%,0%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">75</a></div>
  <div class="bg-[hsl(0,0%,2%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">76</a></div>
  <div class="bg-[hsl(0,0%,4%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">77</a></div>
  <div class="bg-[hsl(0,0%,6%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">78</a></div>
  <div class="bg-[hsl(0,0%,8%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">79</a></div>
  <div class="bg-[hsl(0,0%,10%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">80</a></div>
  <div class="bg-[hsl(0,0%,12%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">81</a></div>
  <div class="bg-[hsl(0,0%,14%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">82</a></div>
  <div class="bg-[hsl(0,0%,16%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">83</a></div>
  <div class="bg-[hsl(0,0%,18%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">84</a></div>
  <div class="bg-[hsl(0,0%,20%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">85</a></div>
  <div class="bg-[hsl(0,0%,22%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">86</a></div>
  <div class="bg-[hsl(0,0%,24%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">87</a></div>
  <div class="bg-[hsl(0,0%,26%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">88</a></div>
  <div class="bg-[hsl(0,0%,28%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">89</a></div>
  <div class="bg-[hsl(0,0%,30%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">90</a></div>
  <div class="bg-[hsl(0,0%,32%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">91</a></div>
  <div class="bg-[hsl(0,0%,34%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">92</a></div>
  <div class="bg-[hsl(0,0%,36%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">93</a></div>
  <div class="bg-[hsl(0,0%,38%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">94</a></div>
  <div class="bg-[hsl(0,0%,40%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">95</a></div>
  <div class="bg-[hsl(0,0%,42%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">96</a></div>
  <div class="bg-[hsl(0,0%,44%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">97</a></div>
  <div class="bg-[hsl(0,0%,46%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">98</a></div>
  <div class="bg-[hsl(0,0%,48%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">99</a></div>
  <div class="bg-[hsl(0,0%,50%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">0</a></div>
  <div class="bg-[hsl(0,0%,50%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">1</a></div>
  <div class="bg-[hsl(0,0%,52%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-[hsl(0,0%,54%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">3</a></div>
  <div class="bg-[hsl(0,0%,56%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-[hsl(0,0%,58%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">5</a></div>
  <div class="bg-[hsl(0,0%,60%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-[hsl(0,0%,62%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">7</a></div>
  <div class="bg-[hsl(0,0%,64%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-[hsl(0,0%,68%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">9</a></div>
  <div class="bg-[hsl(0,0%,70%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">10</a></div>
  <div class="bg-[hsl(0,0%,72%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">11</a></div>
  <div class="bg-[hsl(0,0%,74%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">12</a></div>
  <div class="bg-[hsl(0,0%,76%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">13</a></div>
  <div class="bg-[hsl(0,0%,78%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">14</a></div>
  <div class="bg-[hsl(0,0%,80%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">15</a></div>
  <div class="bg-[hsl(0,0%,82%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">16</a></div>
  <div class="bg-[hsl(0,0%,84%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">17</a></div>
  <div class="bg-[hsl(0,0%,86%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">18</a></div>
  <div class="bg-[hsl(0,0%,88%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">19</a></div>
  <div class="bg-[hsl(0,0%,90%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">20</a></div>
  <div class="bg-[hsl(0,0%,92%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">21</a></div>
  <div class="bg-[hsl(0,0%,94%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">22</a></div>
  <div class="bg-[hsl(0,0%,96%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">23</a></div>
  <div class="bg-[hsl(0,0%,98%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">24</a></div>
  <div class="bg-[hsl(0,0%,100%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">25</a></div>
</div>
<br>
<div class="grid grid-cols-[repeat(51,minmax(0,1fr))] w-full h-6">
  <div class="bg-[hsl(0,0%,100%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⓪</a></div>
  <div class="bg-[hsl(0,0%,98%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">①</a></div>
  <div class="bg-[hsl(0,0%,96%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">②</a></div>
  <div class="bg-[hsl(0,0%,94%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">③</a></div>
  <div class="bg-[hsl(0,0%,92%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">④</a></div>
  <div class="bg-[hsl(0,0%,90%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑤</a></div>
  <div class="bg-[hsl(0,0%,88%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑥</a></div>
  <div class="bg-[hsl(0,0%,86%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑦</a></div>
  <div class="bg-[hsl(0,0%,84%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑧</a></div>
  <div class="bg-[hsl(0,0%,82%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑨</a></div>
  <div class="bg-[hsl(0,0%,80%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑩</a></div>
  <div class="bg-[hsl(0,0%,78%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑪</a></div>
  <div class="bg-[hsl(0,0%,76%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑫</a></div>
  <div class="bg-[hsl(0,0%,74%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑬</a></div>
  <div class="bg-[hsl(0,0%,72%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑭</a></div>
  <div class="bg-[hsl(0,0%,70%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑮</a></div>
  <div class="bg-[hsl(0,0%,68%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑯</a></div>
  <div class="bg-[hsl(0,0%,66%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑰</a></div>
  <div class="bg-[hsl(0,0%,64%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑱</a></div>
  <div class="bg-[hsl(0,0%,62%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑲</a></div>
  <div class="bg-[hsl(0,0%,60%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑳</a></div>
  <div class="bg-[hsl(0,0%,58%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉑</a></div>
  <div class="bg-[hsl(0,0%,56%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉒</a></div>
  <div class="bg-[hsl(0,0%,54%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉓</a></div>
  <div class="bg-[hsl(0,0%,52%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉔</a></div>
  <div class="bg-[hsl(0,0%,50%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉕</a></div>
  <div class="bg-[hsl(0,0%,48%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉖</a></div>
  <div class="bg-[hsl(0,0%,46%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉗</a></div>
  <div class="bg-[hsl(0,0%,44%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉘</a></div>
  <div class="bg-[hsl(0,0%,42%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉙</a></div>
  <div class="bg-[hsl(0,0%,40%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉚</a></div>
  <div class="bg-[hsl(0,0%,38%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉛</a></div>
  <div class="bg-[hsl(0,0%,36%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉜</a></div>
  <div class="bg-[hsl(0,0%,34%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉝</a></div>
  <div class="bg-[hsl(0,0%,32%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉞</a></div>
  <div class="bg-[hsl(0,0%,30%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉟</a></div>
  <div class="bg-[hsl(0,0%,28%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊱</a></div>
  <div class="bg-[hsl(0,0%,26%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊲</a></div>
  <div class="bg-[hsl(0,0%,24%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊳</a></div>
  <div class="bg-[hsl(0,0%,22%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊴</a></div>
  <div class="bg-[hsl(0,0%,20%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊵</a></div>
  <div class="bg-[hsl(0,0%,18%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊶</a></div>
  <div class="bg-[hsl(0,0%,16%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊷</a></div>
  <div class="bg-[hsl(0,0%,14%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊸</a></div>
  <div class="bg-[hsl(0,0%,12%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊹</a></div>
  <div class="bg-[hsl(0,0%,10%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊺</a></div>
  <div class="bg-[hsl(0,0%,8%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊻</a></div>
  <div class="bg-[hsl(0,0%,6%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊼</a></div>
  <div class="bg-[hsl(0,0%,4%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊽</a></div>
  <div class="bg-[hsl(0,0%,2%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊾</a></div>
  <div class="bg-[hsl(0,0%,0%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊿</a></div>
</div>

<div class="grid grid-cols-[repeat(51,minmax(0,1fr))] w-full h-6">
  <div class="bg-slate-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⓪</a></div>
  <div class="bg-yellow-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">①</a></div>
  <div class="bg-orange-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">②</a></div>
  <div class="bg-rose-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">③</a></div>
  <div class="bg-fuchsia-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">④</a></div>
  <div class="bg-violet-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑤</a></div>
  <div class="bg-indigo-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑥</a></div>
  <div class="bg-blue-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑦</a></div>
  <div class="bg-sky-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑧</a></div>
  <div class="bg-green-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑨</a></div>
  <div class="bg-lime-50 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑩</a></div>
  <div class="bg-yellow-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑪</a></div>
  <div class="bg-orange-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑫</a></div>
  <div class="bg-rose-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑬</a></div>
  <div class="bg-fuchsia-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑭</a></div>
  <div class="bg-violet-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑮</a></div>
  <div class="bg-indigo-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑯</a></div>
  <div class="bg-blue-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑰</a></div>
  <div class="bg-sky-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑱</a></div>
  <div class="bg-green-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑲</a></div>
  <div class="bg-lime-100 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑳</a></div>
  <div class="bg-yellow-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉑</a></div>
  <div class="bg-orange-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉒</a></div>
  <div class="bg-rose-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉓</a></div>
  <div class="bg-fuchsia-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉔</a></div>
  <div class="bg-violet-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉕</a></div>
  <div class="bg-indigo-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉖</a></div>
  <div class="bg-blue-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉗</a></div>
  <div class="bg-sky-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉘</a></div>
  <div class="bg-green-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉙</a></div>
  <div class="bg-lime-200 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉚</a></div>
  <div class="bg-yellow-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉛</a></div>
  <div class="bg-orange-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉜</a></div>
  <div class="bg-rose-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉝</a></div>
  <div class="bg-fuchsia-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉞</a></div>
  <div class="bg-violet-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉟</a></div>
  <div class="bg-indigo-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊱</a></div>
  <div class="bg-blue-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊲</a></div>
  <div class="bg-sky-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊳</a></div>
  <div class="bg-green-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊴</a></div>
  <div class="bg-lime-300 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊵</a></div>
  <div class="bg-yellow-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊶</a></div>
  <div class="bg-orange-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊷</a></div>
  <div class="bg-rose-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊸</a></div>
  <div class="bg-fuchsia-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊹</a></div>
  <div class="bg-violet-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊺</a></div>
  <div class="bg-indigo-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊻</a></div>
  <div class="bg-blue-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊼</a></div>
  <div class="bg-sky-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊽</a></div>
  <div class="bg-green-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊾</a></div>
  <div class="bg-lime-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊿</a></div>
</div>
<div class="grid grid-cols-[repeat(51,minmax(0,1fr))] w-full h-6">
  <div class="bg-slate-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⓪</a></div>
  <div class="bg-yellow-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">①</a></div>
  <div class="bg-orange-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">②</a></div>
  <div class="bg-rose-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">③</a></div>
  <div class="bg-fuchsia-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">④</a></div>
  <div class="bg-violet-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑤</a></div>
  <div class="bg-indigo-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑥</a></div>
  <div class="bg-blue-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑦</a></div>
  <div class="bg-sky-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑧</a></div>
  <div class="bg-green-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑨</a></div>
  <div class="bg-lime-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑩</a></div>
  <div class="bg-yellow-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑪</a></div>
  <div class="bg-orange-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑫</a></div>
  <div class="bg-rose-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑬</a></div>
  <div class="bg-fuchsia-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑭</a></div>
  <div class="bg-violet-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑮</a></div>
  <div class="bg-indigo-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑯</a></div>
  <div class="bg-blue-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑰</a></div>
  <div class="bg-sky-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑱</a></div>
  <div class="bg-green-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑲</a></div>
  <div class="bg-lime-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑳</a></div>
  <div class="bg-yellow-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉑</a></div>
  <div class="bg-orange-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉒</a></div>
  <div class="bg-rose-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉓</a></div>
  <div class="bg-fuchsia-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉔</a></div>
  <div class="bg-violet-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉕</a></div>
  <div class="bg-indigo-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉖</a></div>
  <div class="bg-blue-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉗</a></div>
  <div class="bg-sky-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉘</a></div>
  <div class="bg-green-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉙</a></div>
  <div class="bg-lime-400 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉚</a></div>
  <div class="bg-yellow-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉛</a></div>
  <div class="bg-orange-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉜</a></div>
  <div class="bg-rose-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉝</a></div>
  <div class="bg-fuchsia-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉞</a></div>
  <div class="bg-violet-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉟</a></div>
  <div class="bg-indigo-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊱</a></div>
  <div class="bg-blue-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊲</a></div>
  <div class="bg-sky-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊳</a></div>
  <div class="bg-green-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊴</a></div>
  <div class="bg-lime-500 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊵</a></div>
  <div class="bg-yellow-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊶</a></div>
  <div class="bg-orange-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊷</a></div>
  <div class="bg-rose-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊸</a></div>
  <div class="bg-fuchsia-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊹</a></div>
  <div class="bg-violet-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊺</a></div>
  <div class="bg-indigo-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊻</a></div>
  <div class="bg-blue-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊼</a></div>
  <div class="bg-sky-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊽</a></div>
  <div class="bg-green-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊾</a></div>
  <div class="bg-lime-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,50%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊿</a></div>
</div>

<div class="grid grid-cols-[repeat(51,minmax(0,1fr))] w-full h-6">
  <div class="bg-slate-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⓪</a></div>
  <div class="bg-yellow-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">①</a></div>
  <div class="bg-orange-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">②</a></div>
  <div class="bg-rose-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">③</a></div>
  <div class="bg-fuchsia-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">④</a></div>
  <div class="bg-violet-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑤</a></div>
  <div class="bg-indigo-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑥</a></div>
  <div class="bg-blue-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑦</a></div>
  <div class="bg-sky-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑧</a></div>
  <div class="bg-green-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑨</a></div>
  <div class="bg-lime-600 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑩</a></div>
  <div class="bg-yellow-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑪</a></div>
  <div class="bg-orange-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑫</a></div>
  <div class="bg-rose-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑬</a></div>
  <div class="bg-fuchsia-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑭</a></div>
  <div class="bg-violet-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑮</a></div>
  <div class="bg-indigo-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑯</a></div>
  <div class="bg-blue-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑰</a></div>
  <div class="bg-sky-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑱</a></div>
  <div class="bg-green-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑲</a></div>
  <div class="bg-lime-700 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑳</a></div>
  <div class="bg-yellow-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉑</a></div>
  <div class="bg-orange-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉒</a></div>
  <div class="bg-rose-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉓</a></div>
  <div class="bg-fuchsia-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉔</a></div>
  <div class="bg-violet-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉕</a></div>
  <div class="bg-indigo-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉖</a></div>
  <div class="bg-blue-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉗</a></div>
  <div class="bg-sky-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉘</a></div>
  <div class="bg-green-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉙</a></div>
  <div class="bg-lime-800 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉚</a></div>
  <div class="bg-yellow-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉛</a></div>
  <div class="bg-orange-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉜</a></div>
  <div class="bg-rose-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉝</a></div>
  <div class="bg-fuchsia-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉞</a></div>
  <div class="bg-violet-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉟</a></div>
  <div class="bg-indigo-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊱</a></div>
  <div class="bg-blue-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊲</a></div>
  <div class="bg-sky-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊳</a></div>
  <div class="bg-green-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊴</a></div>
  <div class="bg-lime-900 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊵</a></div>
  <div class="bg-yellow-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊶</a></div>
  <div class="bg-orange-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊷</a></div>
  <div class="bg-rose-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊸</a></div>
  <div class="bg-fuchsia-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊹</a></div>
  <div class="bg-violet-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊺</a></div>
  <div class="bg-indigo-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊻</a></div>
  <div class="bg-blue-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊼</a></div>
  <div class="bg-sky-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊽</a></div>
  <div class="bg-green-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊾</a></div>
  <div class="bg-lime-950 cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊿</a></div>
</div>

<div class="grid grid-cols-[repeat(51,minmax(0,1fr))] w-full h-6">
  <div class="bg-[hsl(0,0%,0%)] cursor-pointer hover:opacity-30 text-violet-50 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⓪</a></div>
  <div class="bg-[hsl(0,0%,2%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">①</a></div>
  <div class="bg-[hsl(0,0%,4%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">②</a></div>
  <div class="bg-[hsl(0,0%,6%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">③</a></div>
  <div class="bg-[hsl(0,0%,8%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">④</a></div>
  <div class="bg-[hsl(0,0%,10%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑤</a></div>
  <div class="bg-[hsl(0,0%,12%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑥</a></div>
  <div class="bg-[hsl(0,0%,14%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑦</a></div>
  <div class="bg-[hsl(0,0%,16%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑧</a></div>
  <div class="bg-[hsl(0,0%,18%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑨</a></div>
  <div class="bg-[hsl(0,0%,20%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑩</a></div>
  <div class="bg-[hsl(0,0%,22%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑪</a></div>
  <div class="bg-[hsl(0,0%,24%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑫</a></div>
  <div class="bg-[hsl(0,0%,26%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑬</a></div>
  <div class="bg-[hsl(0,0%,28%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑭</a></div>
  <div class="bg-[hsl(0,0%,30%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑮</a></div>
  <div class="bg-[hsl(0,0%,32%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑯</a></div>
  <div class="bg-[hsl(0,0%,34%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑰</a></div>
  <div class="bg-[hsl(0,0%,36%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑱</a></div>
  <div class="bg-[hsl(0,0%,38%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑲</a></div>
  <div class="bg-[hsl(0,0%,40%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⑳</a></div>
  <div class="bg-[hsl(0,0%,42%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉑</a></div>
  <div class="bg-[hsl(0,0%,44%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉒</a></div>
  <div class="bg-[hsl(0,0%,46%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉓</a></div>
  <div class="bg-[hsl(0,0%,48%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉔</a></div>
  <div class="bg-[hsl(0,0%,50%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,100%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉕</a></div>
  <div class="bg-[hsl(0,0%,50%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉖</a></div>
  <div class="bg-[hsl(0,0%,52%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉗</a></div>
  <div class="bg-[hsl(0,0%,54%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉘</a></div>
  <div class="bg-[hsl(0,0%,56%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉙</a></div>
  <div class="bg-[hsl(0,0%,58%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉚</a></div>
  <div class="bg-[hsl(0,0%,60%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉛</a></div>
  <div class="bg-[hsl(0,0%,62%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉜</a></div>
  <div class="bg-[hsl(0,0%,64%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉝</a></div>
  <div class="bg-[hsl(0,0%,68%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉞</a></div>
  <div class="bg-[hsl(0,0%,70%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㉟</a></div>
  <div class="bg-[hsl(0,0%,72%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊱</a></div>
  <div class="bg-[hsl(0,0%,74%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊲</a></div>
  <div class="bg-[hsl(0,0%,76%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊳</a></div>
  <div class="bg-[hsl(0,0%,78%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊴</a></div>
  <div class="bg-[hsl(0,0%,80%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊵</a></div>
  <div class="bg-[hsl(0,0%,82%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊶</a></div>
  <div class="bg-[hsl(0,0%,84%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊷</a></div>
  <div class="bg-[hsl(0,0%,86%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊸</a></div>
  <div class="bg-[hsl(0,0%,88%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊹</a></div>
  <div class="bg-[hsl(0,0%,90%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊺</a></div>
  <div class="bg-[hsl(0,0%,92%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊻</a></div>
  <div class="bg-[hsl(0,0%,94%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊼</a></div>
  <div class="bg-[hsl(0,0%,96%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊽</a></div>
  <div class="bg-[hsl(0,0%,98%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊾</a></div>
  <div class="bg-[hsl(0,0%,100%)] cursor-pointer hover:opacity-30 text-[hsl(0,0%,0%)] text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">㊿</a></div>
</div>




🖵 
<RouterView />
🖵
<Clock />
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
</nav><br>

<center>
<span class="font-mea-culpa text-[33px]"> ∅© </span>
<span class="mea-culpa-regular" style="font-size: 55px">NaughtSea &nbsp;&nbsp;&nbsp;<br /></span>
<skyTop /><skyTop /><br>
<span class="mea-culpa-regular" style="font-size: 22px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⾈&nbsp;with
Vite + Vue & tailwindcss &nbsp;⛵ </span><br /><br />

</center>


<div class="grid grid-cols-[repeat(17,minmax(0,1fr))] w-full h-6 gap-2">
  <div class="bg-yellow-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏠</a></div>
  <div class="bg-amber-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-orange-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/anchor" class="block w-full h-full" target="_blank" rel="noopener noreferrer">⚓</a></div>
  <div class="bg-red-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-rose-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwe" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🤴</a></div>
  <div class="bg-pink-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-fuchsia-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/forecastle" class="block w-full h-full" target="_blank" rel="noopener noreferrer">🏰</a></div>
  <div class="bg-purple-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-violet-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">✨👌</a></div>
  <div class="bg-indigo-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">8</a></div>
  <div class="bg-blue-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/library" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📚</a></div>
  <div class="bg-sky-800 cursor-pointer hover:opacity-30 text-violet-600 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">6</a></div>
  <div class="bg-cyan-800 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/exhibits" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👸</a></div>
  <div class="bg-teal-700 cursor-pointer hover:opacity-30 text-violet-800 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">4</a></div>
  <div class="bg-emerald-600 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/vocabulary" class="block w-full h-full" target="_blank" rel="noopener noreferrer">📖</a></div>
  <div class="bg-green-500 cursor-pointer hover:opacity-30 text-violet-950 text-center" ><a href="https://www.youtube.com/watch?v=UPUVyDxyfJY" class="block w-full h-full" target="_blank" rel="noopener noreferrer">2</a></div>
  <div class="bg-lime-400 cursor-pointer hover:opacity-30 text-violet-400 text-center" ><a href="http://localhost:5173/royalwethepeople" class="block w-full h-full" target="_blank" rel="noopener noreferrer">👑</a></div>
</div>
<br>









<center>
<div class="grid grid-cols-13 gap-2">
  <div class="p-2 border hue090">hue090</div>
  <div class="p-2 border hue060">hue060</div>
  <div class="p-2 border hue030">hue030</div>
  <div class="p-2 border hue000">hue000</div>
  <div class="p-2 border hue330">hue330</div>
  <div class="p-2 border hue300">hue300</div>
  <div class="p-2 border hue270">hue270</div>
  <div class="p-2 border hue240">hue240</div>
  <div class="p-2 border hue210">hue210</div>
  <div class="p-2 border hue180">hue180</div>
  <div class="p-2 border hue150">hue150</div>
  <div class="p-2 border hue120">hue120</div>
  <div class="p-2 border hue090">hue090</div>
</div>
</center>

</template>




<style>
.orbitron {
font-family: "Orbitron", sans-serif;
font-optical-sizing: auto;
font-weight: <weight>;
font-style: normal;
}
.rajdhani-light {
font-family: "Rajdhani", sans-serif;
font-weight: 300;
font-style: normal;
}
.rajdhani-regular {
font-family: "Rajdhani", sans-serif;
font-weight: 400;
font-style: normal;
}
.rajdhani-medium {
font-family: "Rajdhani", sans-serif;
font-weight: 500;
font-style: normal;
}
.rajdhani-semibold {
font-family: "Rajdhani", sans-serif;
font-weight: 600;
font-style: normal;
}
.rajdhani-bold {
font-family: "Rajdhani", sans-serif;
font-weight: 700;
font-style: normal;
}
.mea-culpa-regular {
  font-family: "Mea Culpa", cursive;
  font-weight: 400;
  font-style: normal;
}
.hubot-sans {
  font-family: "Hubot Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.alumni-sans-pinstripe-regular {
  font-family: "Alumni Sans Pinstripe", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.alumni-sans-pinstripe-regular-italic {
  font-family: "Alumni Sans Pinstripe", sans-serif;
  font-weight: 400;
  font-style: italic;
}
.coral-pixels-regular {
  font-family: "Coral Pixels", serif;
  font-weight: 400;
  font-style: normal;
}
.hue090 { color: hsl(90, 050%, 070%, 100%); }
.hue060 { color: hsl(60, 050%, 070%, 100%); }
.hue030 { color: hsl(030, 050%, 070%, 100%); }
.hue000 { color: hsl(000, 050%, 070%, 100%); }
.hue330 { color: hsl(330, 050%, 070%, 100%); }
.hue300 { color: hsl(300, 050%, 070%, 100%); }
.hue270 { color: hsl(270, 050%, 070%, 100%); }
.hue240 { color: hsl(240, 050%, 070%, 100%); }
.hue210 { color: hsl(210, 050%, 070%, 100%); }
.hue180 { color: hsl(180, 050%, 070%, 100%); }
.hue150 { color: hsl(150, 050%, 070%, 100%); }
.hue120 { color: hsl(120, 050%, 070%, 100%); }
.huewhite { color: hsl(0, 0%, 100%, 100%); }
.huegræy { color: hsl(0, 0%, 050%, 100%); }
.hueblack { color: hsl(0, 0%, 000%, 100%); }
h1 {  color: hsl(270, 050%, 070%, 100%);}
h2 {  color: hsl(240, 050%, 070%, 100%);}
h3 {  color: hsl(210, 050%, 070%, 100%);}
h4 {  color: hsl(180, 050%, 070%, 100%);}
h5 {  color: hsl(150, 050%, 070%, 100%);}
h6 {  color: hsl(120, 050%, 070%, 100%);}
</style>
