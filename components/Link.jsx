import cx from 'clsx'
export default function Link({ children, href, secondary = false }) {
  const baseCx = cx(
    'inline-block',
    { 'py-3 px-6': !secondary },
    { 'py-4 px-4': secondary },

    'text-lg',
    'font-medium',

    'text-center',
    'rounded-full',
    { 'text-white bg-gradient-to-r from-purple-400 via-rose-400 to-rose-300': !secondary },
    { 'text-gray-600 bg-white/50': secondary },

    'shadow-sm',
    'ring-2',
    'ring-inset',
    'ring-white/50'
  )
  return (
    <a href={href} className={baseCx}>
      {children}
    </a>
  )
}
