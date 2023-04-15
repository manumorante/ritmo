import cx from 'clsx'

export default function Lineup() {
  const mainCx = cx(
    //
    'Lineup',
    'Section',
    'p-[10%]',
    'bg-white'
  )

  return (
    <section className={mainCx}>
      <h3>Lineup</h3>

      <ul>
        <li>Andre VII</li>
        <li>Audrey Danza</li>
        <li>Baldo</li>
        <li>Belaria</li>
        <li>Chinaski</li>
        <li>Cobertizo</li>
        <li>Dalila</li>
        <li>Daniel Kelsan</li>
        <li>Durand</li>
        <li>Erol Alkan</li>
        <li>Identified Patient</li>
        <li>Interstellar Funk</li>
        <li>JackWasFaster (live)</li>
        <li>Javi Redondo</li>
        <li>Local Suicide</li>
        <li>Masa Soundsystem</li>
        <li>Naone</li>
        <li>Oma Totem (live)</li>
        <li>Rey Colino</li>
        <li>Sama Yax</li>
        <li>Undo (live)</li>
      </ul>
    </section>
  )
}
