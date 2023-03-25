import cx from 'clsx'
import { META } from 'public/data'
import Lineup from 'components/Lineup'
import Logo from 'components/Logo'
import Section from 'components/Section'
import Link from 'components/Link'
import Container from 'components/Container'
import Image from 'next/image'

export default function Page() {
  const location1Cx = cx('text-3xl py-6 leading-none')

  return (
    <>
      <Section>
        <Container>
          <Logo />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={location1Cx}>Paraje Natural Ermita Los Tres Juanes</div>
        </Container>
        <Image src='/ermita.jpg' width={752} height={430} alt='Ermita Los Tres Juanes' />
      </Section>

      <Section>
        <Container>
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
        </Container>
      </Section>

      <Section title='Cómo llegar'>
        <Container>
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
        </Container>
      </Section>

      <div className='flex gap-4'>
        <div className='w-60 h-20 bg-white rounded-lg shadow'></div>
        <div className='w-60 h-20 bg-white rounded-lg shadow'></div>
        <div className='w-60 h-20 bg-white rounded-lg shadow'></div>
      </div>

      <Section title='¿Tiene RIT/MO servicio de autobuses?'>
        <Container>
          Sí. La Organización habilitará una línea de autobuses para ir y volver de RIT/MO desde
          Granada (Centro Comercial Neptuno; 2€ por trayecto). Los tickets se compran al subirse al
          autobús.
        </Container>
      </Section>
    </>
  )
}
