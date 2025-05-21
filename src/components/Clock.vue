<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';
import clockFlag from '@/components/clockFlag.vue'
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
  <clockFlag class="orbitron text-sky-500" style="font-size: 77px;">&nbsp;&nbsp;{{ currenttime }}&nbsp;&nbsp;</clockFlag><hr>
  <clockFlag class="orbitron text-sky-200" style="font-size: 22px;"><center>&nbsp;&nbsp;&nbsp;{{ currentdate }}&nbsp;&nbsp;&nbsp;</center></clockFlag>
</template>
