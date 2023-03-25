import cx from 'clsx'
export default function Link({ children, href, secondary = false }) {
  const baseCx = cx(
    'inline-block',
    'my-4',
    'py-2.5',
    'px-4',

    'text-center',
    'rounded-full',
    { 'bg-white': !secondary },

    'text-md',
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
