
<script setup lang="ts">
import sailboat_00 from "@/components/sailboat/sailboat_00.vue"
import turtle_00 from "@/components/turtle/turtle_00.vue"

import naz_00 from "@/components/naz/naz_00.vue"

import sailboat_01 from "@/components/sailboat/sailboat_01.vue"
import turtle_01 from "@/components/turtle/turtle_01.vue"

import sailboat_02 from "@/components/sailboat/sailboat_02.vue"
import turtle_02 from "@/components/turtle/turtle_02.vue"

defineOptions({
  name: "WIP_02"
});
</script>
<template>
<h1>WIP_02</h1>
<naz_00 />

<div class="grid grid-cols-[repeat(32,minmax(0,1fr))] w-full h-6 hubot-sans text-[33px] gap-1 p-1 cursor-pointer text-center">
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_00"> ⓪ </RouterLink><sailboat_00 /><turtle_00 /></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_01"> ① </RouterLink><sailboat_01 /><turtle_01 /></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_02"> ② </RouterLink><sailboat_02 /><turtle_02 /></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_03"> ③ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_04"> ④ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_05"> ⑤ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_06"> ⑥ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_07"> ⑦ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_08"> ⑧ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_09"> ⑨ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_10"> ⑩ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_11"> ⑪ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_12"> ⑫ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_13"> ⑬ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_14"> ⑭ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_15"> ⑮ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_16"> ⑯ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_17"> ⑰ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_18"> ⑱ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_19"> ⑲ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_20"> ⑳ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_21"> ㉑ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_22"> ㉒ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_23"> ㉓ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_24"> ㉔ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_25"> ㉕ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_26"> ㉖ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_27"> ㉗ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_28"> ㉘ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_29"> ㉙ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_30"> ㉚ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_31"> ㉛ </RouterLink></div>
</div>
<br>
<div class="grid grid-cols-3 grid-rows-2 gap-4 p-4">
  <div class="flex items-center justify-center">
    <turtleCompiled />
  </div>
  <div class="bg-sky-950/75 border border-sky-500 flex items-center justify-center">
    <sailboatCompiled />
  </div>
  <div class="flex items-center justify-center">
    <turtleCompiled />
  </div>
</div>
<span class="text-[99px] text-[#aa00aa]"> move WIPBar and ÷ </span>
<center>
<code>save as plain svg for less trash code. set fill to currentColor in component for tailwind maniuplation</code>
<code>will need to rename to start file with any alpha character... not number</code>
<code>in inkscape upon open select rendering mode: blocky</code>
<code>if it doesn't detect brightness @ .5 threshold (it won't preview) flood with black in krita and come back</code>
<nav class="grid grid-cols-[repeat(1,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCmxldCBjaG9yZHMgPSBjaG9yZCgiPEMgRyBDIEcgQyBHIEFtIEMgQ20gRyBDIEcgQz4vMiIpLmRpY3QoJ2lyZWFsJykKCnN0YWNrKAogIHN0YWNrKAogICAgcygiYmQiKS5zdHJ1Y3QoInggeCA8W3gqPDEgMiAzPiBbeCB%2BQDIgfkAzXV0%2BIiksCiAgICBuKCJbMCA8MCAxPl0qPDIhMyA2PiIpLnMoImhoIikKICApLmdhaW4oMC4yKSwgLy8gYXBwbHkgZ2FpbiB0byBkcnVtcyBvbmx5CgogIGNob3Jkcy5vZmZzZXQoLTEpLnZvaWNpbmcoKS5zKCJnbV9lcGlhbm8xOjEiKQopCg%3D%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">face</i></a></div></nav>
  <span class="text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt;C G C G C G Am C Cm G C G C&gt;/4").dict('ireal')</span>
