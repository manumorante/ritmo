import Container from './Container'

export default function Section({ children, title }) {
  return (
    <section className='Section my-12'>
      {title && (
        <Container>
          <h2 className='text-2xl font-light'>{title}</h2>
        </Container>
      )}
      {children}
    </section>
  )
}
