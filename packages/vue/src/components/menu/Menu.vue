<template>
  <span
    v-click-outside="() => setShow(false)"
    class="inline-block relative"
    @click="() => setShow(!isShow)"
  >
    <slot :showing="isShow" />

    <transition name="fade">
      <div v-show="isShow" class="absolute" :class="[positionClass]">
        <slot name="menu" />
      </div>
    </transition>
  </span>
</template>

<script lang="ts">
import { mixin } from '@miyauci/vue-click-outside'
import { DEFAULT_POSITION } from '@share/components/menu/constants'
import { Position } from '@share/constants'
import { position } from '@share/utils'
import { positionValidator as validator } from '@share/validator'
import { computed, defineComponent, PropType } from 'vue'

import { useState } from '@/hooks'
export default defineComponent({
  mixins: [mixin],

  props: {
    position: {
      type: String as PropType<Position>,
      default: DEFAULT_POSITION,
      validator
    }
  },

  setup(props) {
    const [isShow, setShow] = useState(false)
    const positionClass = computed<string>(() => position(props.position))

    return {
      isShow,
      setShow,
      positionClass
    }
  }
})
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  @apply transition duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
