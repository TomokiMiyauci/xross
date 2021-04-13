import { Position } from '../constants'
export * from './math'
const unit = (unit: string, val: string): string => `${val}${unit}`
const px = (val: string): string => unit('px', val)
const position = (position: Position): string => {
  switch (position) {
    case 'top': {
      return 'bottom-full left-1/2 transform -translate-x-1/2'
    }

    case 'bottom': {
      return 'top-full left-1/2 transform -translate-x-1/2'
    }

    case 'left': {
      return 'right-full top-1/2 transform -translate-y-1/2'
    }

    case 'right': {
      return 'left-full top-1/2 transform -translate-y-1/2'
    }
    default: {
      return ''
    }
  }
}
const include = <T, K extends T>(arr: readonly T[], val: K): boolean =>
  arr.includes(val)

const includeValidatorFactory = <T, K extends T>(arr: readonly T[]) => (
  val: K
): boolean => include(arr, val)
export { px, position, include, includeValidatorFactory }
