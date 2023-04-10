import cx from 'clsx'
import Image from 'next/image'

export default function Location() {
  const mainCx = cx(
    //
    'Location',
    'w-full h-[50vh]',
    'object-cover'
  )

  return (
    <Image
      className={mainCx}
      src={'/ermita2.jpg'}
      width={828}
      height={593}
      alt='Ermita de los Tres Juanes'
    />
  )
}
