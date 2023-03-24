import { INFO, LINEUP } from 'public/data'

export default function Page() {
  return (
    <div className='Page'>
      <h1 className='Name'>{INFO.title.value}</h1>

      <time className='Date' dateTime={INFO.date.value}>
        {INFO.date.long}
      </time>

      <address className='Location'>{INFO.location.value}</address>

      <ul>
        {LINEUP.map((artist) => (
          <li key={artist.id}>
            <div className='Artist'>{artist.name}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
