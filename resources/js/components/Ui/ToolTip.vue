<template>
    <div class="tooltip justify-center">
        <slot></slot>
        <span class="tooltiptext" :class="direction">{{label}}</span>
    </div>
</template>

<script>
export default {
  props : {
    label : {
      default : null
    },
    direction : {
      default : 'tooltip-top'
    }
  }
}
</script>
