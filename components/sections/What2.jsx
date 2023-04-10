import cx from 'clsx'
import Section from 'components/Section'

export default function What2() {
  const mainCx = cx(
    //
    'What2',
    'p-[10%]',
    'gradient'
  )

  const textCx = cx(
    'text-min-xl',
    'text-center font-extrabold tracking-tight leading-none text-white'
  )

  return (
    <Section className={mainCx}>
      <h3 className={textCx}>Un evento excepcional enmarcado por la belleza natural de Granada</h3>
    </Section>
  )
}
