<script setup lang="ts">
import Flag from '@/components/Flag.vue'

import blackFlag from '@/components/blackFlag.vue'
import whiteFlag from '@/components/whiteFlag.vue'
import yellowFlag from '@/components/yellowFlag.vue'
import magentaFlag from '@/components/magentaFlag.vue'
import cyanFlag from '@/components/cyanFlag.vue'
import SplitOneTwoThree from '@/components/SplitOneTwoThree.vue'




defineOptions({
  name: "Forecastle"
});
</script>
<template>
<blackFlag>🏰begin &nbsp; begin &nbsp; begin &nbsp; begin &nbsp; begin &nbsp; begin &nbsp; </blackFlag>
<br><br><br><br>
<center>
&nbsp;oO0&nbsp;<whiteFlag>&nbsp;oO0&nbsp;
  <blackFlag>&nbsp;oO0&nbsp;
    <yellowFlag>&nbsp;oO0&nbsp;
      <magentaFlag>&nbsp;oO0&nbsp;
        <cyanFlag>&nbsp;oO0&nbsp;
          <flag>&nbsp;🏰&nbsp;&nbsp;
          </flag>&nbsp;oO0&nbsp;&nbsp;
        </cyanFlag>&nbsp;oO0&nbsp;
      </magentaFlag>&nbsp;oO0&nbsp;
    </yellowFlag>&nbsp;oO0&nbsp;
  </blackFlag>&nbsp;oO0&nbsp;
</whiteFlag>&nbsp;oO0&nbsp;<br><br><br><br><br>
</center>

<SplitOneTwoThree>
  <template #one>
    <yellowFlag>file:///D:/125/html/level_zer0.html
    </yellowFlag>
  </template>
  <template #two>
    <magentaFlag>http://vuemaker.applica.tion/views
    </magentaFlag>
  </template>
  <template #four>
    <cyanFlag>🏰http://vuemaker.applica.tion/views🏰
    </cyanFlag>
  </template>
</SplitOneTwoThree>


<SplitOneTwoThree>
  <template #one>
    <yellowFlag>🏰<hr>🏰
    </yellowFlag>
  </template>
  <template #two>
    <magentaFlag>🏰<hr>🏰
    </magentaFlag>
  </template>
  <template #four>
    <cyanFlag>🏰<hr>🏰
    </cyanFlag>
  </template>
</SplitOneTwoThree>





<br>
<blackFlag>🏰end &nbsp; end &nbsp; end &nbsp; end &nbsp; end &nbsp; end &nbsp; end </blackFlag>
</template>