<hr>
</center>
<nav class="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCmxldCBjaG9yZHMgPSBjaG9yZCgiPCBBIEIgQyBEIEUgRiBHID4vNCIpLmRpY3QoJ2lyZWFsJykKCnN0YWNrKAogIHN0YWNrKAogICAgcygiYmQiKS5zdHJ1Y3QoInggeCA8W3gqPDEgMiAzPiBbeCB%2BQDIgfkAzXV0%2BIiksCiAgICBuKCJbMCA8MCAxPl0qPDIhMyA2PiIpLnMoImhoIikKICApLmdhaW4oMC4yKSwgLy8gYXBwbHkgZ2FpbiB0byBkcnVtcyBvbmx5CgogIGNob3Jkcy5vZmZzZXQoLTEpLnZvaWNpbmcoKS5zKCJnbV9lcGlhbm8xOjEiKQopCg%3D%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://www.youtube.com/watch?v=YrLk4vdY28Q" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
</nav>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; A B C D E F G &gt;/4").dict('ireal')</span>
<hr><br>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
Leonard Cohen - Hallelujah (Official Live in London 2008)</span><br>
<div class="">Here’s a refined breakdown of the major **music theory concepts** behind Leonard Cohen’s *“Hallelujah”*—especially as heard in the **Live in London 2008** performance:
<dfn>ChatGPT answer</dfn>
<div class="bg-[#00000080]">


<div class="prose prose-lg max-w-none">
  <h2>🎼 Key & Meter</h2>
  <ul>
    <li><strong>Key of C major</strong> (<a href="https://www.youtube.com/watch?v=YrLk4vdY28Q">YouTube</a>, <a href="https://en.wikipedia.org/wiki/Hallelujah_%28Leonard_Cohen_song%29">Wikipedia</a>).</li>
    <li><strong>12/8 time signature</strong>, giving it a gentle <strong>triplet feel</strong> with a folk/gospel vibe.</li>
  </ul>

  <hr>

  <h2>🎸 Core Chord Progression</h2>
  <p>The famous verse progression is:</p>
  <pre><code>C – Am – C – Am – F – G – C – G</code></pre>
  <p>Numerically: <strong>I – vi – I – vi – IV – V – I – V</strong> 
  (<a href="https://www.classicfm.com/discover-music/secret-chord-leonard-cohens-hallelujah-music/">ClassicFM</a>, 
  <a href="https://realworldmusictheory.com/relative-minor-and-secondary-dominants-in-hallelujah-by-jeff-buckley/">RealWorldMusicTheory</a>).</p>
  <ul>
    <li><strong>I–vi alternation</strong> (C ↔ Am): creates a subtle, hymn-like, devotional mood due to its tonal inertia (tonic to relative minor).</li>
    <li><strong>IV–V–I movement</strong> offers a classic cadential resolution—but Cohen often follows IV–V with vi, creating a <strong>deceptive resolution</strong> (“the minor fall”).</li>
  </ul>

  <hr>

  <h2>🧠 "The Fourth, the Fifth..." Lyric–Harmony Link</h2>
  <ul>
    <li>The lyrics <strong>describe</strong> the chord movement in real-time:
      <ul>
        <li><strong>“the fourth”</strong> → IV chord (F major in C)</li>
        <li><strong>“the fifth”</strong> → V chord (G)</li>
        <li><strong>“the minor fall, the major lift”</strong> → vi chord (Am) followed by returning to IV</li>
      </ul>
    </li>
  </ul>
  <p>This is a <strong>self-referential musical moment</strong> where lyrics and harmony align beautifully.</p>

  <hr>

  <h2>💥 Secondary Dominants</h2>
  <ul>
    <li>Cohen introduces <strong>E7</strong> (the V/vi, or V of Am), which intensifies the move into the vi chord—this is a <strong>text-book secondary dominant</strong>.</li>
  </ul>

  <hr>

  <h2>🎶 Melody & Counterpoint</h2>
  <ul>
    <li>Though harmonically simple, the <strong>melody adds depth</strong> through <strong>stepwise motion</strong>, occasional leaps, and <strong>counter-melodies</strong>.</li>
    <li>Bob Dylan noted Cohen’s style uses <strong>gentle melodic contour with counterpoint</strong>, giving “a celestial character and melodic lift.”</li>
  </ul>

  <hr>

  <h2>⚖️ Emotional Texture</h2>
  <ul>
    <li>I–vi alternation creates a <strong>static, searching texture</strong>.</li>
    <li>The deceptive resolution (IV–V–vi) evokes <strong>yearning and bittersweet surprise</strong>.</li>
    <li>Secondary dominants add <strong>brief harmonic tension</strong>.</li>
  </ul>

  <hr>

  <h2>🧩 Summary Table</h2>
  <table>
    <thead>
      <tr>
        <th>Concept</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Key & Meter</strong></td><td>C major, 12/8 time (triplet feel).</td></tr>
      <tr><td><strong>I–vi Alternation</strong></td><td>Calm, reflective tonic–relative minor motion.</td></tr>
      <tr><td><strong>IV–V–I Cadence</strong></td><td>Classic resolution, often ending deceptively on vi.</td></tr>
      <tr><td><strong>Secondary Dominant (E7)</strong></td><td>Heightens resolution into vi.</td></tr>
      <tr><td><strong>Lyrics = Theory</strong></td><td>Chord movement described in lyrics.</td></tr>
      <tr><td><strong>Melody & Counterpoint</strong></td><td>Simple harmony with expressive melodic motion.</td></tr>
    </tbody>
  </table>

  <hr>

  <h2>🎤 Reddit Perspective</h2>
  <blockquote>
    <p>“The chord progression is nice (I IV V vi IV V V7/vi vi), where the maximum tension and strongest resolution is found in the final two chords (V7 → vi).” (<a href="https://www.reddit.com/r/musictheory/comments/kyajs6/hallelujah_chord_progress/">Reddit</a>)</p>
  </blockquote>

  <hr>

  <h3>Final Thoughts</h3>
  <p>Cohen’s <em>“Hallelujah”</em> is a minimalist but emotionally rich piece. It thrives on:</p>
  <ul>
    <li><strong>I–vi–IV–V</strong> progression</li>
    <li><strong>Deceptive cadences</strong></li>
    <li><strong>Lyric–harmony synergy</strong></li>
    <li><strong>Melodic & counterpoint phrasing</strong></li>
  </ul>
