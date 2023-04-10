import cx from 'clsx'
import Section from 'components/Section'

export default function What() {
  const mainCx = cx(
    //
    'What',
    'p-[10%]',
    'bg-white'
  )

  const textCx = cx(
    'text-min-xl',
    'text-center font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )

  return (
    <Section className={mainCx}>
      <h3 className={textCx}>Quédate a vivir la música en un paraje natural</h3>
    </Section>
  )
}
