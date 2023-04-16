import Header from 'components/Header'
import { Home, What, What2, Location, Past, Lineup, Info } from 'sections'
import Buy from 'sections/Buy'
import Footer from 'sections/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <What />
      <Location />
      <Buy />
      <What2 />
      <Past />
      <Lineup />
      <Info />
      <Footer />
    </>
  )
}
