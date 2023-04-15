'use client'

import cx from 'clsx'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { useRef } from 'react'

export default function What() {
  const ref = useRef()
  const { scroll } = useParallax({ ref })
  const sectionCx = cx('What', 'Section')

  const textCx = cx(
    'absolute-right-left top-1/2',
    'px-8',
    'text-center',
    'text-min-xl',
    'font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )

  const textStyle = { transform: `translateY(${scroll * -3}px)` }

  return (
    <section ref={ref} className={sectionCx}>
      <h3 className={textCx} style={textStyle}>
        Quédate a vivir la música en un paraje natural
      </h3>
    </section>
  )
}
