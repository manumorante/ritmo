import cx from 'clsx'
import Image from 'next/image'

export default function Header() {
  const mainCx = cx('Header fixed z-50 top-0 w-full flex align-center justify-between px-4 py-4')
  const logoCx = cx('Ritmo w-[100px]')

  return (
    <header className={mainCx}>
      <Image className={logoCx} src={'/logo.png'} width={200} height={68} alt='RITMO logo' />
      <div className='menu'>menu</div>
    </header>
  )
}
