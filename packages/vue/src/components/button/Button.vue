<template>
  <button :class="rootClass" :disabled="disabled">
    <span v-if="$slots.default" :class="text">
      <slot />
    </span>

    <span :class="loadingWrap">
      <loading
        v-if="loading"
        :radius="RADIUS"
        :stroke="STROKE"
        :color="outlined ? type : color"
      />
    </span>
  </button>
</template>

<script lang="ts">
import {
  classes,
  color,
  props2Class,
  RADIUS,
  STROKE
} from '@share/components/button'
import { Color, DEFAULT_COLOR } from '@share/constants'
import { colorValidator } from '@share/validator'
import { computed, defineAsyncComponent, defineComponent, PropType } from 'vue'

const Loading = defineAsyncComponent(
  () => import('@/components/loading/Loading.vue')
)

export default defineComponent({
  components: {
    Loading
  },
  props: {
    type: {
      type: String as PropType<Color>,
      default: DEFAULT_COLOR,
      validator: colorValidator
    },
    disabled: { type: Boolean },
    outlined: { type: Boolean },
    round: { type: Boolean },
    loading: { type: Boolean },
    block: { type: Boolean }
  },
  setup(props) {
    const rootClass = computed(() =>
      props2Class({
        outlined: props.outlined,
        round: props.round,
        block: props.block,
        loading: props.loading,
        color: props.type,
        disabled: props.disabled
      })
    )
    return { rootClass, ...classes, color, RADIUS, STROKE }
  }
})
</script>

<style scoped lang="less">
@import '@share/components/button/index.less';
</style>
