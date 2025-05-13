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
  <clockFlag class="orbitron">&nbsp;&nbsp;{{ currenttime }}&nbsp;&nbsp;</clockFlag>
  <br />
  <clockFlag class="orbitron" style="font-size: 55px;"><center>&nbsp;&nbsp;&nbsp;{{ currentdate }}&nbsp;&nbsp;&nbsp;</center></clockFlag>
</template>
