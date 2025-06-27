
<script setup lang="ts">
import sailboat_00 from "@/components/sailboat/sailboat_00.vue"
import turtle_00 from "@/components/turtle/turtle_00.vue"

import { ref,onMounted } from 'vue';

import circles from '@/components/circles.vue'

import naz_00 from "@/components/naz/naz_00.vue"

import tenConcentricCircles from "@/components/TenConcentricCircles/TenConcentricCircles.vue"
import tenConcentricCirclesReversed from "@/components/TenConcentricCircles/TenConcentricCirclesReversed.vue"

/*
const one_color = ref(get_random_color());
const two_color = ref(get_random_color());
const three_color = ref(get_random_color());
const four_color = ref(get_random_color());
const five_color = ref(get_random_color());
const six_color = ref(get_random_color());



function get_random_color() {
  const colors = ["#ff0", "#f0f", "#0ff, #f00, #0f0, #00f"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateColor() {
  one_color.value = get_random_color();
  two_color.value = get_random_color();
  three_color.value = get_random_color();
  four_color.value = get_random_color();
  five_color.value = get_random_color();
  six_color.value = get_random_color();

}
// Update every second
onMounted(() => {
  updateColor(); // initialize immediately
  setInterval(updateColor, 1000);
});

*/

defineOptions({
  name: "WIP_04"
});

</script>
<template>
<h1>WIP_04</h1>
<naz_00 />

<div class="grid grid-cols-6 grid-rows-1 place-items-center gap-4 h-screen">
  <div class="">
    <tenConcentricCircles class="w-111" one="#ffffff" ten="#fff" />
  </div>
  <div class="">
    <tenConcentricCircles class="w-222" />
  </div>
  <div class="">
    <tenConcentricCirclesReversed class="w-111" one="#ffffff" ten="#fff" />
  </div>
  <div class="">
    <tenConcentricCirclesReversed class="w-222" />
  </div>
  <div class="">
    <naz_00 />
  </div>
  <div class="">
    <circles />
  </div>
</div>


<div class="grid grid-cols-6 grid-rows-1 place-items-center gap-4 h-screen">
  <div class="p-4 w-333">
    <circles :one="one_color" :two="two_color" :three="three_color" :four="four_color" />
  </div>
  <div class="p-4 w-333">
    <circles one="#335599" />
  </div>
  <div class="p-4 w-333">
    <circles one="#123456" />
  </div>
  <div class="p-4 w-333">
    <circles />
  </div>
  <div class="p-4 w-333">

  </div>
  <div class="p-4 w-333">

  </div>
</div>


<circles :one="one_color" :two="two_color" :three="three_color" :four="four_color" />
<circles one="#335599" />
<circles one="#123456" />
<circles />

import { ref,onMounted } from 'vue';

import Clock from '@/components/Clock.vue'
import LargeClock from '@/components/LargeClock.vue'
import blenderIcon from '@/components/svgsAsVues/blenderIcon.vue';
import circles from '@/components/circles.vue'

defineOptions({
  name: "BlenderVue"
});

const one_color = ref(get_random_color());
const two_color = ref(get_random_color());
const three_color = ref(get_random_color());
const four_color = ref(get_random_color());

