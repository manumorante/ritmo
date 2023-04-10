import cx from 'clsx'

export default function Section({ children, className }) {
  const mainCx = cx(
    //
    'Section',
    'h-[80vh]',

    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    className
  )
  return <section className={mainCx}>{children}</section>
}
