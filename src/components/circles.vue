<script>
export default {
  name: 'circles',
  props: {
    one: {
      type: String,
      default: '#ff0'
    },
    two: {
      type: String,
      default: '#f0f'
    },
    three: {
      type: String,
      default: '#0ff'
    },
    four: {
      type: String,
      default: '#f00'
    },
    five: {
      type: String,
      default: '#0f0'
    },
    six: {
      type: String,
      default: '#00f'
    }
  }
}

</script>
<template>
<svg
   width="333"
   height="333"
   viewBox="0 0 1 1"
   version="1.1"
   id="svg5"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <g
     id="layer1">
    <ellipse
      :style="{
        fill: one,
        'fill-rule': 'evenodd',
        stroke: '#000000',
        'stroke-width': 33,
        'stroke-linecap': 'round',
        'paint-order': 'stroke fill markers'
      }" 

       id="path3"
       cx="0.35546875"
       cy="0.29101562"
       rx="0.1875"
       ry="0.17382812" />
    <ellipse
    :style="{
        fill: two,
        'fill-rule': 'evenodd',
        stroke: '#000000',
        'stroke-width': 33,
        'stroke-linecap': 'round',
        'paint-order': 'stroke fill markers'
      }" 
       id="path4"
       cx="0.82617188"
       cy="0.359375"
       rx="0.16210938"
       ry="0.13671875" />
    <ellipse
        :style="{
        fill: three,
        'fill-rule': 'evenodd',
        stroke: '#000000',
        'stroke-width': 33,
        'stroke-linecap': 'round',
        'paint-order': 'stroke fill markers'
      }" 
       id="path5"
       cx="0.25195312"
       cy="0.75195312"
       rx="0.17382812"
       ry="0.16210938" />
    <ellipse
     :style="{
        fill: four,
        'fill-rule': 'evenodd',
        stroke: '#000000',
        'stroke-width': 33,
        'stroke-linecap': 'round',
        'paint-order': 'stroke fill markers'
      }" 
       id="path6"
       cx="0.75195312"
       cy="0.765625"
       rx="0.21289062"
       ry="0.140625" />
  </g>
</svg>
</template>