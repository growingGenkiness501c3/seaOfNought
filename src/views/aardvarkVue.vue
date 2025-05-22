<script setup lang="ts">
import aardvarkComponent from '@/components/aardvarkComponent.vue'
import Clock from '@/components/Clock.vue'
import clockFlag from '@/components/clockFlag.vue'
import Flag from '@/components/Flag.vue'
import helloWorld from '@/components/helloWorld.vue'
import NaughtSeaHeader from '@/components/NaughtSeaHeader.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import NavigationBars from '@/components/NavigationBars.vue'
import NavigationButtonBar from '@/components/NavigationButtonBar.vue'
import NavigationRouterBar from '@/components/NavigationRouterBar.vue'
import oO0 from '@/components/oO0.vue'
import seaOfNoughtBar from '@/components/seaOfNoughtBar.vue'
import seaOfNoughtNavigationBar from '@/components/seaOfNoughtNavigationBar.vue'
import seaOfNoughtShipsLog from '@/components/seaOfNoughtShipsLog.vue'
import shipsLogHeader from '@/components/shipsLogHeader.vue'
import SplitOneTwoThree from '@/components/SplitOneTwoThree.vue'
import wordBar from '@/components/wordBar.vue'
import yearsBar from '@/components/yearsBar.vue'
import zer0Oo from '@/components/zer0Oo.vue'

import blackFlag from '@/components/color/blackFlag.vue'
import cyanFlag from '@/components/color/cyanFlag.vue'
import hueBar from '@/components/color/hueBar.vue'
import magentaFlag from '@/components/color/magentaFlag.vue'
import rainbowDots from '@/components/color/rainbowDots.vue'
import skyBottom from '@/components/color/skyBottom.vue'
import skyMini from '@/components/color/skyMini.vue'
import skyTop from '@/components/color/skyTop.vue'
import whiteFlag from '@/components/color/whiteFlag.vue'
import yellowFlag from '@/components/color/yellowFlag.vue'

defineOptions({
  name: "aardvarkVue"
});
</script>
<template>
<sub>Clock</sub><br><Clock />
<sub>aardvarkComponent</sub><br><aardvarkComponent />
<br>
<sub>blackFlag</sub><br><blackFlag>blackFlag</blackFlag><br>
<sub>clockFlag</sub><br><clockFlag>clockFlag</clockFlag><br>
<sub>cyanFlag</sub><br><cyanFlag>cyanFlag</cyanFlag><br>
<sub>Flag</sub><br><Flag>Flag</Flag><br><br>
<sub>helloWorld</sub><br><helloWorld /><br>
<sub>hueBar</sub><br><hueBar />
<sub>magentaFlag</sub><br><magentaFlag>magentaFlag</magentaFlag><br><br><br>
<sub>oO0</sub><br><oO0 /><br>
<sub>rainbowDots</sub><br><rainbowDots /><br>
<sub>seaOfNoughtBar</sub><br><seaOfNoughtBar />
<sub>seaOfNoughtNavigationBar</sub><br><seaOfNoughtNavigationBar /><br><br><br>
<sub>seaOfNoughtShipsLog</sub><br><seaOfNoughtShipsLog />
<sub>shipsLogHeader</sub><br><shipsLogHeader />
<sub>skyBottom</sub><br><skyBottom /><br>
<sub>skyMini</sub><br><skyMini /><br>
<sub>skyTop</sub><br><skyTop />
<hr>
  <sub>SplitOneTwoThree</sub><br><SplitOneTwoThree>
    <template #one>
      template #one
    </template>
    <template #two>
      template #two
    </template>
    <template #four>
      template #four
    </template>
  </SplitOneTwoThree>
<hr>
<br>
<sub>zer0Oo</sub><br><whiteFlag>whiteFlag</whiteFlag><br><br>
<sub>zer0Oo</sub><br><wordBar /><br>
<sub>zer0Oo</sub><br><yearsBar /><br><br>
<sub>zer0Oo</sub><br><yellowFlag>yellowFlag</yellowFlag><br><br><br>
<sub>zer0Oo</sub><br>
<zer0Oo />
<br>
</template>