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
  <Flag class="hubot-sans">&nbsp;&nbsp;{{ currenttime }}&nbsp;&nbsp;</Flag>
  <br />
  <Flag class="hubot-sans" style="font-size: 22px;">&nbsp;&nbsp;&nbsp;{{ currentdate }}&nbsp;&nbsp;&nbsp;</Flag>
  <br />
  <code class="lime">exploring https://tailwindcss.com/<br></code>
</template>
