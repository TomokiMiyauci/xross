import { computed, ComputedRef, ref, UnwrapRef } from 'vue'

type AnyFn<T = any> = (...args: any[]) => T

type UseState<T> = readonly [
  ComputedRef<UnwrapRef<T>>,
  (val: UnwrapRef<T> | AnyFn<UnwrapRef<T>>) => void
]
const useState = <T>(init: T): UseState<T> => {
  const state = ref<T>(init)
  const stateRef = computed<UnwrapRef<T>>(() => state.value)
  const setState = (val: UnwrapRef<T> | AnyFn<UnwrapRef<T>>): void => {
    if (typeof val === 'function') {
      state.value = (val as AnyFn<UnwrapRef<T>>)()
    } else {
      state.value = val
    }
  }

  return [stateRef, setState] as const
}

export { useState }
