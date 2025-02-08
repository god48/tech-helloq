import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceCards from '../components/service/Cards'
import Link from 'next/link'

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-[40px] font-bold mb-4 opacity-20">SERVICE</h2>
            <ServiceCards />
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-red-500">開発の流れ</h2>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
            <p className="text-gray-400 mb-8">
              Webサービスアプリ開発のご相談、見積もり！<br />
              お客様の課題解決のため、まずはお気軽にご相談ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-40 h-40 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

