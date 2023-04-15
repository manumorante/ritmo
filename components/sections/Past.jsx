import cx from 'clsx'

export default function Past() {
  const mainCx = cx('Past', 'Section', 'p-[10%]', 'bg-white')

  const textStyle = { fontSize: 'min(5vw, 4rem)' }
  const textCx = cx(
    'text-center font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )

  return (
    <section className={mainCx}>
      <h3 className={textCx} style={textStyle}>
        Eventos anteriores
      </h3>
    </section>
  )
}
