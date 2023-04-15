'use client'

import cx from 'clsx'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { useRef } from 'react'
import Image from 'next/image'

export default function What2() {
  const ref = useRef()
  const { scroll, visible } = useParallax({ ref })

  const mainCx = cx('What2', 'section centered', 'p-[10%]', 'gradient')

  const titleCx = cx(
    'text-min-xl',
    'text-center font-extrabold tracking-tight leading-none text-white'
  )

  const imageCx = cx('Paisaje', 'absolute bottom-16 w-full h-auto')

  return (
    <section ref={ref} className={mainCx}>
      <h3 className={titleCx}>Un evento excepcional enmarcado por la belleza natural de Granada</h3>

      <Image
        className={imageCx}
        src={'/paisaje.png'}
        width={856}
        height={552}
        alt='Paisaje abstracto'
      />
    </section>
  )
}
