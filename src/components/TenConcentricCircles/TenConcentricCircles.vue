<script>
export default {
  name: 'tenConcentricCircles',
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
    },
    seven: {
      type: String,
      default: '#333'
    },
    eight: {
      type: String,
      default: '#fff'
    },
    nine: {
      type: String,
      default: '#888'
    },
    ten: {
      type: String,
      default: '#0ff'
    }
  }
}

</script>
<template>
   <svg viewBox="0 0 1111 1111">
      <circle
         style="fill: one;"
         cx="555.5"
         cy="555.5"
         r="555.5" />
      <circle
         style="fill: two;"
         cx="555.5"
         cy="555.5"
         r="499.5" />
      <circle
         style="fill: three;"
         cx="555.5"
         cy="555.5"
         r="444" />
      <circle
         style="fill: four;"
         cx="555.5"
         cy="555.5"
         r="388.5" />
      <circle
         style="fill: five;"
         cx="555.5"
         cy="555.5"
         r="333" />
      <circle
         style="fill: six;"
         cx="555.5"
         cy="555.5"
         r="277.5" />
      <circle
         style="fill: seven;"
         cx="555.5"
         cy="555.5"
         r="222" />
      <circle
         style="fill: eight;"
         cx="555.5"
         cy="555.5"
         r="166.5" />
      <circle
         style="fill: nine;"
         cx="555.5"
         cy="555.5"
         r="111" />
      <circle
         style="fill: ten;"
         cx="555.5"
         cy="555.5"
         r="55.5" />
   </svg>
</template>