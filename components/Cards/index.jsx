import cx from 'clsx'
import Item from './Item'

export default function Cards({ children }) {
  const contentCx = cx(
    //
    'flex',
    'gap-4',
    'snap-x',
    'overflow-x-auto',
    'py-5 px-6'
  )
  return <div className={contentCx}>{children}</div>
}

Cards.Item = Item
