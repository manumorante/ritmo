import Container from './Container'
import cx from 'clsx'

export default function Section({ children, title, className }) {
  return (
    <section className={cx('Section relative my-12', className)}>
      {title && (
        <Container>
          <h2 className='text-2xl font-light'>{title}</h2>
        </Container>
      )}
      {children}
    </section>
  )
}
