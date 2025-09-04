<template>
  <center>
    <div>
<table class="table-auto border-separate border-spacing-[33px] border border-indigo-400">
  <tbody>
    <tr>
      <td
        v-for="thing in or_something.arrows"
        :key="thing.unicode"
        class="px-4 py-2 text-center align-top border border-indigo-400 w-[151px]"
      >
        <router-link :to="`/${thing['material icon']}`">
          <div class="flex flex-col items-center" :style="{ color: thing.hex }">
            <span>
              <img
                :src="'/' + thing.pngs"
                style="
                  width: 222px;
                  height: auto;
                  display: block;
                  transition: transform 615s;
                  transform: rotate(0deg);
                "
              />
            </span>
          </div>
        </router-link>
        <!--
        <a :href="thing.url" :target="thing.target">
          {{ thing['button name'] }}
        </a>
        -->
      </td>
    </tr>
  </tbody>
</table>



<!--
      <table class="table-auto border-collapse border border-indigo-400">
        <tbody>
          <tr>
            <td
              v-for="thing in or_something.arrows"
              :key="thing.unicode"
              class="px-4 py-2 text-center align-top border border-indigo-400 w-[151px]"
            >
              <router-link :to="`/${thing['material icon']}`">
                <div class="flex flex-col items-center" :style="{ color: thing.hex }">
                  <span>
                    <img
                      :src="'/' + thing.pngs"
                      style="
                      width: 222px
                      height: auto;
                      display: block;
                      transition: transform 615s;
                      transform: rotate(0deg);
                    "
                      onmouseover="this.style.transform='rotate(3600000deg)'"
                      onmouseout="this.style.transform='rotate(-3600000deg)'"
                    />
                  </span>
                </div>
              </router-link>
              <!--
              <a :href="thing.url" :target="thing.target">
                {{ thing['button name'] }}
              </a>
              --><!--
            </td>
          </tr>
        </tbody>
      </table>
    -->
    </div>
  </center>
</template>
<script setup lang="ts">
import { useOrSomethingStore } from '@/stores/or_something.ts'
const or_something = useOrSomethingStore()
</script>
