import Link from 'next/link'

export default function Contact() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/3">
            <h2 className="text-5xl font-bold mb-8">Let's Have a Conversation!</h2>
            <p className="text-lg mb-8">
              Webサービスやアプリ開発のご相談、協業パートナーや取材などその他のお問い合わせはこちらから。
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Link href="/contact" className="bg-white text-black rounded-full w-48 h-48 flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-10">
        <img src="/placeholder.svg?height=600&width=600" alt="World Map" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}