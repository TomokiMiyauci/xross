<template>
  <svg
    :class="loading"
    :style="{
      maxWidth: diameterPx,
      maxHeight: diameterPx
    }"
  >
    <circle
      :class="loadingCircle"
      :stroke="color"
      :stroke-width="stroke"
      stroke-linecap="round"
      fill="none"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
      :pathLength="PATH_LENGTH"
    />
  </svg>
</template>

<script lang="ts">
import {
  classNames,
  DEFAULT_COLOR,
  DEFAULT_RADIUS,
  DEFAULT_STROKE,
  PATH_LENGTH
} from '@share/components/loading/constants'
import { computed, defineComponent } from 'vue'

const unit = (unit: string, val: string): string => `${val}${unit}`

export default defineComponent({
  props: {
    stroke: {
      default: DEFAULT_STROKE,
      type: Number
    },
    radius: { default: DEFAULT_RADIUS, type: Number },
    color: { default: DEFAULT_COLOR, type: String }
  },
  setup(props) {
    const normalizedRadius = computed(() => props.radius - props.stroke / 2)
    const diameter = computed<number>(() => props.radius * 2)
    const diameterPx = computed<string>(() =>
      unit('px', diameter.value.toString())
    )
    return { normalizedRadius, diameterPx, PATH_LENGTH, ...classNames }
  }
})
</script>

<style scoped lang="less">
@import '@share/components/loading/index.less';
</style>
