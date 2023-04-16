import cx from 'clsx'
import Image from 'next/image'

export default function What2() {
  const sectionCx = cx('What2 section flex flex-col justify-center items-center gradient py-10')
  const titleCx = cx('m-10 text-min-xl text-center font-extrabold tracking-tight leading-none text-white')
  const imageCx = cx('Paisaje w-full h-auto mb-10')

  return (
    <section className={sectionCx}>
      <h3 className={titleCx}>Un evento excepcional enmarcado por la belleza natural de Granada</h3>

      <Image className={imageCx} src={'/paisaje.png'} width={856} height={552} alt='Paisaje abstracto' />
    </section>
  )
}
