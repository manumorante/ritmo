import cx from 'clsx'
import Cards from 'components/Cards'

export default function Info() {
  const sectionCx = cx('Info section py-10 bg-white')
  const titleCx = cx(
    'm-10',
    'text-center',
    'text-min-xl',
    'font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )

  return (
    <section className={sectionCx}>
      <h3 className={titleCx}>Info</h3>

      <Cards>
        <Cards.Item>hola</Cards.Item>
        <Cards.Item>hola</Cards.Item>
        <Cards.Item>hola</Cards.Item>
        <Cards.Item>hola</Cards.Item>
      </Cards>
    </section>
  )
}
