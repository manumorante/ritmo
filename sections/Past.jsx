import cx from 'clsx'
import Moments from 'components/Moments'
import Image from 'next/image'

export default function Past() {
  const sectionCx = cx('Past', 'section py-10', 'bg-white')
  const titleCx = cx(
    'm-10',
    'text-center',
    'text-min-xl',
    'font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )
  const textCx = cx('m-10 text-center text-min-md text-neutral-600')

  return (
    <section className={sectionCx}>
      <h3 className={titleCx}>Eventos anteriores</h3>

      <p className={textCx}>
        Con grupos como <strong>EsteYelOtro</strong> o <strong>EldeMaspara Alla</strong> mas de 1000 han disfrutado ya
        de la magia de ritmo.
      </p>

      <Moments>
        <Moments.Item>
          <Image src='/moments/1.jpg' width={1080} height={1080} alt='Momento pasado 1' />
        </Moments.Item>
        <Moments.Item>
          <Image src='/moments/2.jpg' width={1080} height={1080} alt='Momento pasado 2' />
        </Moments.Item>
        <Moments.Item>
          <Image src='/moments/3.jpg' width={1080} height={1080} alt='Momento pasado 3' />
        </Moments.Item>
        <Moments.Item>
          <Image src='/moments/4.jpg' width={1080} height={1080} alt='Momento pasado 4' />
        </Moments.Item>
        <Moments.Item>
          <Image src='/moments/5.jpg' width={1080} height={1080} alt='Momento pasado 5' />
        </Moments.Item>
        <Moments.Item>
          <Image src='/moments/6.jpg' width={1080} height={1080} alt='Momento pasado 6' />
        </Moments.Item>
        <Moments.Item>
          <Image src='/moments/7.jpg' width={1080} height={1080} alt='Momento pasado 7' />
        </Moments.Item>
        <Moments.Item>
          <Image src='/moments/8.jpg' width={1080} height={1080} alt='Momento pasado 8' />
        </Moments.Item>
      </Moments>
    </section>
  )
}
