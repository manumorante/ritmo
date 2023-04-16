import cx from 'clsx'
import Image from 'next/image'

export default function Location() {
  const sectionCx = cx('Location section')
  const pileCx = cx('Pile flex flex-col items-center justify-center')
  const polaroidCx = cx(
    'Polaroid absolute left-1/2 -translate-y-1/2 w-64 h-80 inline-block p-4 bg-white rounded-sm shadow-md hover:!z-[1002] hover:shadow-2xl hover:scale-125 touch-manipulation:scale-125 hover:!rotate-0 transition-all duration-500'
  )
  const imgCx = cx('Img w-full h-auto aspect-square object-cover rounded-sm')

  return (
    <section className={sectionCx}>
      <div className={pileCx}>
        {[...Array(6)].map((_, index) => (
          <div className='relative w-52 h-64' key={index}>
            <div
              className={cx(polaroidCx, '-translate-x-3/4')}
              style={{ transform: `rotate(${Math.random() * 40 - 20}deg)` }}>
              <Image
                className={imgCx}
                width={300}
                height={300}
                src={`https://picsum.photos/300?random=${index}`}
                alt='Imagen'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
