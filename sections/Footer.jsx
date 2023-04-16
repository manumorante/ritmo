import cx from 'clsx'

export default function Footer() {
  const sectionCx = cx('What2 section py-16 bg-slate-200')

  return (
    <section className={sectionCx}>
      <div className='container'>
        {/* <p className='font-medium text-lg text-neutral-700 mb-3'>RIT/MO Festival</p> */}

        <p className='text-lg text-neutral-700 mb-3'>
          Música electrónica en plena naturaleza para un aforo muy reducido.
        </p>

        {/* <p className='text-base text-neutral-500 mb-3'>
          En las faldas de Sierra Elvira (Atarfe, Granada), en el Paraje Natural de la Ermita de los Tres Juanes
        </p> */}

        <ul className='text-neutral-500 my-6 flex flex-col gap-1'>
          <li>
            <a href='#'>Condiciones, entrada y pulsera</a>
          </li>
          <li>
            <a href='#'>Autorización para menores</a>
          </li>
          <li>
            <a href='#'>Legal y privacidad</a>
          </li>
          <li>
            <a href='#'>Cookies</a>
          </li>
        </ul>

        <p className='text-neutral-500 text-sm my-6'>© 2023 RIT/MO Festival</p>
      </div>
    </section>
  )
}
