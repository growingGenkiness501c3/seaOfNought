<template>
<div class="flex items-center justify-center">
  <div class="flex gap-[33px]">
    <div
      v-for="thing in or_something.things"
      :key="thing.unicode"
      class="flex items-center justify-center border border-indigo-400 w-[33px] h-[33px] text-center"
    >
      <router-link :to="`/${thing['material icon']}`">
        <img
          :src="'/' + thing.pngs"
          class="w-[111px] block transition-transform duration-[615s]"
          style="transform: rotate(0deg);"
        />
      </router-link>
    </div>
  </div>
</div>



  <!--
<div class="flex items-center justify-center">
  <div class="flex gap-[33px]">
    <div
      v-for="thing in or_something.things"
      :key="thing.unicode"
      class="text-center border border-indigo-400 w-[111px]"
    >
      <router-link :to="`/${thing['material icon']}`">
        <div class="flex flex-col items-center" :style="{ color: thing.hex }">
          <span>
            <img
              :src="'/' + thing.pngs"
              class="w-[111px] block transition-transform duration-[615s]"
              style="transform: rotate(0deg);"
              onmouseover="this.style.transform='rotate(3600000deg)'"
              onmouseout="this.style.transform='rotate(-3600000deg)'"
            />
          </span>
        </div>
      </router-link>
    </div>
  </div>
</div>


<!--
<div class="flex justify-center gap-[33px]">
  <div
    v-for="thing in or_something.things"
    :key="thing.unicode"
    class="text-center border border-indigo-400 w-[111px]"
  >
    <router-link :to="`/${thing['material icon']}`">
      <div class="flex flex-col items-center" :style="{ color: thing.hex }">
        <span>
          <img
            :src="'/' + thing.pngs"
            class="w-[111px] block transition-transform duration-[615s]"
            style="transform: rotate(0deg);"
            onmouseover="this.style.transform='rotate(3600000deg)'"
            onmouseout="this.style.transform='rotate(-3600000deg)'"
          />
        </span>
      </div>
    </router-link>
  </div>
</div>



<!--  <center>
    <div>
      <table class="table-auto border-collapse border border-indigo-400">
        <tbody>
          <tr>
            <td
              v-for="thing in or_something.things"
              :key="thing.unicode"
              class="px-4 py-2 text-center align-top border border-indigo-400 w-[111px]"
            >
              <router-link :to="`/${thing['material icon']}`">
                <div class="flex flex-col items-center" :style="{ color: thing.hex }">
                  <span>
                    <img
                      :src="'/' + thing.pngs"
                      class="w-[111px]"
                      style="display: block; transition: transform 615s; transform: rotate(0deg)"
                      onmouseover="this.style.transform='rotate(3600000deg)'"
                      onmouseout="this.style.transform='rotate(-3600000deg)'"
                    />
                  </span>
                </div>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </center>-->
</template>
<script setup lang="ts">
import { useOrSomethingStore } from '@/stores/or_something.ts'
const or_something = useOrSomethingStore()
</script>
