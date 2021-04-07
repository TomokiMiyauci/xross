/* eslint-disable react/prop-types */
import React, { FC, useMemo } from 'react'
import '@share/components/loading/index.less'
import {
  DEFAULT_RADIUS,
  DEFAULT_STROKE,
  DEFAULT_COLOR,
  PATH_LENGTH,
  classNames
} from '@share/components/loading/constants'

const unit = (unit: string, val: string): string => `${val}${unit}`

type Props = Partial<{
  stroke: number
  radius: number
  color: string
}>

const Loading: FC<Props> = ({
  stroke = DEFAULT_STROKE,
  radius = DEFAULT_RADIUS,
  color = DEFAULT_COLOR
}) => {
  const normalizedRadius = useMemo(() => radius - stroke / 2, [radius, stroke])
  const { loading, loadingCircle } = classNames
  const diameter = useMemo(() => radius * 2, [radius])
  const diameterpx = useMemo(() => unit('px', diameter.toString()), [diameter])

  return (
    <svg
      className={loading}
      style={{
        maxWidth: diameterpx,
        maxHeight: diameterpx
      }}
    >
      <circle
        className={loadingCircle}
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        pathLength={PATH_LENGTH}
      />
    </svg>
  )
}

export default Loading
