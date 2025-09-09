<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';
const currenttime = ref('none');
function updateTime() {
  currenttime.value = moment().format('h:mm:ss a');
}
// Update every second
onMounted(() => {
  updateTime(); // initialize immediately
  setInterval(updateTime, 1000);
});
</script>
<template>
  <span>&nbsp;&nbsp;{{ currenttime }}&nbsp;&nbsp;</span>
</template>