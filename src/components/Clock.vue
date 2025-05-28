<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';
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
  <span class="orbitron text-sky-300" style="font-size: 111px;">&nbsp;&nbsp;{{ currenttime }}&nbsp;&nbsp;</span><hr>
  <span class="mea-culpa-regular text-sky-400" style="font-size: 55px;"><center>&nbsp;&nbsp;&nbsp;{{ currentdate }}&nbsp;&nbsp;&nbsp;</center></span>
</template>
