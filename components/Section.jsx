export default function Section({ children, title }) {
  return (
    <section className='Section my-8'>
      {title && <h2 className='text-2xl font-light'>{title}</h2>}
      {children}
    </section>
  )
}
