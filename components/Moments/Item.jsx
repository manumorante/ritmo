import cx from 'clsx'
export default function Item({ children }) {
  return (
    <div
      className={cx(
        // Scroll snap
        'snap-proximity shrink-0',
        'w-[90%] h-auto',
        'bg-white/50',
        'ring-2 ring-white',
        'overflow-hidden',
        'rounded-lg',
        'shadow-lg'
      )}>
      {children}
    </div>
  )
}
