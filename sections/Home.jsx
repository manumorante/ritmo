import cx from 'clsx'

import Image from 'next/image'

export default function Home() {
  const sectionCx = cx('Home section h-screen gradient bg-fixed')
  const logoCx = cx('Ritmo mt-40 w-48 h-auto mx-auto')
  const dateCx = cx('Date text-center font-medium text-2xl text-white/80')
  const imageCx = cx('Arco Parallax', 'absolute top-64 w-full h-auto')

  return (
    <section className={sectionCx}>
      <Image className={logoCx} src={'/ritmo-logo.png'} width={396} height={136} alt='RITMO logo' />

      <div data-parallax={false} className={dateCx}>
        5-6 MAYO
      </div>

      <Image className={imageCx} src={'/arco.png'} width={768} height={814} alt='FX' />

      {/* 
      <Image className={p1Cx} src={'/stones/p1.png'} width={16} height={16} alt='Stone' />
      <Image className={p2Cx} src={'/stones/p2.png'} width={16} height={16} alt='Stone' />
      <Image className={p3Cx} src={'/stones/p3.png'} width={16} height={16} alt='Stone' />
      <Image className={p4Cx} src={'/stones/p4.png'} width={16} height={16} alt='Stone' />
      <Image className={p5Cx} src={'/stones/p5.png'} width={16} height={16} alt='Stone' />
      <Image className={p6Cx} src={'/stones/p6.png'} width={16} height={16} alt='Stone' />
      <Image className={p7Cx} src={'/stones/p7.png'} width={16} height={16} alt='Stone' />
      */}
    </section>
  )
}