function get_random_color() {
  const colors = ["#335599", "#123456", "#00ffff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateColor() {
  one_color.value = get_random_color();
  two_color.value = get_random_color();
  three_color.value = get_random_color();
  four_color.value = get_random_color();
}
// Update every second
onMounted(() => {
  updateColor(); // initialize immediately
  setInterval(updateColor, 1000);
});
/script
<circles :one="one_color" :two="two_color" :three="three_color" :four="four_color" />
<circles one="#335599" />
<circles one="#123456" />
<circles />




<div class="relative w-[111px] h-[111px]">
    <div class="absolute inset-0 text-[pink]">
      <svg id="footprint" viewBox="0 0 1890 1887">
        <path
          style="fill:currentColor"
          d="M 898,1866.9722 C 804.71042,1861.7695 718.90819,1844.3608 633.5,1813.307 481.62372,1758.0858 348.56517,1665.7724 243.88539,1543 179.47249,1467.4541 128.30523,1383.3111 91.280775,1292.0461 52.986993,1197.6523 31.379891,1102.7777 24.882975,1000.5 c -1.553705,-24.4592 -1.553705,-87.5408 0,-112 C 33.012031,760.52838 65.536653,640.8776 123.01345,527.5 173.72624,427.46497 240.57974,339.46909 324,262.95159 412.47767,181.79516 518.52846,117.39962 631,76.53683 701.80092,50.813673 770.22342,34.642384 842.5,26.549938 c 57.70886,-6.46137 129.33649,-7.21215 188,-1.970561 115.0225,10.277264 226.1875,42.053964 330.5,94.473903 136.6,68.64534 253.506,169.62119 342.2887,295.64673 83.003,117.8215 138.9755,259.76193 158.642,402.29999 9.3495,67.7626 11.0284,147.89682 4.5255,216 -10.7882,112.9814 -41.6318,220.2279 -92.8934,323 -95.6416,191.7476 -254.8079,344.4978 -449.7292,431.6002 -98.446,43.9915 -198.1353,69.3232 -306.8336,77.9683 -22.95889,1.826 -95.98322,2.6874 -119,1.4037 z"
          />         
      </svg>
    </div>

    <div class="absolute inset-0 text-[hotpink]">
      <svg id="pupil" viewBox="0 0 1890 1887">
        <path style="fill:currentColor"
          d="m 928.25152,1116.9299 c -50.20287,-4.8543 -98.33088,-34.5032 -126.50097,-77.9299 -21.09743,-32.5236 -30.38042,-68.55693 -27.6484,-107.32164 1.61895,-22.97134 7.04838,-43.01916 17.08406,-63.0817 24.70671,-49.39171 68.23195,-83.10608 121.71224,-94.27753 11.24054,-2.34803 14.86962,-2.6365 33.60155,-2.67097 17.82269,-0.0328 22.71481,0.30049 32.33379,2.20283 44.50551,8.80181 83.05481,33.62629 109.70901,70.64901 7.8656,10.9253 19.3524,33.62552 23.4468,46.33564 10.9755,34.07036 10.9777,73.20201 0.01,107.32872 -4.0139,12.48474 -15.5486,35.28004 -23.3471,46.13924 -29.9636,41.7233 -75.6426,68.3237 -124.79881,72.6747 -12.81016,1.1339 -23.52207,1.1193 -35.59827,-0.048 z"
          />          
      </svg>
    </div>
    <div class="absolute inset-0 text-[aqua]">
      <svg id="outline" viewBox="0 0 1890 1887">
        <path style="fill:currentColor"
          d="m 898.5,1866.9786 c -92.57352,-4.9771 -179.48929,-22.5805 -265,-53.6716 C 481.62372,1758.0858 348.56517,1665.7724 243.88539,1543 151.59826,1434.7622 86.583961,1308.8836 50.978583,1169.5 14.269932,1025.7974 14.286866,863.18138 51.025464,719.30953 77.65258,615.03521 120.50362,518.9472 179.82187,430.5 244.02143,334.77446 325.14084,252.33537 421,185.39827 483.89143,141.48207 558.03963,103.04455 631,76.53683 701.80092,50.813673 770.22342,34.642384 842.5,26.549938 c 57.44283,-6.431584 129.75913,-7.191029 188,-1.974321 115.1401,10.313239 226.1869,42.057399 330.5,94.477663 136.6,68.64534 253.506,169.62119 342.2887,295.64673 83.003,117.8215 138.9755,259.76193 158.642,402.29999 9.2726,67.20469 10.9094,146.11555 4.4804,216 -12.5689,136.6268 -58.5694,274.1663 -131.4402,393 -97.6564,159.2527 -241.5723,285.8285 -411.1373,361.6002 -98.7295,44.1182 -197.4918,69.1833 -307.2175,77.9696 -22.60048,1.8097 -94.67059,2.6693 -118.1161,1.4088 z m 115,-117.406 c 87.7428,-7.6738 164.0491,-26.3793 244.826,-60.0159 176.4574,-73.4791 322.0049,-208.4904 408.0989,-378.5567 27.7251,-54.7668 49.8186,-113.2962 63.9824,-169.5 32.2326,-127.9037 32.2273,-266.60215 -0.015,-394 C 1695.2302,608.56655 1623.2836,480.59004 1523.0329,378.65585 1423.0961,277.04076 1301.9287,205.53404 1162.9728,166.16713 1113.6803,152.20231 1064.227,143.50393 1007.5,138.82087 982.88881,136.78911 905.89499,137.09052 880.50723,139.31802 810.48857,145.46138 749.88905,158.1979 686.24527,180.14707 587.17322,214.31457 500.5618,263.77393 420.35501,331.98342 389.93406,357.854 343.52439,405.86409 317.38915,438.5 228.10557,549.99127 169.29051,683.90152 148.07271,824 c -10.26967,67.80936 -11.52427,145.42792 -3.47519,215 15.09368,130.4618 65.09258,261.2507 141.25513,369.5 28.92933,41.1171 58.30744,75.6522 95.29007,112.0174 68.39128,67.2494 144.51563,119.5471 231.54466,159.0721 88.06287,39.9945 182.72783,64.2395 274.81262,70.3832 8.8,0.5871 18.25,1.2312 21,1.4313 13.02027,0.9474 88.22578,-0.3643 105,-1.8314 z"
          />
      </svg>
    </div>

    <div class="absolute inset-0 text-[green]">
      <svg id="lightblue" viewBox="0 0 1890 1887">
        <path
          style="fill:currentColor"
          d="m 921.5,1290.4066 c -51.89061,-5.0702 -87.4678,-15.1427 -130.53263,-36.9559 C 707.11664,1210.9787 644.70641,1137.2063 615.53334,1046.0779 605.124,1013.562 600.76162,983.56412 600.76162,944.5 c 0,-42.28226 4.94625,-73.17369 17.61288,-110 27.15896,-78.96056 80.14057,-144.59635 151.14402,-187.24342 34.38502,-20.6528 77.016,-37.0465 113.48148,-43.63916 23.95842,-4.33149 33.0326,-5.04709 64,-5.04709 37.32833,0 55.3706,2.09604 85.5,9.93289 98.1384,25.52641 181.1967,93.52003 225.9846,184.99678 17.5396,35.82381 27.3684,68.58961 32.6968,109 1.773,13.44578 1.7885,70.37297 0.023,84 -3.9514,30.4987 -9.8518,53.7527 -20.6977,81.5719 -37.6817,96.6517 -115.1463,171.0687 -213.4438,205.0466 -21.3277,7.3722 -39.6157,11.6063 -66.71281,15.4456 -10.32111,1.4623 -59.32049,2.7736 -68.85009,1.8425 z m 51.76475,-175.0008 c 36.54015,-5.0211 71.24205,-23.3517 98.92135,-52.2534 50.5826,-52.8164 62.2543,-131.23879 29.1863,-196.1034 -17.4371,-34.20369 -45.7292,-62.01206 -79.8724,-78.50663 -62.81515,-30.34601 -137.63813,-19.61985 -189.50893,27.16684 -17.47466,15.76188 -30.03047,32.41734 -40.55049,53.79079 -7.39279,15.01988 -11.45407,26.88146 -14.6353,42.7446 -1.91394,9.54383 -2.25719,14.44879 -2.25719,32.2554 0,17.80661 0.34325,22.71157 2.25719,32.2554 12.30693,61.3682 57.07339,112.3313 116.04821,132.1117 25.0603,8.4053 51.29965,10.539 80.41126,6.5387 z"
          id="path1" />
      </svg>
    </div>

    <div class="absolute inset-0 text-[#ff8]">
      <svg id="white" viewBox="0 0 1890 1887">
        <path
          style="fill:currentColor"
          d="M 927.12935,1463.9089 C 878.15097,1461.8824 832.0138,1453.7764 788,1439.4647 c -28.46672,-9.2563 -58.13411,-21.4718 -77.5,-31.9104 -27.06561,-14.5889 -24.71075,-13.2778 -31.55843,-17.5701 -3.05714,-1.9163 -6.30982,-3.9342 -7.22818,-4.4842 -3.76448,-2.2545 -30.44548,-20.5255 -32.73845,-22.4191 -3.62411,-2.9928 -4.09047,-3.3563 -8.47494,-6.6054 -2.2,-1.6303 -4.225,-3.1917 -4.5,-3.4698 -0.275,-0.2781 -2.525,-2.0653 -5,-3.9715 -21.07644,-16.2328 -53.05088,-47.7467 -74.84033,-73.7623 -14.84291,-17.7218 -38.81841,-52.5029 -51.88676,-75.2719 -35.95996,-62.653 -58.07827,-133.7989 -65.4416,-210.5 -1.62014,-16.87641 -1.62014,-73.12359 0,-90 6.50314,-67.74078 23.64198,-128.46629 52.63677,-186.5 9.32313,-18.66045 27.89586,-50.12075 36.60198,-62 1.4108,-1.925 6.33884,-8.675 10.9512,-15 25.33179,-34.7379 59.51014,-70.2161 93.47874,-97.03389 4.4,-3.47375 8.225,-6.5861 8.5,-6.91634 C 632.38396,530.38781 671.55848,503 672.55173,503 c 0.22519,0 3.00567,-1.68038 6.17885,-3.73418 3.17318,-2.0538 6.66942,-4.23326 7.76942,-4.84324 1.1,-0.60999 3.8,-2.13606 6,-3.39128 55.28479,-31.54295 121.77045,-53.63484 186.5,-61.97031 42.77952,-5.50889 90.78296,-5.68608 132.5,-0.48909 72.2915,9.00587 143.6349,33.8658 204.6401,71.30775 1.452,0.89119 5.052,3.05696 8,4.81282 4.5503,2.71022 27.2852,18.47865 30.3599,21.0569 0.55,0.4612 5.275,4.0425 10.5,7.95844 5.225,3.91594 10.9314,8.39616 12.6808,9.95604 1.7494,1.55988 5.5602,4.86115 8.4683,7.33615 18.9744,16.14821 45.0338,42.65333 59.8509,60.87447 1.925,2.36724 3.95,4.82641 4.5,5.46481 0.55,0.63839 2.1865,2.73572 3.6366,4.66072 1.4502,1.925 3.4752,4.47596 4.5,5.66881 1.8851,2.19408 2.3283,2.78323 10.3245,13.72616 7.0398,9.63408 30.0389,44.91488 30.0389,46.07992 0,0.20366 3.2805,6.36763 7.2901,13.6977 13.3248,24.35993 25.8435,53.95858 35.6273,84.2355 24.7377,76.55337 31.01,157.7793 18.5795,240.60481 -8.2907,55.2426 -30.5207,120.4576 -56.8241,166.7024 -2.5701,4.5184 -4.6728,8.437 -4.6728,8.708 0,1.5083 -27.8262,43.7292 -33.4063,50.6876 -1.1515,1.436 -2.7687,3.6154 -3.5937,4.8431 -0.825,1.2277 -2.5285,3.4278 -3.7856,4.8891 -1.257,1.4613 -4.166,5.1319 -6.4643,8.1569 -27.913,36.7389 -86.814,89.484 -127.5904,114.2558 -2.9371,1.7843 -6.5371,3.97 -8,4.857 -34.2963,20.7969 -66.0822,35.4994 -104.6597,48.4103 -46.6091,15.5989 -93.9878,24.3921 -140,25.9831 -8.8,0.3042 -18.25,0.6903 -21,0.858 -2.75,0.1676 -13.26679,-0.037 -23.37065,-0.4553 z m 62.28209,-176.4238 c 21.85236,-2.5669 48.52666,-8.6642 69.10936,-15.7972 37.136,-12.8695 72.7846,-32.5816 104.8089,-57.9548 12.9116,-10.23 41.8954,-39.1549 52.4536,-52.3471 50.5069,-63.1066 76.4268,-136.6628 76.4268,-216.886 0,-56.56924 -11.5013,-105.19164 -36.6643,-155 C 1206.9923,693.39168 1118.6693,626.37305 1012.5,605.0793 979.66303,598.49338 930.45006,597.4239 896,602.54756 818.49665,614.07442 746.05121,652.6315 692.70868,710.74375 c -28.48599,31.03312 -52.88835,70.18194 -68.57791,110.01985 -23.39429,59.4013 -29.01094,132.60156 -15.06619,196.3535 6.74706,30.8459 14.27547,52.2032 28.43559,80.6687 32.16064,64.6514 81.87876,116.0273 146.2258,151.1015 42.2695,23.0402 90.22066,37.1047 136.77403,40.1171 16.90039,1.0937 53.54583,0.2857 68.91144,-1.5193 z"
          id="path1" />
      </svg>
    </div>

    <div class="absolute inset-0 text-[teal]">
      <svg id="darkblue" viewBox="0 0 1890 1887">
        <path
          style="fill:currentColor"
          d="M 908.5,1751.9145 C 832.11213,1748.1732 767.8496,1736.3587 696,1712.8469 544.76586,1663.3576 413.17344,1572.0243 314.41062,1448 214.2967,1322.2791 152.88692,1166.6506 140.98737,1008.5 c -2.72106,-36.16423 -2.72322,-92.0299 -0.005,-128 C 152.0917,733.49523 206.43886,587.14796 294.60869,466.81173 406.57385,313.99909 567.49882,206.09041 752.71874,159.62474 c 125.3805,-31.45389 265.45306,-31.30562 389.97176,0.41278 151.2205,38.52014 282.7268,115.10677 389.7153,226.96248 120.9343,126.43586 198.9111,293.64519 218.0151,467.5 3.4003,30.94382 4.0283,44.82531 4.0487,89.5 0.028,62.35 -2.9846,97.1332 -13.0799,151 -28.2686,150.8355 -102.9554,296.2776 -209.0011,407 -99.1268,103.4984 -216.4436,175.2708 -355.6466,217.5784 -83.645,25.422 -177.76169,36.7676 -268.242,32.3361 z m 77.55011,-288.9478 c 114.35079,-8.7849 220.09859,-53.7585 305.40119,-129.8844 15.2972,-13.6515 41.999,-41.1277 54.4569,-56.0361 53.0895,-63.5325 89.7565,-137.0353 108.0242,-216.5462 18.9618,-82.53225 16.7662,-174.98233 -6.0799,-256 C 1424.1371,720.3995 1380.9792,646.09323 1319,582.65111 c -27.0905,-27.72994 -52.2501,-48.99209 -81.5,-68.87486 -72.3597,-49.18689 -149.3402,-77.08198 -240,-86.96774 -18.95359,-2.06675 -86.94982,-1.73395 -106,0.5188 -66.01211,7.80616 -123.00368,24.67079 -178,52.67278 C 600.57613,537.49655 510.56189,635.55665 463.81778,752 c -53.00661,132.04376 -48.56805,283.3384 12.107,412.6841 43.73085,93.2245 118.57622,175.2099 208.61343,228.5147 66.42863,39.3278 143.09401,63.4944 220.96179,69.6518 15.86444,1.2545 64.8136,1.3251 80.55011,0.1161 z"
          id="path1" />
      </svg>
    </div>


</div>


















<div class="grid grid-cols-[repeat(32,minmax(0,1fr))] w-full h-6 hubot-sans text-[33px] gap-1 p-1 cursor-pointer text-center">
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_00"> ⓪ </RouterLink><sailboat_00 /><turtle_00 /></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_01"> ① </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_02"> ② </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_03"> ③ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_04"> ④ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_05"> ⑤ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_06"> ⑥ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_07"> ⑦ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_08"> ⑧ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_09"> ⑨ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_10"> ⑩ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_11"> ⑪ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_12"> ⑫ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_13"> ⑬ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_14"> ⑭ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_15"> ⑮ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_16"> ⑯ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_17"> ⑰ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_18"> ⑱ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_19"> ⑲ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_20"> ⑳ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_21"> ㉑ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_22"> ㉒ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_23"> ㉓ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_24"> ㉔ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_25"> ㉕ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_26"> ㉖ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_27"> ㉗ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_28"> ㉘ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_29"> ㉙ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_30"> ㉚ </RouterLink></div>
  <div class=""><RouterLink class="hover:text-pink-300 flex justify-center items-center text-sky-300" to="/WIP_31"> ㉛ </RouterLink></div>
</div>
<br>

<pre>

script setup lang="ts"
import { ref,onMounted } from 'vue';

import Clock from '@/components/Clock.vue'
import LargeClock from '@/components/LargeClock.vue'
import blenderIcon from '@/components/svgsAsVues/blenderIcon.vue';
import circles from '@/components/circles.vue'

defineOptions({
  name: "BlenderVue"
});

const one_color = ref(get_random_color());
const two_color = ref(get_random_color());
const three_color = ref(get_random_color());
const four_color = ref(get_random_color());

function get_random_color() {
  const colors = ["#335599", "#123456", "#00ffff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateColor() {
  one_color.value = get_random_color();
  two_color.value = get_random_color();
  three_color.value = get_random_color();
  four_color.value = get_random_color();
}
// Update every second
onMounted(() => {
  updateColor(); // initialize immediately
  setInterval(updateColor, 1000);
});
/script
template class="#ffffff80"
clock /
<span class="text-[#f0f]"><blenderIcon /></span>
<h1 class="text-[99px]">Vue-ing Blender</h1>
<hr />
Look Ma, NO LEGS
<circles :one="one_color" :two="two_color" :three="three_color" :four="four_color" />
<circles one="#335599" />
<circles one="#123456" />
<circles />

STIL NO LEGS
<hr />
<h2 class="text-[99px]">first,</h2>
<pre class="text-[33px]">let's make some text to animate a transparent video that can serve as an overlay in OBS during a twitch stream or other video.</pre>
<br>
<code>Step 1 -- choose a google font from here : https://fonts.google.com/</code>
<br>
<code>ChatGPT: please recommend a large friendly font with some sass from google fonts for a hitchhiker's guide to the galaxy themed "don't panic" animation</code>
<br>
<pre class="columns-3 gap-3 text-justify p-10 w-555 break-words rajdhani-light text-[33px]">
ChatGPT said:
Great theme!
For a "DON'T PANIC" animation inspired by 
<h1>The Hitchhiker's Guide to the Galaxy,</h1>
you're going for something:
Large and legible
Friendly and informal
With a touch of sci-fi sass or retro-futurism
Here are Google Fonts that nail that vibe:
🌌 Top Google Font Picks for “DON’T PANIC”
<h1>1. Bungee</h1>
Style: Bold, loud, display-friendly
Vibe: Arcade signage meets street art
✅ Perfect for eye-catching animation
View on Google Fonts
<h2>2. Orbitron</h2>
Style: Sci-fi, geometric sans-serif
Vibe: Futuristic but readable
✅ Great for giving a techy “space guide” look
View on Google Fonts
<h3>3. Fredoka</h3>
Style: Rounded, soft, friendly
Vibe: Optimistic with subtle retro sass
✅ Great for an upbeat, comic-style “Don’t Panic”
View on Google Fonts
<h4>4. Jolly Lodger</h4>
Style: Playful, exaggerated curves
Vibe: Cartoon rebellion meets 1980s paperback
✅ Quirky, bold, and unmistakable
View on Google Fonts
<h5>5. Audiowide</h5>
Style: Wide, stylized sans-serif
Vibe: Synthwave/futuristic with personality
✅ Feels both sci-fi and irreverent
View on Google Fonts

🎯 Recommendation:
<h6>For Hitchhiker's Guide energy, use:</h6>
css
Copy
Edit
font-family: 'Bungee', sans-serif;
And pair it with:
tailwind
Copy
Edit
text-6xl font-bold uppercase tracking-widest text-yellow-300
<h6>For a guidebook cover look, Bungee + yellow text on black = instant "Don't Panic" feel.</h6>
Want a sample animation setup or Tailwind snippet too?

</pre>
<pre>2 --</pre>
<br>
<pre>3 --</pre>
<br>
<pre>4 --</pre>
<br>
<pre>5 --</pre>


<hr><br><hr>


<br><hr><br><hr><br>
<h2 class="text-[99px]">Blender Vue</h2>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h3 class="text-[99px]">Blender Vue</h3>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h4 class="text-[99px]">Blender Vue</h4>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h5 class="text-[99px]">Blender Vue</h5>
<hr><br><hr><br><hr><br><hr><br><hr><br>
<h6 class="text-[99px]">Blender Vue</h6>
<hr><br><hr><br><hr><br><hr><br><hr><br>

LargeClock /
/template



</pre>































<div class="grid grid-cols-3 grid-rows-2 gap-4 p-4">
  <div class="flex items-center justify-center">
    <turtleCompiled />
  </div>
  <div class="bg-sky-950/75 border border-sky-500 flex items-center justify-center">
    <sailboatCompiled />
  </div>
  <div class="flex items-center justify-center">
    <turtleCompiled />
  </div>
</div>
<span class="text-[99px] text-[#aa00aa]"> move WIPBar and ÷ </span>
<center>
<code>save as plain svg for less trash code. set fill to currentColor in component for tailwind maniuplation</code>
<code>will need to rename to start file with any alpha character... not number</code>
<code>in inkscape upon open select rendering mode: blocky</code>
<code>if it doesn't detect brightness @ .5 threshold (it won't preview) flood with black in krita and come back</code>
<nav class="grid grid-cols-[repeat(1,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCmxldCBjaG9yZHMgPSBjaG9yZCgiPEMgRyBDIEcgQyBHIEFtIEMgQ20gRyBDIEcgQz4vMiIpLmRpY3QoJ2lyZWFsJykKCnN0YWNrKAogIHN0YWNrKAogICAgcygiYmQiKS5zdHJ1Y3QoInggeCA8W3gqPDEgMiAzPiBbeCB%2BQDIgfkAzXV0%2BIiksCiAgICBuKCJbMCA8MCAxPl0qPDIhMyA2PiIpLnMoImhoIikKICApLmdhaW4oMC4yKSwgLy8gYXBwbHkgZ2FpbiB0byBkcnVtcyBvbmx5CgogIGNob3Jkcy5vZmZzZXQoLTEpLnZvaWNpbmcoKS5zKCJnbV9lcGlhbm8xOjEiKQopCg%3D%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">face</i></a></div></nav>
  <span class="text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt;C G C G C G Am C Cm G C G C&gt;/4").dict('ireal')</span>
