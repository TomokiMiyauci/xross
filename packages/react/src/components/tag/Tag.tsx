/* eslint-disable react/prop-types */
import React, { FC, ReactChild } from 'react'
import { Color, DEFAULT_COLOR } from '@share/constants'
import '@share/components/tag/index.less'

type Props = {
  type?: Color
  filled?: boolean
  children: ReactChild
}
const Tag: FC<Props> = ({ type = DEFAULT_COLOR, children, filled }) => (
  <span
    className={['tag', type && `tag--${type}`, filled && `tag--${type}--filled`]
      .filter((name) => !!name)
      .join(' ')}
  >
    {children}
  </span>
)

export default Tag
