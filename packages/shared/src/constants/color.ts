export const NEUTRAL = 'neutral'
export const PRIMARY = 'primary'
export const SUCCESS = 'success'
export const DANGER = 'danger'
export const WARNING = 'warning'
export const COLORS = [NEUTRAL, PRIMARY, SUCCESS, DANGER, WARNING] as const
export type Color = typeof COLORS[number]