<hr>

<nav class="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCmxldCBjaG9yZHMgPSBjaG9yZCgiPCBBIEIgQyBEIEUgRiBHID4vNCIpLmRpY3QoJ2lyZWFsJykKCnN0YWNrKAogIHN0YWNrKAogICAgcygiYmQiKS5zdHJ1Y3QoInggeCA8W3gqPDEgMiAzPiBbeCB%2BQDIgfkAzXV0%2BIiksCiAgICBuKCJbMCA8MCAxPl0qPDIhMyA2PiIpLnMoImhoIikKICApLmdhaW4oMC4yKSwgLy8gYXBwbHkgZ2FpbiB0byBkcnVtcyBvbmx5CgogIGNob3Jkcy5vZmZzZXQoLTEpLnZvaWNpbmcoKS5zKCJnbV9lcGlhbm8xOjEiKQopCg%3D%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://www.youtube.com/watch?v=YrLk4vdY28Q" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
</nav>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; A B C D E F G &gt;/4").dict('ireal')</span>
<hr><br>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
Leonard Cohen - Hallelujah (Official Live in London 2008)</span><br>
<div class="">Here’s a refined breakdown of the major **music theory concepts** behind Leonard Cohen’s *“Hallelujah”*—especially as heard in the **Live in London 2008** performance:
<dfn>ChatGPT answer</dfn>
<div class="bg-[#00000080]">


