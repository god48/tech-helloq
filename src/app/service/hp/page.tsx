import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FlowDiagram from '../../components/service/FlowDiagram'
import Price from '../../components/service/hp/Price'
import Cards from '../../components/service/Cards'
import PageHeader from '../../components/service/ServiceHeader'

const 制作例 = [
  {
    title: "医療機関サイト",
    description: "クリニックや病院の情報をわかりやすく伝えるWebサイトを制作します。",
  },
  {
    title: "教育機関サイト",
    description: "学校や塾などの教育機関向けに特化した情報サイトを提供します。",
  },
  {
    title: "非営利団体サイト",
    description: "非営利団体の活動内容を効果的に伝えるシンプルなデザインを提供。",
  },
  {
    title: "スポーツクラブサイト",
    description: "会員登録や活動紹介をスムーズに行えるスポーツクラブサイトを制作します。",
  },
  {
    title: "イベント告知サイト",
    description: "イベント情報をわかりやすくまとめ、参加者を促すサイトを構築します。",
  },
  {
    title: "不動産情報サイト",
    description: "物件情報を簡単に検索できる、不動産会社向けのWebサイトを制作します。",
  },
  {
    title: "製品カタログサイト",
    description: "商品の詳細情報をわかりやすく掲載したカタログサイトを構築します。",
  },
  {
    title: "多言語対応サイト",
    description: "海外のユーザーにも対応した、多言語対応のWebサイトを提供します。",
  },
  {
    title: "飲食店メニューサイト",
    description: "メニューの魅力を最大限に伝え、予約機能も統合した飲食店向けサイトを提供します。",
  },
]

export default function HPPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <PageHeader currentPage="HP作成" serviceName="HP作成" />
            <p className="text-lg text-gray-400 mt-8 max-w-2xl">
              ホームページ作成サービスを通じて、企業や商品の魅力を最大限に引き出します。
              ユーザー視点に立ったデザインと使いやすさを重視し、ビジネスの成長を支援するWebサイトを制作します。
            </p>
          </div>
        </section>

        {/* 制作例 Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-left mb-12">制作例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {制作例.map((item, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow Diagram */}
        <section className="bg-gray-900 py-16">
          <FlowDiagram />
        </section>

        <section className="bg-gray-900 py-16">
        <Price />
        </section>

        {/* Cards Section */}
        <section className="py-20 bg-gray-900">
          <Cards />
        </section>
      </main>
      <Footer />
    </div>
  )
}
