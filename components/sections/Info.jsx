'use client'

import cx from 'clsx'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { useRef } from 'react'
import Cards from 'components/Cards'
import Image from 'next/image'

export default function Info() {
  const ref = useRef()
  const { scroll } = useParallax({ ref })
  const sectionCx = cx('Info', 'Section py-10', 'bg-white')

  const titleCx = cx(
    'm-10',
    'text-center',
    'text-min-xl',
    'font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )

  const textCx = cx('m-10 text-center text-min-md text-neutral-600')

  const textStyle = {}

  return (
    <section ref={ref} className={sectionCx}>
      <h3 className={titleCx} style={textStyle}>
        Info
      </h3>

      <Cards>
        <Cards.Item>hola</Cards.Item>
        <Cards.Item>hola</Cards.Item>
        <Cards.Item>hola</Cards.Item>
        <Cards.Item>hola</Cards.Item>
      </Cards>
    </section>
  )
}
