
<script setup lang="ts">
import sailboat_00 from "@/components/sailboat/sailboat_00.vue"
import turtle_00 from "@/components/turtle/turtle_00.vue"

defineOptions({
  name: "WIP_31"
});
</script>
<template>
<h1>WIP_31</h1>

<div class="grid grid-cols-[repeat(32,minmax(0,1fr))] w-full h-6 hubot-sans text-[33px] gap-1 p-1 cursor-pointer text-center">
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_00"> ⓪ </RouterLink><sailboat_00 /><turtle_00 /></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_01"> ① </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_02"> ② </RouterLink></div>
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
<nav class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCiAgbGV0IGNob3JkcyA9IGNob3JkKCI8IEMgQ20gQzcgQ003IENtNyA%2BLzQiKS5kaWN0KCdpcmVhbCcpCgpzdGFjaygKICBzdGFjaygKICAgIHMoImJkIikuc3RydWN0KCJ4IHggPFt4KjwxIDIgMz4gW3ggfkAyIH5AM11dPiIpLAogICAgbigiWzAgPDAgMT5dKjwyITMgNj4iKS5zKCJoaCIpCiAgKS5nYWluKDAuMiksIC8vIGFwcGx5IGdhaW4gdG8gZHJ1bXMgb25seQoKICBjaG9yZHMub2Zmc2V0KC0xKS52b2ljaW5nKCkucygiZ21fZXBpYW5vMToxIikKKQo%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
</nav>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; C Cm C7 CM7 Cm7 &gt;/4").dict('ireal') *don't work: Cdim C° C+ Cø*</span> 
<hr><br><hr><br><hr>
ABBA Gimme 
<nav class="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCiAgIGxldCBjaG9yZHMgPSBjaG9yZCgiPCBDOSBDMTMgQzdiOSBDNyM1IENhZGQ5ID4vNCIpLmRpY3QoJ2lyZWFsJykgCgpzdGFjaygKICBzdGFjaygKICAgIHMoImJkIikuc3RydWN0KCJ4IHggPFt4KjwxIDIgMz4gW3ggfkAyIH5AM11dPiIpLAogICAgbigiWzAgPDAgMT5dKjwyITMgNj4iKS5zKCJoaCIpCiAgKS5nYWluKDAuMiksIC8vIGFwcGx5IGdhaW4gdG8gZHJ1bXMgb25seQoKICBjaG9yZHMub2Zmc2V0KC0xKS52b2ljaW5nKCkucygiZ21fZXBpYW5vMToxIikKKQo%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
</nav>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; C9 C13 C7b9 C7#5  Cadd9 &gt;/4").dict('ireal') ***don't work: Csus4 Cmaj9***</span> 
<hr><br>
<hr><br>
<hr><br>
<hr>
<nav class="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC41KQoKbGV0IGNob3JkcyA9IGNob3JkKCI8IEMgRyBDIEcgQW0gRyBDIENtIEcgRiBDIEcgQW0gQ20gRyA%2BLzIiKS5kaWN0KCdpcmVhbCcpCgoKc3RhY2soCiAgc3RhY2soCiAgICBzKCJiZCIpLnN0cnVjdCgieCB4IDxbeCo8MSAyIDM%2BIFt4IH5AMiB%2BQDNdXT4iKSwKICAgIG4oIlswIDwwIDE%2BXSo8MiEzIDY%2BIikucygiaGgiKQogICkuZ2FpbigwLjIpLCAvLyBhcHBseSBnYWluIHRvIGRydW1zIG9ubHkKCiAgY2hvcmRzLm9mZnNldCgtNCkudm9pY2luZygpLnMoImdtX2NlbGVzdGEiKQopCg%3D%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
</nav>
<span class="align-middle text-[33px]"> 60 seconds &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; C G C G Am G C Cm G F C G Am Cm G &gt;/2").dict('ireal')</span> 
<hr><br>
<hr><br>
<hr><br>
<hr><br>
<hr>

<nav class="grid grid-cols-[repeat(6,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
</nav>

<hr><br>
<hr><br>
<hr><br>
<hr><br>
<hr><br>
<hr>
<nav class="grid grid-cols-[repeat(7,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(8,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(9,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(10,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(11,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
</nav>
<nav class="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#000] text-[#000] bg-[#fff] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>     
</nav>

</center>












