import { POSITIONS } from '../constants'
import { includeValidatorFactory } from '../utils'

const validator = includeValidatorFactory(POSITIONS)

export { validator }