<div class="prose prose-lg max-w-none">
  <h2>🎼 Key & Meter</h2>
  <ul>
    <li><strong>Key of C major</strong> (<a href="https://www.youtube.com/watch?v=YrLk4vdY28Q">YouTube</a>, <a href="https://en.wikipedia.org/wiki/Hallelujah_%28Leonard_Cohen_song%29">Wikipedia</a>).</li>
    <li><strong>12/8 time signature</strong>, giving it a gentle <strong>triplet feel</strong> with a folk/gospel vibe.</li>
  </ul>

  <hr>

  <h2>🎸 Core Chord Progression</h2>
  <p>The famous verse progression is:</p>
  <pre><code>C – Am – C – Am – F – G – C – G</code></pre>
  <p>Numerically: <strong>I – vi – I – vi – IV – V – I – V</strong> 
  (<a href="https://www.classicfm.com/discover-music/secret-chord-leonard-cohens-hallelujah-music/">ClassicFM</a>, 
  <a href="https://realworldmusictheory.com/relative-minor-and-secondary-dominants-in-hallelujah-by-jeff-buckley/">RealWorldMusicTheory</a>).</p>
  <ul>
    <li><strong>I–vi alternation</strong> (C ↔ Am): creates a subtle, hymn-like, devotional mood due to its tonal inertia (tonic to relative minor).</li>
    <li><strong>IV–V–I movement</strong> offers a classic cadential resolution—but Cohen often follows IV–V with vi, creating a <strong>deceptive resolution</strong> (“the minor fall”).</li>
  </ul>

  <hr>

  <h2>🧠 "The Fourth, the Fifth..." Lyric–Harmony Link</h2>
  <ul>
    <li>The lyrics <strong>describe</strong> the chord movement in real-time:
      <ul>
        <li><strong>“the fourth”</strong> → IV chord (F major in C)</li>
        <li><strong>“the fifth”</strong> → V chord (G)</li>
        <li><strong>“the minor fall, the major lift”</strong> → vi chord (Am) followed by returning to IV</li>
      </ul>
    </li>
  </ul>
  <p>This is a <strong>self-referential musical moment</strong> where lyrics and harmony align beautifully.</p>

  <hr>

  <h2>💥 Secondary Dominants</h2>
  <ul>
    <li>Cohen introduces <strong>E7</strong> (the V/vi, or V of Am), which intensifies the move into the vi chord—this is a <strong>text-book secondary dominant</strong>.</li>
  </ul>

  <hr>

  <h2>🎶 Melody & Counterpoint</h2>
  <ul>
    <li>Though harmonically simple, the <strong>melody adds depth</strong> through <strong>stepwise motion</strong>, occasional leaps, and <strong>counter-melodies</strong>.</li>
    <li>Bob Dylan noted Cohen’s style uses <strong>gentle melodic contour with counterpoint</strong>, giving “a celestial character and melodic lift.”</li>
  </ul>

  <hr>

  <h2>⚖️ Emotional Texture</h2>
  <ul>
    <li>I–vi alternation creates a <strong>static, searching texture</strong>.</li>
    <li>The deceptive resolution (IV–V–vi) evokes <strong>yearning and bittersweet surprise</strong>.</li>
    <li>Secondary dominants add <strong>brief harmonic tension</strong>.</li>
  </ul>

  <hr>

  <h2>🧩 Summary Table</h2>
  <table>
    <thead>
      <tr>
        <th>Concept</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Key & Meter</strong></td><td>C major, 12/8 time (triplet feel).</td></tr>
      <tr><td><strong>I–vi Alternation</strong></td><td>Calm, reflective tonic–relative minor motion.</td></tr>
      <tr><td><strong>IV–V–I Cadence</strong></td><td>Classic resolution, often ending deceptively on vi.</td></tr>
      <tr><td><strong>Secondary Dominant (E7)</strong></td><td>Heightens resolution into vi.</td></tr>
      <tr><td><strong>Lyrics = Theory</strong></td><td>Chord movement described in lyrics.</td></tr>
      <tr><td><strong>Melody & Counterpoint</strong></td><td>Simple harmony with expressive melodic motion.</td></tr>
    </tbody>
  </table>

  <hr>

  <h2>🎤 Reddit Perspective</h2>
  <blockquote>
    <p>“The chord progression is nice (I IV V vi IV V V7/vi vi), where the maximum tension and strongest resolution is found in the final two chords (V7 → vi).” (<a href="https://www.reddit.com/r/musictheory/comments/kyajs6/hallelujah_chord_progress/">Reddit</a>)</p>
  </blockquote>

  <hr>

  <h3>Final Thoughts</h3>
  <p>Cohen’s <em>“Hallelujah”</em> is a minimalist but emotionally rich piece. It thrives on:</p>
  <ul>
    <li><strong>I–vi–IV–V</strong> progression</li>
    <li><strong>Deceptive cadences</strong></li>
    <li><strong>Lyric–harmony synergy</strong></li>
    <li><strong>Melodic & counterpoint phrasing</strong></li>
  </ul>