</div>






</div>




<!--
<pre>

---

## 🎼 Key & Meter

* **Key of C major** *(original Cohen version)* ([youtube.com][1], [en.wikipedia.org][2]).
* **12/8 time signature**, giving it a gentle **triplet feel** with a folk/gospel vibe .

---

## 🎸 Core Chord Progression

The famous verse progression is:

```
C – Am – C – Am – F – G – C – G
```

Numerically: **I – vi – I – vi – IV – V – I – V** ([classicfm.com][3], [realworldmusictheory.com][4]).

* **I–vi alternation** (C ↔ Am): creates a subtle, hymn-like, devotional mood due to its tonal inertia (tonic to relative minor) ([realworldmusictheory.com][4]).
* **IV–V–I movement** offers a classic cadential resolution—but Cohen often follows IV–V with vi in the lyrics, creating a **deceptive resolution** (“the minor fall”) ([realworldmusictheory.com][4]).

---

## 🧠 "The Fourth, the Fifth..." Lyric–Harmony Link

* The lyrics **describe** the chord movement in real-time:

  * **“the fourth”** → IV chord (F major in C),
  * **“the fifth”** → V chord (G),
  * **“the minor fall, the major lift”** → vi chord (Am) followed by returning to IV ([classicfm.com][3]).

This is a **self-referential musical moment** where lyrics and harmony align beautifully.

---

## 💥 Secondary Dominants

