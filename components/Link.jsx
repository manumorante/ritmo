import cx from 'clsx'
export default function Link({ children, href, secondary = false }) {
  const baseCx = cx(
    'inline-block',
    'py-4',
    'px-4',

    'text-center',
    'rounded-full',
    { 'bg-white': !secondary },

    'text-lg',
    'font-semibold',
    'text-gray-900',

    'shadow-sm',
    'ring-2',
    'ring-inset',
    'ring-white'
  )
  return (
    <a href={href} className={baseCx}>
      {children}
    </a>
  )
}
