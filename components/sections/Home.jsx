'use client'

import cx from 'clsx'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const ref = useRef(null)
  const { scroll } = useParallax({ ref, visible: true })
  const mainCx = cx('Home', 'Section gradient relative')
  const logoCx = cx('Ritmo', 'absolute-right-left')
  const ritmoCx = cx('max-w-[200px] h-auto mx-auto')
  const dateCx = cx('Date', 'absolute-right-left text-center')
  const dateTxtCx = cx('text-2xl text-white opacity-80')

  const imageCx = cx('Arco', 'absolute w-full h-auto')

  const logoStyle = { top: '20%', transform: `translateY(${percentMinMax(scroll, 0, 400)}px)` }
  const dateStyle = { top: '30%', transform: `translateY(${percentMinMax(scroll, 0, 350)}px)` }
  const imageStyle = {
    top: '32%',
    transform: `translateY(${percentMinMax(scroll, 0, 500)}px)
     scale(${percentMinMax(scroll, 1, 0.9)})`,
  }

  return (
    <section ref={ref} className={mainCx}>
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
