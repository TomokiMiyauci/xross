<template>
  <span
    :class="['tag', type && `tag--${type}`, filled && `tag--${type}--filled`]"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Color, DEFAULT_COLOR } from '@share/constants'
import { colorValidator } from '@share/validator'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String as PropType<Color>,
      default: DEFAULT_COLOR,
      validator: colorValidator
    },
    closable: { type: Boolean },
    filled: { type: Boolean }
  }
})
</script>

<style scoped lang="less">
@import '@share/components/tag/index.less';
</style>
