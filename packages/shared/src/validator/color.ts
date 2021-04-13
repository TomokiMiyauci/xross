import { COLORS } from '../constants'
import { includeValidatorFactory } from '../utils'

const validator = includeValidatorFactory(COLORS)

export { validator }
