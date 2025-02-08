import Header from '../components/Header'
import AboutHero from '../components/about/AboutHero'
import CompanyInfo from '../components/about/CompanyInfo'
import CeoMessage from '../components/about/CeoMessage'
// import ImageSlider from '../components/about/ImageSlider'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <AboutHero />
      {/* <ImageSlider /> */}
      <CompanyInfo />
      <CeoMessage />
      <Footer />
    </main>
  )
}