* Cohen introduces **E7** (the V/vi, or V of Am), which intensifies the move into the vi chord—this is a **text-book secondary dominant** creating strong pull ([realworldmusictheory.com][4]).

---

## 🎶 Melody & Counterpoint

* Though harmonically simple, the **melody adds depth** through **stepwise motion**, occasional leaps, and well-placed **counter-melodies**, creating emotional nuance .
* As Bob Dylan noted, Cohen’s style uses **gentle melodic contour with counterpoint lines**, giving “a celestial character and melodic lift” **without complex harmony** ([newyorker.com][5]).

---

## ⚖️ Emotional Texture

* The alternation I–vi creates a **static, searching texture**, reflecting the song’s spiritual questioning ([hooktheory.com][6]).
* The deceptive resolution (IV–V–vi) evokes a feeling of **yearning and bittersweet surprise** ([realworldmusictheory.com][4]).
* Secondary dominants add **brief harmonic tension**, enhancing the solemn lyric delivery.

---

## 🧩 Summary Table

| Concept                     | Description                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| **Key & Meter**             | C major, 12/8 time (triplet feel) ([realworldmusictheory.com][4], [en.wikipedia.org][2]). |
| **I–vi Alternation**        | Builds a calm, reflective mood by toggling tonic and relative minor .                     |
| **IV–V–I Cadence**          | Classic resolution, often replaced by a deceptive vi (“minor fall”) .                     |
| **Secondary Dominant (E7)** | Heightens resolution into vi .                                                            |
| **Lyrics = Theory**         | Directly describe the chords (“fourth, fifth, minor fall...”) .                           |
| **Melody & Counterpoint**   | Simple chords + expressive melodic lines .                                                |

---

## 🎤 Reddit Perspective

From r/musictheory:

> *“The chord progression is nice (I IV V vi IV V V7/vi vi), where the maximum tension and strongest resolution is found in the final two chords (V7 → vi).”* ([reddit.com][7])

---

### Final Thoughts

Cohen's *“Hallelujah”* is a remarkably **minimalist yet emotionally rich** composition. It relies on:

* A simple—but potent—**I–vi–IV–V** progression,
* **Deceptive cadences** that lend poignant surprise,
* **Smart lyric–chord alignment** for self-referential impact,
* **Melodic and counterpoint touches** that elevate its emotional reach.

Let me know if you'd like help analyzing specific verses or how the live arrangement in London 2008 enhances these elements!

[1]: https://www.youtube.com/watch?v=YrLk4vdY28Q&utm_source=chatgpt.com "Leonard Cohen - Hallelujah (Official Live in London 2008) - YouTube"
[2]: https://en.wikipedia.org/wiki/Hallelujah_%28Leonard_Cohen_song%29?utm_source=chatgpt.com "Hallelujah (Leonard Cohen song) - Wikipedia"
[3]: https://www.classicfm.com/discover-music/secret-chord-leonard-cohens-hallelujah-music/?utm_source=chatgpt.com "What is the 'secret chord' mentioned in Leonard Cohen's 'Hallelujah'?"
[4]: https://realworldmusictheory.com/relative-minor-and-secondary-dominants-in-hallelujah-by-jeff-buckley/?utm_source=chatgpt.com "Relative minor and secondary dominants in Hallelujah by Jeff Buckley"
[5]: https://www.newyorker.com/magazine/2016/10/17/leonard-cohen-makes-it-darker?utm_source=chatgpt.com "Leonard Cohen Makes It Darker"
[6]: https://www.hooktheory.com/theorytab/view/leonard-cohen/hallelujah?utm_source=chatgpt.com "Hallelujah by Leonard Cohen Chords and Melody - Hooktheory"
[7]: https://www.reddit.com/r/musictheory/comments/kyajs6/hallelujah_chord_progress/?utm_source=chatgpt.com "Hallelujah chord progress. : r/musictheory - Reddit"
</pre>

-->
</div>
<hr>



</template>
