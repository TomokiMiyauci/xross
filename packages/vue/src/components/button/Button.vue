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
        :color="outlined ? color : color === 'neutral' ? colorGray : colorWhite"
      />
    </span>
  </button>
</template>

<script lang="ts">
import {
  classes,
  colorGray,
  colorWhite,
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
    color: {
      type: String as PropType<Color | string>,
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
        color: props.color,
        disabled: props.disabled
      })
    )
    return { rootClass, ...classes, colorWhite, colorGray, RADIUS, STROKE }
  }
})
</script>
