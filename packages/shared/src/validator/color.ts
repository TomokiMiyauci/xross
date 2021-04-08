import { COLORS, Color } from '../constants'
const validator = (val: Color): boolean => COLORS.includes(val)

export { validator }
