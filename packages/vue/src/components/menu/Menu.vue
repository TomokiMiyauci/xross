<template>
  <span
    v-click-outside="() => toggleShow(false)"
    class="inline-block relative"
    @click="() => toggleShow()"
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
import { directive } from '@miyauci/vue-click-outside'
import { DEFAULT_POSITION } from '@share/components/menu/constants'
import { Position } from '@share/constants'
import { position } from '@share/utils'
import { positionValidator as validator } from '@share/validator'
import { computed, defineComponent, PropType } from 'vue'

import { useToggle } from '@/hooks'
export default defineComponent({
  directives: {
    ClickOutside: directive
  },

  props: {
    position: {
      type: String as PropType<Position>,
      default: DEFAULT_POSITION,
      validator
    }
  },

  setup(props) {
    const [isShow, toggleShow] = useToggle()
    const positionClass = computed<string>(() => position(props.position))

    return {
      isShow,
      toggleShow,
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