</div>






</div>




<!--
<pre>

---

## 🎼 Key & Meter

* **Key of C major** *(original Cohen version)* ([youtube.com][1], [en.wikipedia.org][2]).
* **12/8 time signature**, giving it a gentle **triplet feel** with a folk/gospel vibe .

---

## 🎸 Core Chord Progression

The famous verse progression is:

```
C – Am – C – Am – F – G – C – G
```

Numerically: **I – vi – I – vi – IV – V – I – V** ([classicfm.com][3], [realworldmusictheory.com][4]).

* **I–vi alternation** (C ↔ Am): creates a subtle, hymn-like, devotional mood due to its tonal inertia (tonic to relative minor) ([realworldmusictheory.com][4]).
* **IV–V–I movement** offers a classic cadential resolution—but Cohen often follows IV–V with vi in the lyrics, creating a **deceptive resolution** (“the minor fall”) ([realworldmusictheory.com][4]).

---

## 🧠 "The Fourth, the Fifth..." Lyric–Harmony Link

* The lyrics **describe** the chord movement in real-time:

  * **“the fourth”** → IV chord (F major in C),
  * **“the fifth”** → V chord (G),
  * **“the minor fall, the major lift”** → vi chord (Am) followed by returning to IV ([classicfm.com][3]).

This is a **self-referential musical moment** where lyrics and harmony align beautifully.

---

## 💥 Secondary Dominants

* Cohen introduces **E7** (the V/vi, or V of Am), which intensifies the move into the vi chord—this is a **text-book secondary dominant** creating strong pull ([realworldmusictheory.com][4]).

---

## 🎶 Melody & Counterpoint

* Though harmonically simple, the **melody adds depth** through **stepwise motion**, occasional leaps, and well-placed **counter-melodies**, creating emotional nuance .
* As Bob Dylan noted, Cohen’s style uses **gentle melodic contour with counterpoint lines**, giving “a celestial character and melodic lift” **without complex harmony** ([newyorker.com][5]).

---

## ⚖️ Emotional Texture

* The alternation I–vi creates a **static, searching texture**, reflecting the song’s spiritual questioning ([hooktheory.com][6]).
* The deceptive resolution (IV–V–vi) evokes a feeling of **yearning and bittersweet surprise** ([realworldmusictheory.com][4]).
* Secondary dominants add **brief harmonic tension**, enhancing the solemn lyric delivery.

---

## 🧩 Summary Table

| Concept                     | Description                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| **Key & Meter**             | C major, 12/8 time (triplet feel) ([realworldmusictheory.com][4], [en.wikipedia.org][2]). |
| **I–vi Alternation**        | Builds a calm, reflective mood by toggling tonic and relative minor .                     |
| **IV–V–I Cadence**          | Classic resolution, often replaced by a deceptive vi (“minor fall”) .                     |
| **Secondary Dominant (E7)** | Heightens resolution into vi .                                                            |
| **Lyrics = Theory**         | Directly describe the chords (“fourth, fifth, minor fall...”) .                           |
| **Melody & Counterpoint**   | Simple chords + expressive melodic lines .                                                |

---

## 🎤 Reddit Perspective

From r/musictheory:

> *“The chord progression is nice (I IV V vi IV V V7/vi vi), where the maximum tension and strongest resolution is found in the final two chords (V7 → vi).”* ([reddit.com][7])

---

### Final Thoughts

Cohen's *“Hallelujah”* is a remarkably **minimalist yet emotionally rich** composition. It relies on:

