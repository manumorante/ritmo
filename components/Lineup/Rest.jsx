import { LINEUP } from 'public/data'

const rest = LINEUP.filter((artist) => artist.level === 3)

export default function Main() {
  return (
    <div className='Rest'>
      {rest.map((artist) => (
        <div className='text-3xl font-medium leading-none' key={artist.id}>
          {artist.name}
        </div>
      ))}
    </div>
  )
}
