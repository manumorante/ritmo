'use client'

import cx from 'clsx'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { yxz } from 'lib/yxz'
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const ref = useRef(null)
  const { scroll } = useParallax({ ref, visible: true })
  const sectionCx = cx('Home', 'section min-h-[90vh] gradient bg-fixed')
  const logoCx = cx('Ritmo', 'right-left top-40')
  const ritmoCx = cx('max-w-[200px] h-auto mx-auto')
  const dateCx = cx('Date', 'right-left top-60 text-center font-medium')
  const dateTxtCx = cx('text-2xl text-white opacity-80')

  const imageCx = cx('Arco', 'absolute top-64 w-full h-auto')

  const logoStyle = yxz(percentMinMax(scroll, 0, 400))
  const dateStyle = yxz(percentMinMax(scroll, 0, 350))
  const imageStyle = yxz(percentMinMax(scroll, 0, 500))

  return (
    <section ref={ref} className={sectionCx}>
      <div className={logoCx} style={logoStyle}>
        <Image
          className={ritmoCx}
          src={'/ritmo-logo.png'}
          width={396}
          height={136}
          alt='RITMO logo'
        />
      </div>
      <div className={dateCx} style={dateStyle}>
        <p className={dateTxtCx}>5-6 MAYO</p>
      </div>
      {/* <code>scroll: {scroll}</code> */}
      <Image
        className={imageCx}
        style={imageStyle}
        src={'/arco.png'}
        width={768}
        height={814}
        alt='FX'
      />
    </section>
  )
}
