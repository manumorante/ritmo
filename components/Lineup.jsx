import { LINEUP } from 'public/data'

export default function Lineup() {
  return (
    <ul>
      {LINEUP.map((artist) => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ul>
  )
}
