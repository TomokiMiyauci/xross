import { ComputedRef } from 'vue'

import { useState } from '@/hooks/useState'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn<T = any> = (...args: any[]) => T

type UseToggle = readonly [
  ComputedRef<boolean>,
  (val?: boolean | AnyFn<boolean>) => void
]

const useToggle = (init?: boolean): UseToggle => {
  const [state, setState] = useState(init ?? false)
  const toggle = (val?: boolean | AnyFn<boolean>): void => {
    if (typeof val === 'function') {
      setState((val as AnyFn<boolean>)())
    } else {
      setState(val ?? (!state.value as boolean))
    }
  }

  return [state, toggle] as const
}

export { useToggle }
