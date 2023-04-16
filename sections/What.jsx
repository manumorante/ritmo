import cx from 'clsx'

export default function What() {
  const sectionCx = cx('What section bg-white min-h-[70vh]')
  const textCx = cx(
    'absolute right-0 left-0 top-1/2 -translate-y-1/2',
    'px-8',
    'text-center',
    'text-min-xl',
    'font-extrabold tracking-tight leading-none',
    'text-[#AC3EB7] text-gradient'
  )

  return (
    <section className={sectionCx}>
      <h3 className={textCx}>Quédate a vivir la música en un paraje natural</h3>
    </section>
  )
}
