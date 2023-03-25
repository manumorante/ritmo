import cx from 'clsx'
import { META } from 'public/data'
import Lineup from 'components/Lineup'
import Logo from 'components/Logo'
import Section from 'components/Section'
import Link from 'components/Link'
import Container from 'components/Container'
import Image from 'next/image'
import Cards from 'components/Cards'

export default function Page() {
  const location1Cx = cx('text-3xl py-6 leading-none')

  const ermitaCx = cx(
    'w-full',
    'max-w-3xl',
    'h-60',
    'tablet:h-auto',

    'object-cover',
    'object-right-top',
    'rounded-l-xl',
    'tablet:rounded-xl',
    'tablet:mx-auto'
  )
  const shadowCx = cx('absolute -z-10 top-[-5%] right-[-20%] w-full h-[140%] opacity-60')

  const numberDotCx = cx(
    'flex shrink-0 justify-center items-center text-center rounded-full bg-white shadow w-14 h-14 mr-4 font-light text-4xl'
  )

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

        <div className='pl-4'>
          <Image
            className={ermitaCx}
            src='/ermita.jpg'
            width={752}
            height={430}
            alt='Ermita Los Tres Juanes'
          />
        </div>
        <Image className={shadowCx} src='/bg.png' width={1712} height={828} alt='Efecto sombra' />
      </Section>

      <Section>
        <Container>
          <Lineup>
            <Lineup.Head />
            <Lineup.Main />

            <div className='mt-8 flex gap-4 flex-col tablet:flex-row'>
              <Link secondary href={'#'}>
                Más artístas
              </Link>
              <Link href={META.tickets.url}>Comprar entradas</Link>
            </div>
          </Lineup>
        </Container>
      </Section>

      <Section>
        <Cards>
          <Cards.Item>
            <div className='text-4xl font-extrabold'>Bus</div>
            <div className='text-3xl'>Ida y vuelta </div>
            <div className='text-3xl font-light'>2€ trayecto</div>
            <div className='mt-4 text-lg leading-none'>Sale del C.C. Neptuno. Sin reserva</div>
          </Cards.Item>

          <Cards.Item>
            <div className='text-4xl font-extrabold'>Parking</div>
            <div className='text-3xl'>Reserva con tu bono</div>
            <div className='mt-4 text-lg leading-none'>Amplio</div>
          </Cards.Item>

          <Cards.Item>
            <div className='text-4xl font-extrabold'>Ventaja</div>
            <div className='text-3xl'>Alguna otra ventaja que me invente</div>
            <div className='mt-4 text-lg leading-none'>Tu verás</div>
          </Cards.Item>

          <Cards.Item>
            <div className='text-4xl font-extrabold'>Y algo más largo de título</div>
            <div className='text-3xl'>Muy bien estas tarjetas</div>
          </Cards.Item>
        </Cards>
        <Image className={shadowCx} src='/bg.png' width={1712} height={828} alt='Efecto sombra' />
      </Section>

      <Section title='Ediciones anteriores'>
        <Container>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo officia magni
            eveniet neque atque placeat dolores voluptate accusantium tenetur excepturi a at
            architecto magnam in odit doloremque, enim dolore?
          </p>
        </Container>
      </Section>

      <Section title='Cómo llegar'>
        <Container>
          <div className='flex flex-col gap-4'>
            <p>
              <strong>RIT/MO</strong> se celebra en el{' '}
              <strong>Paraje Natural de la Ermita de los Tres Juanes</strong> (Atarfe, Granada).
            </p>
            <ol className='child:flex flex flex-col gap-4 text-lg'>
              <li>
                <div className={numberDotCx}>1</div>
                <div>
                  Se llega a través de la Circunvalación dirección Jaén. <strong>Salida 3</strong>
                </div>
              </li>
              <li>
                <div className={numberDotCx}>2</div>
                <div>
                  Continuar hasta <strong>salida 238</strong> (Atarfe / Las Canteras).
                </div>
              </li>
              <li>
                <div className={numberDotCx}>3</div>
                <div>
                  Girar a la derecha dirección <strong>Las Canteras</strong> hasta desvío a la
                  derecha siguiendo indicación <strong>La Ermita</strong>.
                </div>
              </li>
              <li>
                <div className={numberDotCx}>4</div>
                <div>
                  Esa carretera va directa hasta el recinto de <strong>RIT/MO</strong>. ¡Disfruta!
                </div>
              </li>
            </ol>
          </div>
        </Container>
      </Section>

      <Section title=''>
        <Container>
          <p>RIT/MO 2023</p>
        </Container>
      </Section>
    </>
  )
}