* A simple—but potent—**I–vi–IV–V** progression,
* **Deceptive cadences** that lend poignant surprise,
* **Smart lyric–chord alignment** for self-referential impact,
* **Melodic and counterpoint touches** that elevate its emotional reach.

Let me know if you'd like help analyzing specific verses or how the live arrangement in London 2008 enhances these elements!

[1]: https://www.youtube.com/watch?v=YrLk4vdY28Q&utm_source=chatgpt.com "Leonard Cohen - Hallelujah (Official Live in London 2008) - YouTube"
[2]: https://en.wikipedia.org/wiki/Hallelujah_%28Leonard_Cohen_song%29?utm_source=chatgpt.com "Hallelujah (Leonard Cohen song) - Wikipedia"
[3]: https://www.classicfm.com/discover-music/secret-chord-leonard-cohens-hallelujah-music/?utm_source=chatgpt.com "What is the 'secret chord' mentioned in Leonard Cohen's 'Hallelujah'?"
[4]: https://realworldmusictheory.com/relative-minor-and-secondary-dominants-in-hallelujah-by-jeff-buckley/?utm_source=chatgpt.com "Relative minor and secondary dominants in Hallelujah by Jeff Buckley"
[5]: https://www.newyorker.com/magazine/2016/10/17/leonard-cohen-makes-it-darker?utm_source=chatgpt.com "Leonard Cohen Makes It Darker"
[6]: https://www.hooktheory.com/theorytab/view/leonard-cohen/hallelujah?utm_source=chatgpt.com "Hallelujah by Leonard Cohen Chords and Melody - Hooktheory"
[7]: https://www.reddit.com/r/musictheory/comments/kyajs6/hallelujah_chord_progress/?utm_source=chatgpt.com "Hallelujah chord progress. : r/musictheory - Reddit"
</pre>

-->
</div>
<hr>
<nav class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCiAgbGV0IGNob3JkcyA9IGNob3JkKCI8IEMgQ20gQzcgQ003IENtNyA%2BLzQiKS5kaWN0KCdpcmVhbCcpCgpzdGFjaygKICBzdGFjaygKICAgIHMoImJkIikuc3RydWN0KCJ4IHggPFt4KjwxIDIgMz4gW3ggfkAyIH5AM11dPiIpLAogICAgbigiWzAgPDAgMT5dKjwyITMgNj4iKS5zKCJoaCIpCiAgKS5nYWluKDAuMiksIC8vIGFwcGx5IGdhaW4gdG8gZHJ1bXMgb25seQoKICBjaG9yZHMub2Zmc2V0KC0xKS52b2ljaW5nKCkucygiZ21fZXBpYW5vMToxIikKKQo%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
</nav>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; C Cm C7 CM7 Cm7 &gt;/4").dict('ireal') *don't work: Cdim C° C+ Cø*</span> 
<hr><br><hr><br><hr>
ABBA Gimme 
<nav class="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC40MikKCiAgIGxldCBjaG9yZHMgPSBjaG9yZCgiPCBDOSBDMTMgQzdiOSBDNyM1IENhZGQ5ID4vNCIpLmRpY3QoJ2lyZWFsJykgCgpzdGFjaygKICBzdGFjaygKICAgIHMoImJkIikuc3RydWN0KCJ4IHggPFt4KjwxIDIgMz4gW3ggfkAyIH5AM11dPiIpLAogICAgbigiWzAgPDAgMT5dKjwyITMgNj4iKS5zKCJoaCIpCiAgKS5nYWluKDAuMiksIC8vIGFwcGx5IGdhaW4gdG8gZHJ1bXMgb25seQoKICBjaG9yZHMub2Zmc2V0KC0xKS52b2ljaW5nKCkucygiZ21fZXBpYW5vMToxIikKKQo%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
</nav>
<span class="align-middle text-[33px]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; C9 C13 C7b9 C7#5  Cadd9 &gt;/4").dict('ireal') ***don't work: Csus4 Cmaj9***</span> 
<hr><br>
<hr><br>
<hr><br>
<hr>
<nav class="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc/#c2FtcGxlcygnZ2l0aHViOmVkZHlmbHV4L2NyYXRlJykKc2V0Y3BzKC41KQoKbGV0IGNob3JkcyA9IGNob3JkKCI8IEMgRyBDIEcgQW0gRyBDIENtIEcgRiBDIEcgQW0gQ20gRyA%2BLzIiKS5kaWN0KCdpcmVhbCcpCgoKc3RhY2soCiAgc3RhY2soCiAgICBzKCJiZCIpLnN0cnVjdCgieCB4IDxbeCo8MSAyIDM%2BIFt4IH5AMiB%2BQDNdXT4iKSwKICAgIG4oIlswIDwwIDE%2BXSo8MiEzIDY%2BIikucygiaGgiKQogICkuZ2FpbigwLjIpLCAvLyBhcHBseSBnYWluIHRvIGRydW1zIG9ubHkKCiAgY2hvcmRzLm9mZnNldCgtNCkudm9pY2luZygpLnMoImdtX2NlbGVzdGEiKQopCg%3D%3D" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
</nav>
<span class="align-middle text-[33px]"> 60 seconds &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let chords = chord("&lt; C G C G Am G C Cm G F C G Am Cm G &gt;/2").dict('ireal')</span> 
<hr><br>
<hr><br>
<hr><br>
<hr><br>
<hr>

<nav class="grid grid-cols-[repeat(6,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://strudel.cc" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
</nav>

<hr><br>
<hr><br>
<hr><br>
<hr><br>
<hr><br>
<hr>
<nav class="grid grid-cols-[repeat(7,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(8,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(9,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(10,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(11,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
</nav>
<nav class="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#000] text-[#000] bg-[#fff] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>     
</nav>

</center>












<center>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] w-full h-6 gap-3 p-5">
  <div>
    <stone />
  </div>
  <div>
    <lime />
  </div>
  <div>
    <neutral />
  </div>
  <div>
    <yellow />
  </div>
  <div>
    <amber />
  </div>
  <div>
    <orange />
  </div>
  <div>
    <red />
  </div>
  <div>
    <rose />
  </div>
  <div>
    <pink />
  </div>
  <div>
    <fuchsia />
  </div>
  <div>
    <gray />
  </div>
  <div>
    <purple />
  </div>
  <div>
    <violet />
  </div>
  <div>
    <indigo />
  </div>
  <div>
    <blue />
  </div>
  <div>
    <sky />
  </div>
  <div>
    <cyan />
  </div>
  <div>
    <teal />
  </div>
  <div>
    <emerald />
  </div>
  <div>
    <zinc />
  </div>
  <div>
    <green />
  </div>
  <div>
    <slate />
  </div>
</nav>
</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>     <br><br><br><br><br><br><br><br>






