/* eslint-disable react/prop-types */
import React, { FC, useMemo } from 'react'
import {
  DEFAULT_RADIUS,
  DEFAULT_STROKE,
  DEFAULT_COLOR,
  PATH_LENGTH,
  classNames,
  getColorClass
} from '@share/components/loading'
import { divide, multiply, px, subtract } from '@share/utils'

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
  const { loading, circle } = classNames

  const normalizedRadius = useMemo(() => subtract(radius, divide(stroke, 2)), [
    radius,
    stroke
  ])
  const colorClass = useMemo(() => getColorClass(color), [color])
  const diameter = useMemo(() => multiply(radius, 2), [radius])
  const diameterpx = useMemo(() => px(diameter.toString()), [diameter])

  return (
    <svg
      className={loading}
      style={{
        maxWidth: diameterpx,
        maxHeight: diameterpx
      }}
    >
      <circle
        className={`${circle} ${colorClass}`}
        style={{
          stroke: color
        }}
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
