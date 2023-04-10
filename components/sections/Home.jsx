import cx from 'clsx'
import Section from 'components/Section'
import Image from 'next/image'

export default function Home() {
  const mainCx = cx(
    //
    'Home',
    'text-white bg-gray-300',
    'relative'
  )

  const logoCx = cx('Ritmo', 'max-w-[100px] h-auto')
  const dateCx = cx('Date mt-4 text-base opacity-80')
  const imageCx = cx('Cover', 'absolute z-0 object-cover w-full h-full')

  return (
    <Section className={mainCx}>
      <div className='static z-10 text-center'>
        <Image
          className={logoCx}
          src={'/ritmo-logo.png'}
          width={396}
          height={136}
          alt='RITMO logo'
        />
        <p className={dateCx}>5-6 MAYO</p>
      </div>
      <Image className={imageCx} src={'/portada.jpg'} width={970} height={568} alt='Ritmo' />
    </Section>
  )
}
