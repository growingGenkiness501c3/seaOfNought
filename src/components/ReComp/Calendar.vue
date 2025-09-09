<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';
const currentdate = ref('none');
function updateTime() {
  currentdate.value = moment().format('dddd, MMMM Do, YYYY');
}
// Update every second
onMounted(() => {
  updateTime(); // initialize immediately
  setInterval(updateTime, 1000);
});
</script>
<template>
  <div>&nbsp;&nbsp;&nbsp;{{ currentdate }}&nbsp;&nbsp;&nbsp;</div>
</template>
