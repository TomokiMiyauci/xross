<template>
  <span
    :class="['tag', type && `tag--${type}`, filled && `tag--${type}--filled`]"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
const validator = (val: Colors): boolean =>
  [
    Colors.PRIMARY,
    Colors.SUCCESS,
    Colors.DANGER,
    Colors.WARNING,
    Colors.NEUTRAL
  ].includes(val)

import { DEFAULT_COLOR } from '@share/components/tag/constants'
import { Colors } from '@share/constants'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String,
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
