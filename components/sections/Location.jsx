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

  const sectionCx = cx('Location section min-h-[60vh]')
  const imageCx = cx('w-screen h-[30vh] object-cover my-10')
  const image1Cx = cx(imageCx)
  const image2Cx = cx(imageCx)
  const image1Style = yxz(0, scroll * 0.5)
  const image2Style = yxz(0, scroll * -1.5)

  return (
    <section ref={ref} className={sectionCx}>
      <Image
        className={image2Cx}
        style={image2Style}
        src={'/ermita2.jpg'}
        width={828}
        height={593}
        alt='Ermita de los Tres Juanes'
      />

      <Image
        className={image1Cx}
        style={image1Style}
        src={'/ermita.jpg'}
        width={752}
        height={430}
        alt='Ermita de los Tres Juanes'
      />
    </section>
  )
}
