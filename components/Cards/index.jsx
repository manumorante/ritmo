import cx from 'clsx'
import Item from './Item'

export default function Cards({ children }) {
  const contentCx = cx(
    //
    'flex',
    'gap-6',
    'snap-x',
    'overflow-x-auto',
    'py-5 px-8'
  )
  return <div className={contentCx}>{children}</div>
}

Cards.Item = Item
