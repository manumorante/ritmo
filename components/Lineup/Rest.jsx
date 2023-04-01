import { LINEUP } from 'public/data'

const rest = LINEUP.filter((artist) => artist.level === 3)

export default function Main() {
  return (
    <div className='Rest flex flex-col gap-2'>
      {rest.map((artist) => (
        <div className='text-3xl font-extrabold leading-none' key={artist.id}>
          {artist.name}
        </div>
      ))}
    </div>
  )
}