<center class="bg-sky-950/50 text-[3px]">
<div class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400">
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
3d_rotation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ac_unit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
access_alarm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
access_alarms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
access_time</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
accessibility</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
accessible</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_balance</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_balance_wallet</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
account_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
adb</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_a_photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_alarm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_alert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_location</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_shopping_cart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_to_photos</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
add_to_queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
adjust</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_flat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_flat_angled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_individual_suite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_legroom_extra</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_legroom_normal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_legroom_reduced</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_recline_extra</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airline_seat_recline_normal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airplanemode_active</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airplanemode_inactive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airplay</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
airport_shuttle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
alarm_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
album</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
all_inclusive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
all_out</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
android</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
announcement</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
apps</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
archive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_back</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_downward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_drop_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_drop_down_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_drop_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_forward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
arrow_upward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
art_track</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
aspect_ratio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assessment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_ind</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_late</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_return</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_returned</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assignment_turned_in</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assistant</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
assistant_photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
attach_file</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
attach_money</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
attachment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
audiotrack</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
autorenew</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
av_timer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
backspace</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
backup</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_alert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_charging_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_std</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
battery_unknown</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
beach_access</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
beenhere</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
block</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_audio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_connected</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_disabled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bluetooth_searching</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_circular</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_linear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
blur_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
book</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bookmark</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bookmark_border</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_bottom</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_color</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_horizontal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_inner</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_outer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_style</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_top</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
border_vertical</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
branding_watermark</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_6</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_7</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_auto</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_high</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_low</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brightness_medium</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
broken_image</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
brush</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bubble_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
bug_report</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
build</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
burst_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
business</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
business_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cached</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cake</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_end</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_made</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_merge</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_missed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_missed_outgoing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_received</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_split</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
call_to_action</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_enhance</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_front</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_rear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
camera_roll</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cancel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
card_giftcard</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
card_membership</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
card_travel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
casino</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cast</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cast_connected</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
center_focus_strong</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
center_focus_weak</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
change_history</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chat_bubble</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chat_bubble_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check_box_outline_blank</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
check_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chevron_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chevron_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
child_care</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
child_friendly</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
chrome_reader_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
class</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
clear_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
close</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
closed_caption</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_done</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_download</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
cloud_upload</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
code</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
collections</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
collections_bookmark</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
color_lens</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
colorize</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
comment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
compare</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
compare_arrows</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
computer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
confirmation_number</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
contact_mail</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
contact_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
contacts</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
content_copy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
content_cut</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
content_paste</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
control_point</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
control_point_duplicate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
copyright</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
create</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
create_new_folder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
credit_card</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_16_9</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_3_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_5_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_7_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_din</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_free</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_original</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_rotate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
crop_square</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dashboard</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
data_usage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
date_range</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dehaze</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
delete</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
delete_forever</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
delete_sweep</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
description</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
desktop_mac</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
desktop_windows</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
details</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
developer_board</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
developer_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
device_hub</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
devices</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
devices_other</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dialer_sip</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dialpad</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_bike</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_boat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_bus</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_car</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_railway</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_run</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_subway</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_transit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
directions_walk</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
disc_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dns</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
do_not_disturb_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
domain</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
done</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
done_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
donut_large</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
donut_small</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
drafts</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
drag_handle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
drive_eta</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
dvr</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
edit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
edit_location</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
eject</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
email</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
enhanced_encryption</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
equalizer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
error</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
error_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
euro_symbol</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ev_station</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_available</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_busy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_note</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
event_seat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exit_to_app</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
expand_less</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
expand_more</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
explicit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
explore</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_neg_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_neg_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_plus_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_plus_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
exposure_zero</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
extension</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
face</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fast_forward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fast_rewind</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
favorite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
favorite_border</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
featured_play_list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
featured_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
feedback</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_dvr</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_manual_record</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_new</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_pin</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fiber_smart_record</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
file_download</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
file_upload</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_1</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_2</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_6</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_7</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_8</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_9</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_9_plus</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_b_and_w</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_center_focus</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_drama</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_frames</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_hdr</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_none</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_tilt_shift</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
filter_vintage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
find_in_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
find_replace</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fingerprint</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
first_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fitness_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flag</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flare</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flash_auto</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flash_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flash_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flight</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flight_land</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flight_takeoff</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flip</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flip_to_back</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
flip_to_front</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder_open</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder_shared</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
folder_special</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
font_download</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_justify</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_align_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_bold</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_color_fill</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_color_reset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_color_text</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_indent_decrease</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_indent_increase</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_italic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_line_spacing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_list_bulleted</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_list_numbered</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_paint</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_quote</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_shapes</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_size</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_strikethrough</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_textdirection_l_to_r</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_textdirection_r_to_l</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
format_underlined</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forum</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward_10</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward_30</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
forward_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
free_breakfast</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fullscreen</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
fullscreen_exit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
functions</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
g_translate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gamepad</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
games</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gavel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gesture</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
get_app</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gif</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
golf_course</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gps_fixed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gps_not_fixed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gps_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grade</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
gradient</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grain</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
graphic_eq</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grid_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
grid_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
group</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
group_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
group_work</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hd</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_strong</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hdr_weak</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
headset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
headset_mic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
healing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hearing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
help</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
help_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
high_quality</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
highlight</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
highlight_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
history</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
home</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hot_tub</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hotel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hourglass_empty</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
hourglass_full</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
http</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
https</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
image</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
image_aspect_ratio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
import_contacts</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
import_export</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
important_devices</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
inbox</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
indeterminate_check_box</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
info</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
info_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
input</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_comment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_drive_file</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_emoticon</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_invitation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_link</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
insert_photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
invert_colors</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
invert_colors_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
iso</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_arrow_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_backspace</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_capslock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_hide</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_return</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_tab</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
keyboard_voice</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
kitchen</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
label</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
label_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
language</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop_chromebook</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop_mac</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
laptop_windows</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
last_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
launch</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
layers</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
layers_clear</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
leak_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
leak_remove</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lens</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
library_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
library_books</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
library_music</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lightbulb_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
line_style</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
line_weight</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
linear_scale</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
link</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
linked_camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
live_help</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
live_tv</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_activity</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_airport</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_atm</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_cafe</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_car_wash</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_convenience_store</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_dining</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_drink</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_florist</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_gas_station</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_grocery_store</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_hospital</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_hotel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_laundry_service</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_library</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_mall</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_movies</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_offer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_parking</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_pharmacy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_pizza</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_play</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_post_office</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_printshop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_see</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_shipping</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
local_taxi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_city</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_disabled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
location_searching</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lock_open</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
lock_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_4</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_6</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_one</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
looks_two</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
loop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
loupe</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
low_priority</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
loyalty</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mail</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mail_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
map</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
markunread</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
markunread_mailbox</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
memory</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
menu</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
merge_type</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
message</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mic_none</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mic_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mode_comment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mode_edit</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
monetization_on</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
money_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
monochrome_photos</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mood</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mood_bad</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
more</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
more_horiz</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
more_vert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
motorcycle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
mouse</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
move_to_inbox</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
movie</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
movie_creation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
movie_filter</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
multiline_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
music_note</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
music_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
my_location</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
nature</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
nature_people</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
navigate_before</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
navigate_next</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
navigation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
near_me</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_cell</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_check</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_locked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
network_wifi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
new_releases</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
next_week</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
nfc</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
no_encryption</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
no_sim</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
not_interested</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
note</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
note_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_active</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_none</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
notifications_paused</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
offline_pin</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ondemand_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
opacity</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
open_in_browser</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
open_in_new</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
open_with</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pages</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pageview</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
palette</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pan_tool</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_fish_eye</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_horizontal</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_vertical</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
panorama_wide_angle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
party_mode</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pause</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pause_circle_filled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pause_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
payment</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
people</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
people_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_camera_mic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_contact_calendar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_data_setting</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_device_information</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_identity</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_media</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_phone_msg</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
perm_scan_wifi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_pin</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
person_pin_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
personal_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pets</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_android</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_bluetooth_speaker</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_forwarded</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_in_talk</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_iphone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_locked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_missed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phone_paused</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_erase</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_ring</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
phonelink_setup</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_album</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_filter</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_library</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_size_select_actual</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_size_select_large</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
photo_size_select_small</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
picture_as_pdf</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
picture_in_picture</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
picture_in_picture_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pie_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pie_chart_outlined</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pin_drop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
place</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_arrow</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_circle_filled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
play_for_work</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
playlist_add</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
playlist_add_check</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
playlist_play</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
plus_one</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
poll</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
polymer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pool</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
portable_wifi_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
power</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
power_input</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
power_settings_new</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
pregnant_woman</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
present_to_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
print</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
priority_high</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
public</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
publish</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
query_builder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
question_answer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
queue_music</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
queue_play_next</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
radio</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
radio_button_checked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
radio_button_unchecked</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rate_review</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
receipt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
recent_actors</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
record_voice_over</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
redeem</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
redo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
refresh</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_circle_outline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_from_queue</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_red_eye</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
remove_shopping_cart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
reorder</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
repeat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
repeat_one</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay_10</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay_30</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
replay_5</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
reply</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
reply_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
report</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
report_problem</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restaurant</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restaurant_menu</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restore</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
restore_page</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
ring_volume</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
room</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
room_service</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rotate_90_degrees_ccw</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rotate_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rotate_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rounded_corner</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
router</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rowing</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rss_feed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
rv_hookup</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
satellite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
save</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
scanner</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
schedule</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
school</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_lock_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_lock_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_lock_rotation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_rotation</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
screen_share</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sd_card</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sd_storage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
search</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
security</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
select_all</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
send</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_dissatisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_neutral</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_satisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_very_dissatisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sentiment_very_satisfied</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_applications</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_backup_restore</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_bluetooth</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_brightness</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_cell</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_ethernet</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_antenna</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_component</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_composite</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_hdmi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_input_svideo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_overscan</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_power</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_remote</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_system_daydream</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
settings_voice</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
share</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shop_two</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shopping_basket</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shopping_cart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
short_text</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
show_chart</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
shuffle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_4_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_connected_no_internet_4_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_no_sim</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_null</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_cellular_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_wifi_4_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_wifi_4_bar_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
signal_wifi_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sim_card</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sim_card_alert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
skip_next</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
skip_previous</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
slideshow</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
slow_motion_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
smartphone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
smoke_free</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
smoking_rooms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sms_failed</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
snooze</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sort</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sort_by_alpha</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
spa</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
space_bar</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_group</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_notes</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_notes_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
speaker_phone</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
spellcheck</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
star</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
star_border</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
star_half</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stars</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_current_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_current_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_primary_landscape</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stay_primary_portrait</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stop</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
stop_screen_share</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
storage</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
store</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
store_mall_directory</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
straighten</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
streetview</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
strikethrough_s</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
style</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subdirectory_arrow_left</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subdirectory_arrow_right</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subject</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subscriptions</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subtitles</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
subway</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
supervisor_account</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
surround_sound</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_calls</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_horiz</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_vert</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
swap_vertical_circle</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
switch_camera</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
switch_video</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sync</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sync_disabled</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
sync_problem</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
system_update</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
system_update_alt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tab</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tab_unselected</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tablet</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tablet_android</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tablet_mac</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tag_faces</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tap_and_play</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
terrain</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
text_fields</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
text_format</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
textsms</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
texture</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
theaters</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
thumb_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
thumb_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
thumbs_up_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
time_to_leave</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timelapse</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timeline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer_10</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer_3</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
timer_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
title</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
toc</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
today</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
toll</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tonality</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
touch_app</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
toys</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
track_changes</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
traffic</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
train</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tram</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
transfer_within_a_station</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
transform</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
translate</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
trending_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
trending_flat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
trending_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tune</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
turned_in</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
turned_in_not</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
tv</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
unarchive</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
undo</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
unfold_less</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
unfold_more</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
update</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
usb</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
verified_user</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vertical_align_bottom</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vertical_align_center</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vertical_align_top</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vibration</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
video_call</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
video_label</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
video_library</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
videocam</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
videocam_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
videogame_asset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_agenda</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_array</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_carousel</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_column</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_comfy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_compact</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_day</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_headline</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_list</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_module</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_quilt</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_stream</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
view_week</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vignette</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
visibility</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
visibility_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
voice_chat</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
voicemail</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_down</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_mute</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_off</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
volume_up</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vpn_key</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
vpn_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wallpaper</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
warning</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
watch</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
watch_later</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_auto</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_cloudy</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_incandescent</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_iridescent</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wb_sunny</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wc</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
web</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
web_asset</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
weekend</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
whatshot</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
widgets</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wifi</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wifi_lock</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wifi_tethering</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
work</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
wrap_text</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
youtube_searched_for</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
zoom_in</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
zoom_out</i></a></div>
  <div class="border border-sky-400 bg-sky-400/25 cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
