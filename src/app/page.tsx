import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
// import News from './components/News'
// import Recruit from './components/Recruit'
// import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        {/* <News />
        <Recruit /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}
