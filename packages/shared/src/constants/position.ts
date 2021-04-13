export const TOP = 'top'
export const LEFT = 'left'
export const BOTTOM = 'bottom'
export const RIGHT = 'right'
export const POSITIONS = [TOP, LEFT, BOTTOM, RIGHT] as const
export type Position = typeof POSITIONS[number]
