import cx from 'clsx'
export default function Item({ children }) {
  return (
    <div
      className={cx(
        // Scroll snap
        'snap-proximity shrink-0',
        'w-64 h-60',
        'py-7 px-6',
        'bg-white',
        'rounded-lg',
        'shadow-lg'
      )}>
      {children}
    </div>
  )
}
