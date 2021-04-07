export * from '@/utils/math'
const unit = (unit: string, val: string): string => `${val}${unit}`
const px = (val: string): string => unit('px', val)

export { px }
