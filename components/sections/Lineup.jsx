'use client'

import cx from 'clsx'
import { useParallax } from 'lib/useParallax'
import { percentMinMax } from 'lib/percentMinMax'
import { useRef } from 'react'

export default function Lineup() {
  const ref = useRef()
  const { scroll } = useParallax({ ref })
  const sectionCx = cx('Lineup', 'section py-10', 'gradient text-white')

  const titleCx = cx(
    'm-10',
    'text-center',
    'text-min-xl',
    'font-extrabold tracking-tight leading-none',
    'text-white'
  )

  const lineupCx = cx('m-10', 'font-extrabold text-2xl')

  const textStyle = {}

  return (
    <section ref={ref} className={sectionCx}>
      <h3 className={titleCx} style={textStyle}>
        Lineup
      </h3>

      <ul className={lineupCx}>
        <li>Andre VII</li>
        <li>Audrey Danza</li>
        <li>Baldo</li>
        <li>Belaria</li>
        <li>Chinaski</li>
        <li>Cobertizo</li>
        <li>Dalila</li>
        <li>Daniel Kelsan</li>
        <li>Durand</li>
        <li>Erol Alkan</li>
        <li>Identified Patient</li>
        <li>Interstellar Funk</li>
        <li>JackWasFaster (live)</li>
        <li>Javi Redondo</li>
        <li>Local Suicide</li>
        <li>Masa Soundsystem</li>
        <li>Naone</li>
        <li>Oma Totem (live)</li>
        <li>Rey Colino</li>
        <li>Sama Yax</li>
        <li>Undo (live)</li>
      </ul>
    </section>
  )
}
