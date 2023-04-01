import Container from './Container'
import cx from 'clsx'

export default function Section({ children, title, className }) {
  return (
    <section className={cx('Section relative my-14', className)}>
      {title && (
        <Container>
          <h2 className='text-4xl mb-4'>{title}</h2>
        </Container>
      )}
      {children}
    </section>
  )
}
