import cx from 'clsx'
export default function Container({ children, className }) {
  return (
    <div className={cx('Container mx-auto max-w-2xl px-6 mobile:px-7', className)}>{children}</div>
  )
}
