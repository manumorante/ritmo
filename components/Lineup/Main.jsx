import { LINEUP } from 'public/data'

const main = LINEUP.filter((artist) => artist.level === 2)

export default function Main() {
  return (
    <div className='Main flex flex-col gap-2'>
      {main.map((artist) => (
        <div className='text-4xl font-extrabold leading-none' key={artist.id}>
          {artist.name}
        </div>
      ))}
    </div>
  )
}
