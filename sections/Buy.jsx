import cx from 'clsx'
import Link from 'components/Link'

export default function Buy() {
  const sectionCx = cx('Buy section bg-white')

  return (
    <section className={sectionCx}>
      <div className='container text-center pb-16'>
        <Link>Comprar entradas</Link>
      </div>
    </section>
  )
}
