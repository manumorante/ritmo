import { LINEUP } from 'public/data'

const main = LINEUP.filter((artist) => artist.level === 2)

export default function Main() {
  return (
    <div className='Main'>
      {main.map((artist) => (
        <div className='text-4xl font-semibold leading-none' key={artist.id}>
          {artist.name}
        </div>
      ))}
    </div>
  )
}
