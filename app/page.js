import { INFO } from 'public/data'
import cx from 'clsx'
import Lineup from 'components/Lineup'
import Logo from 'components/Logo'

export default function Page() {
  const maintextCx = cx('uppercase')
  const dateCx = cx('text-3xl font-light leading-none')
  const location1Cx = cx('text-3xl leading-none')
  const location2Cx = cx('text-lg font-light')
  const lineupCx = cx('text-4xl font-medium')

  return (
    <div className='Page'>
      <div className='flex flex-col gap-4'>
        {/* Logo */}
        <div className='my-2'>
          <Logo />
        </div>

        <div className={maintextCx}>
          <time className={dateCx}>5 y 6 de Mayo</time>
          <div className={location1Cx}>Paraje Natural de la Ermita de los Tres Juanes</div>
          <div className={location2Cx}>Atarfe, Granada</div>
        </div>

        <div className={lineupCx}>
          <Lineup />
        </div>
      </div>
    </div>
  )
}
