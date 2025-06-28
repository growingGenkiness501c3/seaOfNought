<script setup lang="ts">
defineOptions({
  name: "purpleVue"
});
</script>
<template>
<div>
<div class="overflow-x-auto">
  <table class="table-auto border-collapse w-full text-left bg-purple-500/50">
    <tbody>
      <tr><th></th><th class="text-purple-50 align-middle text-left">0 routing</th></tr>
      <tr><th></th><th class="text-purple-100 align-middle text-left">yes, meleneth, each color bar is in its own file</th></tr>
      <tr><th></th><th class="text-purple-200 align-middle text-left">2</th></tr>
      <tr><th></th><th class="text-purple-300 align-middle text-left">3</th></tr>
      <tr><th></th><th class="text-purple-400 align-middle text-left">4</th></tr>
      <tr><th></th><th class="text-purple-500 align-middle text-left">5</th></tr>
      <tr><th></th><th class="text-purple-600 align-middle text-left">6</th></tr>
      <tr><th></th><th class="text-purple-700 align-middle text-left">7</th></tr>
      <tr><th></th><th class="text-purple-800 align-middle text-left">8</th></tr>
      <tr><th></th><th class="text-purple-900 align-middle text-left">9</th></tr>
      <tr><th></th><th class="text-purple-950 align-middle text-left">+ bg-purple-500/50 for opaque text and 50% trans background</th></tr>
    </tbody>
  </table>
</div>
</div>

<div class="columns-3 p-10 gap-6 text-justify hubot-sans">
<p>

<dfn>I have files named 1.png through 30.png  I want to make a transparent video out of them - they are transparent png's - of each one displayed for 1 second at 30fps</dfn>
<br>

<br>To create a **transparent video** from `1.png` through `30.png`, where each PNG is shown for 1 second at **30fps** (i.e., each image held for 30 frames), follow these steps using **FFmpeg**:

<br>---<br>

<br>### ✅ Requirements

<br>* Make sure all PNGs (`1.png` to `30.png`) are:

<br>  * Sequentially named
<br>  * Same resolution
<br>  * Have alpha transparency (RGBA)
<br>* FFmpeg must be compiled with support for alpha (`libvpx` or `prores_ks` or `mov` with `qtrle`/`vp9`)

<br>---<br>

<br>### 🔧 Step-by-Step: Using FFmpeg

<br>#### Option 1: WebM with VP9 + Alpha (Recommended for web)

<br>```bash
ffmpeg -framerate 30 -i %d.png -filter_complex "tblend=all_mode=replace" -c:v libvpx-vp9 -pix_fmt yuva420p -r 30 output.webm
```<br>

<br>* `-framerate 30`: Each input frame is 1/30 second.
<br>* `-i %d.png`: FFmpeg reads `1.png` to `30.png`.
<br>* `-c:v libvpx-vp9`: VP9 codec (supports transparency).
<br>* `-pix_fmt yuva420p`: Pixel format with alpha.
<br>* `-r 30`: Output framerate (ensures smoothness).

<br>**Each PNG will be shown for only 1 frame** with this, so we need to make each one last 30 frames:

<br>---<br>

<br>#### 🧠 Better: Duplicate each image 30 times using `loop` filter

<br>```bash
ffmpeg -framerate 30 -start_number 1 -i %d.png -vf "loop=loop=29:size=1:start=0,setpts=N/FRAME_RATE/TB" -c:v libvpx-vp9 -pix_fmt yuva420p output.webm
```<br>

But this loops just the **first** image. So, instead, generate a video per frame and concat:

<br>---<br>

<br>### 🧱 Best: Scripted Image Duplication Approach

<br>You can create a list of repeated frames in a text file and encode from that:

<br>#### 1. Create an `input.txt` file like:

<br>```
file '1.png'
duration 1
file '2.png'
duration 1
<br>...
file '30.png'
duration 1
```<br>

<br>Add the final image again **without duration**:

<br>```
file '30.png'
```<br>

<br>#### 2. Run FFmpeg:

<br>```bash
ffmpeg -f concat -safe 0 -i input.txt -framerate 30 -c:v libvpx-vp9 -pix_fmt yuva420p output.webm
```<br>

This way:

<br>* Each image lasts 1 second (30 frames)
<br>* The alpha channel is preserved in `.webm`

<br>---<br>

<br>### 🧪 Transparent Format Alternatives

<br>* `output.mov` with `qtrle` or `prores_ks` + `-pix_fmt yuva444p10le` (for Apple workflows)
<br>* `apng` if you're using it in compatible platforms

Let me know your platform or use case (web? Blender? OBS?) if you need a different output format.



</p>
</div>


</template>