import cx from 'clsx'
import Section from 'components/Section'

export default function Past() {
  const mainCx = cx(
    //
    'Past',
    'p-[10%]',
    'bg-white'
  )

  const textStyle = { fontSize: 'min(5vw, 4rem)' }
  const textCx = cx(
    'text-center font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )

  return (
    <Section className={mainCx}>
      <h3 className={textCx} style={textStyle}>
        Eventos anteriores
      </h3>
    </Section>
  )
}
