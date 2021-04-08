import { Color } from '../../constants'
import s from './index.module.less'

const props2Class = ({
  outlined,
  round,
  block,
  loading,
  color,
  disabled
}: {
  outlined: boolean
  round: boolean
  block: boolean
  loading: boolean
  color: string | Color
  disabled: boolean
}) => {
  return [
    s.btn,
    {
      [s.outlined]: outlined,
      [s.round]: round,
      [s.block]: block,
      [s.loading]: loading,
      [s[color]]: color,
      [s.disabled]: disabled
    }
  ]
}

export { props2Class }