zoom_out_map</i></a></div>

</div>
</center>

<center>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>

</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  

  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
</nav>
<nav class="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-3 p-5 text-sky-400 ">
  <div class="border border-[#FFFF00] bg-[#FFFF0040] text-[#FFFF00] cursor-pointer hover:text-pink-400 ">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        face
      </i>
    </a>
  </div>
  <div class="border border-[#FF00FF] bg-[#FF00FF40] text-[#FF00FF] cursor-pointer hover:text-sky-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_circle
      </i>
    </a>
  </div>
  <div class="border border-[#00FFFF] bg-[#00FFFF40] text-[#00FFFF] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        account_box
      </i>
    </a>
  </div>  
  <div class="border border-[#ffa500] bg-[#ffa50040] text-[#ffa500] cursor-pointer  hover:text-pink-400 ">
    <a href="https://growinggenkiness.me" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        directions_walk
      </i>
    </a>
  </div>  
  <div class="border border-[#9370DB] text-[#9370DB] bg-[#9370DB40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        filter_center_focus
      </i>
    </a>
  </div>
  <div class="border border-[#32CD32] text-[#32CD32] bg-[#32CD3240] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        looks
      </i>
    </a>
  </div>
  <div class="border border-[#ffffff] text-[#ffffff] bg-[#ffffff40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       ac_unit
      </i>
    </a>
  </div>
  <div class="border border-[#000000] text-[#000000] bg-[#00000040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       fingerprint
      </i>
    </a>
  </div>  
  <div class="border border-[#808080] text-[#808080] bg-[#80808040] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
       restaurant_menu
      </i>
    </a>
  </div>  
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#ffc0cb40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
        child_care
      </i>
    </a>
  </div>  
  <div class="border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
         audiotrack
      </i>
    </a>
  </div>  
  <div class="border border-[#A52A2A] text-[#A52A2A] bg-[#A52A2A40] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          screen_share
      </i>
    </a>
  </div>    
  <div class="border border-[#ffc0cb] text-[#ffc0cb] bg-[#555] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#fff] text-[#fff] bg-[#000] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>   
    <div class="border border-[#000] text-[#000] bg-[#fff] cursor-pointer hover:text-pink-400">
    <a href="https://allostasissy.studio" target="_blank" rel="noopener noreferrer">
      <i class="material-icons" style="font-size: 55px">
          accessibility
      </i>
    </a>
  </div>     
</nav>

</center>






</template>
