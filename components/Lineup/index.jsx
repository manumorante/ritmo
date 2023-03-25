import Head from './Head'
import Main from './Main'
import Rest from './Rest'

function Lineup({ children }) {
  return <div className='Lineup flex flex-col gap-2'>{children}</div>
}

Lineup.Head = Head
Lineup.Main = Main
Lineup.Rest = Rest

export default Lineup
