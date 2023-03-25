import cx from 'clsx'
import Item from './Item'

export default function Moments({ children }) {
  const contentCx = cx(
    //
    'flex',
    'gap-4',
    'snap-x',
    'overflow-x-auto',
    'py-5 px-4'
  )
  return <div className={contentCx}>{children}</div>
}

Moments.Item = Item
