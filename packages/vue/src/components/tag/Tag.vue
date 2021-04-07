<template>
  <span
    :class="['tag', type && `tag--${type}`, filled && `tag--${type}--filled`]"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
const validator = (val: Color): boolean => COLORS.includes(val)

import { DEFAULT_COLOR } from '@share/components/tag/constants'
import { Color, COLORS } from '@share/constants'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String as PropType<Color>,
      default: DEFAULT_COLOR,
      validator
    },
    closable: { type: Boolean },
    filled: { type: Boolean }
  }
})
</script>

<style scoped lang="less">
@import '@share/components/tag/index.less';
</style>