<center>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <div>
    <stone />
  </div>
  <div>
    <lime />
  </div>
  <div>
    <neutral />
  </div>
  <div>
    <yellow />
  </div>
  <div>
    <amber />
  </div>
  <div>
    <orange />
  </div>
  <div>
    <red />
  </div>
  <div>
    <rose />
  </div>
  <div>
    <pink />
  </div>
  <div>
    <fuchsia />
  </div>
  <div>
    <gray />
  </div>
  <div>
    <purple />
  </div>
  <div>
    <violet />
  </div>
  <div>
    <indigo />
  </div>
  <div>
    <blue />
  </div>
  <div>
    <sky />
  </div>
  <div>
    <cyan />
  </div>
  <div>
    <teal />
  </div>
  <div>
    <emerald />
  </div>
  <div>
    <zinc />
  </div>
  <div>
    <green />
  </div>
  <div>
    <slate />
  </div>
</nav>
</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>     <br><br><br><br><br><br><br><br>






<center class="bg-sky-950/50 text-[3px]">
<div class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400">
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
3d_rotation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ac_unit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
access_alarm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
access_alarms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
access_time</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
accessibility</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
accessible</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_balance</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_balance_wallet</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
adb</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_a_photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_alarm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_alert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_location</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_shopping_cart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_to_photos</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_to_queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
adjust</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_flat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_flat_angled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_individual_suite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_legroom_extra</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_legroom_normal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_legroom_reduced</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_recline_extra</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_recline_normal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airplanemode_active</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airplanemode_inactive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airplay</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airport_shuttle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
album</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
all_inclusive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
all_out</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
android</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
announcement</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
apps</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
archive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_back</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_downward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_drop_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_drop_down_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_drop_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_forward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_upward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
art_track</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
aspect_ratio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assessment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_ind</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_late</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_return</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_returned</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_turned_in</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assistant</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assistant_photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
attach_file</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
attach_money</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
attachment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
audiotrack</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
autorenew</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
av_timer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
backspace</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
backup</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_alert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_charging_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_std</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_unknown</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
beach_access</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
beenhere</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
block</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_audio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_connected</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_disabled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_searching</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_circular</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_linear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
book</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bookmark</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bookmark_border</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_bottom</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_color</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_horizontal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_inner</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_outer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_style</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_top</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_vertical</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
branding_watermark</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_6</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_7</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_auto</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_high</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_low</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_medium</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
broken_image</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brush</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bubble_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bug_report</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
build</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
burst_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
business</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
business_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cached</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cake</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_end</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_made</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_merge</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_missed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_missed_outgoing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_received</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_split</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_to_action</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_enhance</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_front</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_rear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_roll</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cancel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
card_giftcard</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
card_membership</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
card_travel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
casino</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cast</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cast_connected</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
center_focus_strong</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
center_focus_weak</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
change_history</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chat_bubble</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chat_bubble_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check_box_outline_blank</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chevron_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chevron_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
child_care</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
child_friendly</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chrome_reader_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
class</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
clear_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
close</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
closed_caption</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_done</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_download</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_upload</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
code</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
collections</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
collections_bookmark</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
color_lens</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
colorize</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
comment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
compare</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
compare_arrows</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
computer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
confirmation_number</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
contact_mail</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
contact_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
contacts</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
content_copy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
content_cut</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
content_paste</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
control_point</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
control_point_duplicate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
copyright</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
create</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
create_new_folder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
credit_card</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_16_9</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_3_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_5_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_7_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_din</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_free</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_original</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_rotate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_square</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dashboard</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
data_usage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
date_range</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dehaze</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
delete</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
delete_forever</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
delete_sweep</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
description</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
desktop_mac</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
desktop_windows</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
details</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
developer_board</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
developer_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
device_hub</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
devices</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
devices_other</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dialer_sip</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dialpad</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_bike</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_boat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_bus</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_car</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_railway</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_run</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_subway</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_transit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_walk</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
disc_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dns</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
domain</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
done</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
done_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
donut_large</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
donut_small</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
drafts</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
drag_handle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
drive_eta</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dvr</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
edit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
edit_location</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
eject</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
email</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
enhanced_encryption</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
equalizer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
error</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
error_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
euro_symbol</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ev_station</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_available</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_busy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_note</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_seat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exit_to_app</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
expand_less</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
expand_more</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
explicit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
explore</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_neg_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_neg_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_plus_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_plus_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_zero</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
extension</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
face</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fast_forward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fast_rewind</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
favorite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
favorite_border</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
featured_play_list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
featured_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
feedback</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_dvr</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_manual_record</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_new</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_pin</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_smart_record</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
file_download</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
file_upload</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_6</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_7</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_8</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_9</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_9_plus</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_b_and_w</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_center_focus</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_drama</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_frames</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_hdr</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_none</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_tilt_shift</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_vintage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
find_in_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
find_replace</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fingerprint</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
first_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fitness_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flag</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flare</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flash_auto</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flash_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flash_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flight</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flight_land</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flight_takeoff</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flip</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flip_to_back</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flip_to_front</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder_open</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder_shared</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder_special</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
font_download</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_justify</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_bold</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_color_fill</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_color_reset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_color_text</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_indent_decrease</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_indent_increase</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_italic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_line_spacing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_list_bulleted</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_list_numbered</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_paint</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_quote</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_shapes</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_size</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_strikethrough</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_textdirection_l_to_r</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_textdirection_r_to_l</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_underlined</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forum</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward_10</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward_30</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
free_breakfast</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fullscreen</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fullscreen_exit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
functions</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
g_translate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gamepad</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
games</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gavel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gesture</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
get_app</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gif</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
golf_course</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gps_fixed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gps_not_fixed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gps_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grade</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gradient</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grain</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
graphic_eq</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grid_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grid_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
group</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
group_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
group_work</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hd</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_strong</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_weak</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
headset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
headset_mic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
healing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hearing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
help</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
help_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
high_quality</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
highlight</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
highlight_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
history</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
home</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hot_tub</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hotel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hourglass_empty</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hourglass_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
http</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
https</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
image</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
image_aspect_ratio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
import_contacts</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
import_export</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
important_devices</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
inbox</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
indeterminate_check_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
info</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
info_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
input</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_comment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_drive_file</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_emoticon</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_invitation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_link</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
invert_colors</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
invert_colors_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
iso</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_backspace</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_capslock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_hide</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_return</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_tab</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_voice</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
kitchen</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
label</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
label_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
language</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop_chromebook</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop_mac</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop_windows</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
last_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
launch</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
layers</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
layers_clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
leak_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
leak_remove</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lens</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
library_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
library_books</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
library_music</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lightbulb_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
line_style</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
line_weight</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
linear_scale</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
link</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
linked_camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
live_help</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
live_tv</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_activity</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_airport</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_atm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_cafe</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_car_wash</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_convenience_store</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_dining</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_drink</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_florist</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_gas_station</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_grocery_store</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_hospital</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_hotel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_laundry_service</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_library</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_mall</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_movies</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_offer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_parking</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_pharmacy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_pizza</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_play</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_post_office</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_printshop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_see</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_shipping</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_taxi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_city</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_disabled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_searching</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lock_open</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lock_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_6</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_one</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_two</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
loop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
loupe</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
low_priority</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
loyalty</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mail</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mail_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
map</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
markunread</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
markunread_mailbox</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
memory</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
menu</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
merge_type</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
message</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mic_none</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mic_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mode_comment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mode_edit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
monetization_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
money_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
monochrome_photos</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mood</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mood_bad</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
more</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
more_horiz</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
more_vert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
motorcycle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mouse</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
move_to_inbox</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
movie</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
movie_creation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
movie_filter</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
multiline_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
music_note</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
music_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
my_location</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
nature</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
nature_people</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
navigate_before</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
navigate_next</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
navigation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
near_me</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_cell</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_check</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_locked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_wifi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
new_releases</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
next_week</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
nfc</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
no_encryption</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
no_sim</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
not_interested</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
note</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
note_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_active</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_none</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_paused</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
offline_pin</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ondemand_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
opacity</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
open_in_browser</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
open_in_new</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
open_with</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pages</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pageview</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
palette</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pan_tool</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_fish_eye</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_horizontal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_vertical</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_wide_angle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
party_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pause</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pause_circle_filled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pause_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
payment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
people</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
people_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_camera_mic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_contact_calendar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_data_setting</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_device_information</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_identity</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_media</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_phone_msg</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_scan_wifi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_pin</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_pin_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
personal_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pets</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_android</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_bluetooth_speaker</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_forwarded</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_in_talk</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_iphone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_locked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_missed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_paused</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_erase</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_ring</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_setup</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_album</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_filter</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_library</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_size_select_actual</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_size_select_large</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_size_select_small</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
picture_as_pdf</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
picture_in_picture</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
picture_in_picture_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pie_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pie_chart_outlined</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pin_drop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
place</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_arrow</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_circle_filled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_for_work</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
playlist_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
playlist_add_check</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
playlist_play</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
plus_one</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
poll</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
polymer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pool</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
portable_wifi_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
power</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
power_input</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
power_settings_new</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pregnant_woman</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
present_to_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
print</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
priority_high</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
public</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
publish</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
query_builder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
question_answer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
queue_music</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
queue_play_next</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
radio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
radio_button_checked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
radio_button_unchecked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rate_review</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
receipt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
recent_actors</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
record_voice_over</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
redeem</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
redo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
refresh</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_from_queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_red_eye</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_shopping_cart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
reorder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
repeat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
repeat_one</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay_10</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay_30</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
reply</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
reply_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
report</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
report_problem</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restaurant</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restaurant_menu</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restore</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restore_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ring_volume</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
room</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
room_service</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rotate_90_degrees_ccw</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rotate_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rotate_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rounded_corner</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
router</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rowing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rss_feed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rv_hookup</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
satellite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
save</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
scanner</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
schedule</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
school</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_lock_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_lock_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_lock_rotation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_rotation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_share</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sd_card</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sd_storage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
search</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
security</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
select_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
send</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_dissatisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_neutral</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_satisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_very_dissatisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_very_satisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_applications</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_backup_restore</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_bluetooth</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_brightness</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_cell</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_ethernet</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_antenna</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_component</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_composite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_hdmi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_svideo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_overscan</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_power</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_remote</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_system_daydream</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_voice</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
share</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shop_two</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shopping_basket</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shopping_cart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
short_text</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
show_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shuffle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_4_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_connected_no_internet_4_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_no_sim</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_null</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_wifi_4_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_wifi_4_bar_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_wifi_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sim_card</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sim_card_alert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
skip_next</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
skip_previous</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
slideshow</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
slow_motion_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
smartphone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
smoke_free</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
smoking_rooms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sms_failed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
snooze</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sort</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sort_by_alpha</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
spa</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
space_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_group</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_notes</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_notes_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
spellcheck</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
star</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
star_border</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
star_half</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stars</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_current_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_current_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_primary_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_primary_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stop_screen_share</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
storage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
store</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
store_mall_directory</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
straighten</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
streetview</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
strikethrough_s</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
style</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subdirectory_arrow_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subdirectory_arrow_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subject</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subscriptions</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subtitles</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subway</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
supervisor_account</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
surround_sound</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_calls</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_horiz</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_vert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_vertical_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
switch_camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
switch_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sync</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sync_disabled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sync_problem</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
system_update</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
system_update_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tab</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tab_unselected</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tablet</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tablet_android</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tablet_mac</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tag_faces</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tap_and_play</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
terrain</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
text_fields</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
text_format</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
textsms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
texture</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
theaters</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
thumb_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
thumb_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
thumbs_up_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
time_to_leave</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timelapse</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timeline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer_10</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
title</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
toc</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
today</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
toll</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tonality</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
touch_app</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
toys</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
track_changes</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
traffic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
train</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tram</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
transfer_within_a_station</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
transform</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
translate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
trending_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
trending_flat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
trending_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tune</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
turned_in</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
turned_in_not</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tv</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
unarchive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
undo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
unfold_less</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
unfold_more</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
update</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
usb</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
verified_user</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vertical_align_bottom</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vertical_align_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vertical_align_top</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vibration</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
video_call</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
video_label</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
video_library</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
videocam</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
videocam_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
videogame_asset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_agenda</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_array</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_carousel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_column</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_comfy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_compact</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_day</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_headline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_module</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_quilt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_stream</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_week</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vignette</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
visibility</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
visibility_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
voice_chat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
voicemail</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_mute</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vpn_key</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vpn_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wallpaper</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
warning</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
watch</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
watch_later</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_auto</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_cloudy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_incandescent</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_iridescent</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_sunny</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wc</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
web</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
web_asset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
weekend</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
whatshot</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
widgets</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wifi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wifi_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wifi_tethering</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
work</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wrap_text</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
youtube_searched_for</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
zoom_in</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
zoom_out</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
zoom_out_map</i></a></div>

</div>
</center>

<center>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>

</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#000] text-[#000] bg-[#fff] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>     
</nav>

</center>






</template>
