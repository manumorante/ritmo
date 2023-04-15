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

  // Stones
  const pCx = cx('absolute w-4 h-4')
  const p1Cx = cx('P1', pCx, 'left-10')
  const p2Cx = cx('P2', pCx, 'left-16')
  const p3Cx = cx('P3', pCx, 'left-4')
  const p4Cx = cx('P4', pCx, 'left-2')
  const p5Cx = cx('P5', pCx, 'left-10')
  const p6Cx = cx('P6', pCx, 'left-16')
  const p7Cx = cx('P7', pCx, 'left-4')

  const p1Style = { transform: `translateY(${scroll * -1}px)`, top: '70%' }
  const p2Style = { transform: `translateY(${scroll * -2}px)`, top: '65%' }
  const p3Style = { transform: `translateY(${scroll * -3}px)`, top: '60%' }
  const p4Style = { transform: `translateY(${scroll * -4}px)`, top: '55%' }
  const p5Style = { transform: `translateY(${scroll * -5}px)`, top: '50%' }
  const p6Style = { transform: `translateY(${scroll * -6}px)`, top: '55%' }
  const p7Style = { transform: `translateY(${scroll * -7}px)`, top: '40%' }

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

      <Image
        className={imageCx}
        style={imageStyle}
        src={'/arco.png'}
        width={768}
        height={814}
        alt='FX'
      />

      <Image
        style={p1Style}
        className={p1Cx}
        src={'/stones/p1.png'}
        width={16}
        height={16}
        alt='Stone'
      />
      <Image
        style={p2Style}
        className={p2Cx}
        src={'/stones/p2.png'}
        width={16}
        height={16}
        alt='Stone'
      />
      <Image
        style={p3Style}
        className={p3Cx}
        src={'/stones/p3.png'}
        width={16}
        height={16}
        alt='Stone'
      />
      <Image
        style={p4Style}
        className={p4Cx}
        src={'/stones/p4.png'}
        width={16}
        height={16}
        alt='Stone'
      />
      <Image
        style={p5Style}
        className={p5Cx}
        src={'/stones/p5.png'}
        width={16}
        height={16}
        alt='Stone'
      />
      <Image
        style={p6Style}
        className={p6Cx}
        src={'/stones/p6.png'}
        width={16}
        height={16}
        alt='Stone'
      />
      <Image
        style={p7Style}
        className={p7Cx}
        src={'/stones/p7.png'}
        width={16}
        height={16}
        alt='Stone'
      />
    </section>
  )
}
