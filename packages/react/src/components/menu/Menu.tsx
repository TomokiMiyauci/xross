/* eslint-disable react/prop-types */
import React, { FC, useRef, ReactChild, useState, useMemo } from 'react'
import { useClickOutside } from '@miyauci/react-click-outside'
import { Position } from '@share/constants'
import { position as computePosition } from '@share/utils'
import { DEFAULT_POSITION } from '@share/components/menu/constants'
import { Transition } from '@tailwindui/react'
type MenuProps = {
  children?: ReactChild
  menu?: ReactChild
  position?: Position
}

const Menu: FC<MenuProps> = ({
  children,
  menu,
  position = DEFAULT_POSITION
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  useClickOutside(ref, () => {
    toggleShow(false)
  })
  const positionClass = useMemo(() => computePosition(position), [position])

  const [isShow, toggleShow] = useState(false)
  return (
    <span
      onClick={() => toggleShow(!isShow)}
      className="inline-block relative"
      ref={ref}
    >
      {children}

      <Transition
        className="transition-opacity duration-200"
        show={isShow}
        enterFrom="opacity-0"
        leaveTo="opacity-0"
      >
        <div className={['absolute', positionClass].join(' ')}>{menu}</div>
      </Transition>
    </span>
  )
}

export default Menu
