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
import { divide, multiply, px, subtract } from '@share/utils'
import { computed, defineComponent } from 'vue'

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
    const normalizedRadius = computed(() =>
      subtract(props.radius, divide(props.stroke, 2))
    )
    const diameter = computed<number>(() => multiply(props.radius, 2))
    const diameterPx = computed<string>(() => px(diameter.value.toString()))
    return { normalizedRadius, diameterPx, PATH_LENGTH, ...classNames }
  }
})
</script>

<style scoped lang="less">
@import '@share/components/loading/index.less';
</style>
