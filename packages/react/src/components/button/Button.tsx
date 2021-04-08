/* eslint-disable react/prop-types */
import React, { FC, useMemo, ReactChild } from 'react'
import {
  classes,
  colorGray,
  colorWhite,
  props2Class,
  RADIUS,
  STROKE
} from '@share/components/button'
import { Color, DEFAULT_COLOR } from '@share/constants'
import Loading from '@/components/loading/Loading'

type Props = {
  color: string | Color
  disabled: boolean
  outlined: boolean
  round: boolean
  loading: boolean
  block: boolean
  children: ReactChild
}

const Button: FC<Partial<Props>> = ({
  color = DEFAULT_COLOR,
  disabled = false,
  outlined = false,
  round = false,
  loading = false,
  block = false,
  children
}) => {
  const { text, loadingWrap } = classes

  const rootClass = useMemo(
    () =>
      props2Class({
        color,
        disabled,
        outlined,
        round,
        loading,
        block
      })
        .map((name) => {
          if (typeof name === 'string') return name
          return Object.entries(name).reduce((acc, [key, value]) => {
            if (!!value) {
              return [...acc, key]
            }
            return acc
          }, [] as string[])
        })
        .flat()
        .join(' '),
    [color, disabled, outlined, round, loading, block]
  )

  return (
    <button className={rootClass} disabled={disabled}>
      {children && <span className={text}>{children}</span>}

      <span className={loadingWrap}>
        {loading && (
          <Loading
            radius={RADIUS}
            stroke={STROKE}
            color={
              outlined ? color : color === 'neutral' ? colorGray : colorWhite
            }
          />
        )}
      </span>
    </button>
  )
}

export default Button
