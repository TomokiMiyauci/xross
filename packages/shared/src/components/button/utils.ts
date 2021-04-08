import { Color } from '../../constants'
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
    'btn',
    {
      outlined,
      round,
      block,
      loading,
      [color]: color,
      disabled
    }
  ]
}

export { props2Class }
