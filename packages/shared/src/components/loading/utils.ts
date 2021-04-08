import { Color, COLORS } from '../../constants'
import { classNames, COLOR_CLASS } from './constants'

const getColorClass = (color: string): string =>
  COLORS.includes(color as Color)
    ? classNames.color[color as Color]
    : COLOR_CLASS

export { getColorClass }
