<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';
import Flag from '@/components/Flag.vue'


const currenttime = ref('none');
const currentdate = ref('none');

function updateTime() {
  currenttime.value = moment().format('h:mm:ss a');
  currentdate.value = moment().format('dddd, MMMM Do, YYYY');
}

// Update every second
onMounted(() => {
  updateTime(); // initialize immediately
  setInterval(updateTime, 1000);
});
</script>

<template>
  <Flag class="orbitron">&nbsp;&nbsp;{{ currenttime }}&nbsp;&nbsp;</Flag>
  <br />
  <Flag class="orbitron" style="font-size: 55px;"><center>&nbsp;&nbsp;&nbsp;{{ currentdate }}&nbsp;&nbsp;&nbsp;</center></Flag>
  
  <code class="orbitron"><center>&nbsp;&nbsp;&nbsp;⾈ exploring https://tailwindcss.com/ ⛵</center><br></code>
</template>
