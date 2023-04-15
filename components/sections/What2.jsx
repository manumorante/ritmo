'use client'

import cx from 'clsx'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { useRef } from 'react'

export default function What2() {
  const ref = useRef()
  const { scroll, visible } = useParallax({ ref })

  const mainCx = cx('What2', 'section centered', 'p-[10%]', 'gradient')

  const textCx = cx(
    'text-min-xl',
    'text-center font-extrabold tracking-tight leading-none text-white'
  )

  return (
    <section ref={ref} className={mainCx}>
      <h3 className={textCx}>Un evento excepcional enmarcado por la belleza natural de Granada</h3>
    </section>
  )
}
