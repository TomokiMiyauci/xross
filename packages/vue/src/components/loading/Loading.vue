<template>
  <svg
    class="loading"
    :style="{
      maxWidth: diameterPx,
      maxHeight: diameterPx
    }"
  >
    <circle
      class="loading-circle"
      :stroke="color"
      :stroke-width="stroke"
      stroke-linecap="round"
      fill="none"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
      pathLength="100"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import {
  DEFAULT_STROKE,
  DEFAULT_RADIUS,
  DEFAULT_COLOR
} from '@/components/loading/constants'

const unit = (unit: string, val: string): string => `${val}${unit}`

export default defineComponent({
  props: {
    stroke: { default: DEFAULT_STROKE, type: Number },
    radius: { default: DEFAULT_RADIUS, type: Number },
    color: { default: DEFAULT_COLOR, type: String }
  },
  setup(props) {
    const normalizedRadius = computed(() => props.radius - props.stroke / 2)
    const diameter = computed<number>(() => props.radius * 2)
    const diameterPx = computed<string>(() =>
      unit('px', diameter.value.toString())
    )
    return { normalizedRadius, diameterPx }
  }
})
</script>

<style scoped lang="less">
.loading {
  animation: rotator 2s linear infinite;

  &-circle {
    stroke-dasharray: 100;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite;
  }
}

@keyframes rotator {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes dash {
  0%,
  25% {
    stroke-dashoffset: 96;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 26;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 96;
    transform: rotate(360deg);
  }
}
</style>
