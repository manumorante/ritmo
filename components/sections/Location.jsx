'use client'

import cx from 'clsx'
import Image from 'next/image'
import { useRef } from 'react'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { yxz } from 'lib/yxz'

export default function Location() {
  const ref = useRef()
  const { scroll } = useParallax({ ref })

  const mainCx = cx('Location section h-[50vh]')
  const imageCx = cx('w-full h-full object-cover')
  const imageStyle = yxz(percentMinMax(scroll, 40, 60))

  return (
    <section ref={ref} className={mainCx}>
      <Image
        className={imageCx}
        style={imageStyle}
        src={'/ermita2.jpg'}
        width={828}
        height={593}
        alt='Ermita de los Tres Juanes'
      />
    </section>
  )
}
