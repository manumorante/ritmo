'use client'

import { META } from 'public/data'

import { Parallax } from 'react-scroll-parallax'
import cx from 'clsx'
import Image from 'next/image'

import Lineup from 'components/Lineup'
import Section from 'components/Section'
import Link from 'components/Link'
import Container from 'components/Container'
import Cards from 'components/Cards'
import Moments from 'components/Moments'

export default function Page() {
  const shadowCx = cx('absolute -z-10 top-[-5%] right-[-20%] w-full h-[140%] opacity-60')

  const numberDotCx = cx(
    'flex shrink-0 justify-center items-center text-center rounded-full bg-white shadow w-14 h-14 mr-4 text-4xl'
  )

  const parallaxDisabled = false

  return (
    <>
      <Container>
        <Image
          className='fixed top-8 w-44 h-auto'
          src='/ritmo-logo.png'
          width={300}
          height={100}
          alt='RITMO logo'
          loading='eager'
        />

        <Parallax opacity={[2, 0.5]} className={cx('fixed top-28')} disabled={parallaxDisabled}>
          <span className='text-2xl'>Paraje Ermita de los Tres Juanes</span>
          <div className='text-2xl font-extrabold'>5 y 6 de mayo 2023</div>
        </Parallax>

        <Parallax
          speed={15}
          className='fixed top-0 h-screen flex justify-center items-center'
          disabled={parallaxDisabled}>
          <Image src='/motion.png' width={462} height={489} alt='BG' />
        </Parallax>
      </Container>

      <Section>
        <Container>
          <Parallax
            style={{ marginTop: '90vh' }}
            className='flex justify-center'
            disabled={parallaxDisabled}>
            <Lineup>
              <Lineup.Head />
              <Lineup.Main />
              <Lineup.Rest />

              <div className='mt-8 flex gap-4 flex-col tablet:flex-row'>
                <Link href={META.tickets.url}>Comprar entradas</Link>
                {/* <Link secondary href={'#'}>
                Abonos
              </Link> */}
              </div>
            </Lineup>
          </Parallax>
        </Container>

        {/* <Image
          className={cx('absolute -z-10 top-[-5%] right-[-10%] w-full h-[140%] opacity-30')}
          src='/bg.png'
          width={1712}
          height={828}
          alt='Efecto sombra'
        /> */}
      </Section>

      <Section>
        <Moments>
          <Moments.Item>
            <Image src='/moments/1.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
          <Moments.Item>
            <Image src='/moments/2.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
          <Moments.Item>
            <Image src='/moments/3.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
          <Moments.Item>
            <Image src='/moments/4.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
          <Moments.Item>
            <Image src='/moments/5.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
          <Moments.Item>
            <Image src='/moments/6.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
          <Moments.Item>
            <Image src='/moments/7.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
          <Moments.Item>
            <Image src='/moments/8.jpg' width={1080} height={1080} alt='Momento' />
          </Moments.Item>
        </Moments>
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

      <Section>
        <Cards>
          <Cards.Item>
            <div className='text-3xl font-extrabold'>Bus</div>
            <div className='text-3xl'>Ida y vuelta </div>
            <div className='text-3xl'>2€ trayecto</div>
            <div className='mt-4 text-lg leading-none'>Sale del C.C. Neptuno. Sin reserva</div>
          </Cards.Item>

          <Cards.Item>
            <div className='text-3xl font-extrabold'>Parking</div>
            <div className='text-3xl'>Reserva con tu bono</div>
            <div className='mt-4 text-lg leading-none'>Amplio</div>
          </Cards.Item>

          <Cards.Item>
            <div className='text-3xl font-extrabold'>Ventaja</div>
            <div className='text-3xl'>Alguna otra ventaja que me invente</div>
            <div className='mt-4 text-lg leading-none'>Tu verás</div>
          </Cards.Item>

          <Cards.Item>
            <div className='text-3xl font-extrabold'>Y algo más largo de título</div>
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

      <Section title=''>
        <Container>
          <p>RIT/MO 2023</p>
        </Container>
      </Section>
    </>
  )
}
