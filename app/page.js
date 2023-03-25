import cx from 'clsx'
import Lineup from 'components/Lineup'
import Logo from 'components/Logo'
import Section from 'components/Section'

export default function Page() {
  const editionCx = cx('text-4xl font-light')
  const maintextCx = cx('uppercase')
  const dateCx = cx('text-3xl font-light leading-none')
  const location1Cx = cx('text-3xl leading-none')
  const location2Cx = cx('text-lg font-light')

  return (
    <>
      <div className='flex justify-between gap-4 my-2'>
        <Logo />
        <div className={editionCx}>2023</div>
      </div>

      <Section>
        <div className={maintextCx}>
          <time className={dateCx}>5 y 6 de Mayo</time>
          <div className={location1Cx}>Paraje Natural de la Ermita de los Tres Juanes</div>
          <div className={location2Cx}>Atarfe, Granada</div>
        </div>
      </Section>

      <Section>
        <Lineup>
          <Lineup.Head />
          <Lineup.Main />
          <Lineup.Rest />
        </Lineup>
      </Section>
    </>
  )
}
