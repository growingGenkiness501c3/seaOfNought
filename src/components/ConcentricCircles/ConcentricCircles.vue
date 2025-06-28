<script>
export default {
  name: 'ConcentricCircles',
  props: {
    zero: {
      type: String,
      default: '#000'
    },
    one: {
      type: String,
      default: '#111'
    },
    two: {
      type: String,
      default: '#222'
    },
    three: {
      type: String,
      default: '#333'
    },
    four: {
      type: String,
      default: '#444'
    },
    five: {
      type: String,
      default: '#555'
    },
    six: {
      type: String,
      default: '#666'
    },
    seven: {
      type: String,
      default: '#777'
    },
    eight: {
      type: String,
      default: '#888'
    },
    nine: {
      type: String,
      default: '#999'
    },
    ten: {
      type: String,
      default: '#aaa'
    },
    eleven: {
      type: String,
      default: '#bbb'
    },
    twelve: {
      type: String,
      default: '#ccc'
    },
    thirteen: {
      type: String,
      default: '#ddd'
    },
    fourteen: {
      type: String,
      default: '#eee'
    },
    fifteen: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
<template>
   <svg viewBox="0 0 1776 1776">
      <circle
         :style="{fill: fifteen}"
         cx="888"
         cy="888"
         r="888" />
      <circle
         :style="{fill: fourteen}"
         cx="888"
         cy="888"
         r="832.5" />
      <circle
         :style="{fill: thirteen}"
         cx="888"
         cy="888"
         r="777" />
      <circle
         :style="{fill: twelve}"
         cx="888"
         cy="888"
         r="721.5" />
      <circle
         :style="{fill: eleven}"
         cx="888"
         cy="888"
         r="666" />
      <circle
         :style="{fill: ten}"
         cx="888"
         cy="888"
         r="610.5" />
      <circle
         :style="{fill: nine}"
         cx="888"
         cy="888"
         r="555" />
      <circle
         :style="{fill: eight}"
         cx="888"
         cy="888"
         r="499.5" />
      <circle
         :style="{fill: seven}"
         cx="888"
         cy="888"
         r="444" />
      <circle
         :style="{fill: six}"
         cx="888"
         cy="888"
         r="388.5" />
      <circle
         :style="{fill: five}"
         cx="888"
         cy="888"
         r="333" />
      <circle
         :style="{fill: four}"
         cx="888"
         cy="888"
         r="277.5" />
      <circle
         :style="{fill: three}"
         cx="888"
         cy="888"
         r="222" />
      <circle
         :style="{fill: two}"
         cx="888"
         cy="888"
         r="166.5" />
      <circle
         :style="{fill: one}"
         cx="888"
         cy="888"
         r="111" />
      <circle
         :style="{fill: zero}"
         cx="888"
         cy="888"
         r="55.5" />



</svg>
</template>