import cx from 'clsx'
import { META } from 'public/data'
import Lineup from 'components/Lineup'
import Logo from 'components/Logo'
import Section from 'components/Section'
import Link from 'components/Link'

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
        </div>
      </Section>

      <div className='flex gap-4'>
        <div className='w-60 h-20 bg-white rounded-lg shadow'>BUS</div>
        <div className='w-60 h-20 bg-white rounded-lg shadow'>PARKING</div>
        <div className='w-60 h-20 bg-white rounded-lg shadow'>VEGANA</div>
      </div>

      <Section>
        <Lineup>
          <Lineup.Head />
          <Lineup.Main />

          <div className='flex gap-4'>
            <Link secondary href={META.tickets.url}>
              Más artístas
            </Link>
            <Link href={META.tickets.url}>Comprar entradas</Link>
          </div>
        </Lineup>
      </Section>

      <Section title='Cómo llegar'>
        <div className='flex flex-col gap-4'>
          <p>
            RIT/MO se celebra en el Paraje Natural de la Ermita de los Tres Juanes (Atarfe,
            Granada).
          </p>
          <p>
            Desde Granada se llega a través de la Circunvalación dirección Jaén. Salida 3
            (Almería/Murcia – Málaga/Algeciras – Córdoba – Aeropuerto) dirección Málaga/Algeciras
            Córdoba.
          </p>
          <p>Continuar hasta salida 238 (Atarfe / Las Canteras).</p>
          <p>
            Girar a la derecha dirección “Las Canteras” hasta desvío a la derecha siguiendo
            indicación “La Ermita”.
          </p>
          <p>Esa carretera ya te conducirá directamente hasta el recinto de RIT/MO.</p>
        </div>
      </Section>

      <div className='flex gap-4'>
        <div className='w-60 h-20 bg-white rounded-lg shadow'></div>
        <div className='w-60 h-20 bg-white rounded-lg shadow'></div>
        <div className='w-60 h-20 bg-white rounded-lg shadow'></div>
      </div>

      <Section title='¿Tiene RIT/MO servicio de autobuses?'>
        Sí. La Organización habilitará una línea de autobuses para ir y volver de RIT/MO desde
        Granada (Centro Comercial Neptuno; 2€ por trayecto). Los tickets se compran al subirse al
        autobús.
      </Section>
    </>
  )
}
