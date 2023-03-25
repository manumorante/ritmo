import { LINEUP } from 'public/data'

const artist = LINEUP.filter((artist) => artist.level === 1)[0]

export default function Lineup() {
  return (
    <div className='text-7xl font-bold leading-[0.8]' key={artist.id}>
      {artist.name}
    </div>
  )
}
