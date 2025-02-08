import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FlowDiagram from '../../components/service/FlowDiagram'
import Price from '../../components/service/app/Price'
import ServiceCards from '../../components/service/Cards'
import PageHeader from '../../components/service/ServiceHeader'

const apps = [
  {
    title: "ECアプリ",
    description: "商品の閲覧から購入までスムーズに行えるECアプリを開発します。",
  },
  {
    title: "予約アプリ",
    description: "直感的な操作で予約が可能なアプリを開発します。",
  },
  {
    title: "SNSアプリ",
    description: "コミュニケーションを促進するSNSアプリを開発します。",
  },
  {
    title: "タスク管理アプリ",
    description: "業務の効率化をサポートするタスク管理アプリを提供します。",
  },
  {
    title: "健康管理アプリ",
    description: "ユーザーの健康状態を記録し、管理をサポートするアプリを開発します。",
  },
  {
    title: "教育アプリ",
    description: "学習を支援し、ユーザーのスキル向上を目的とした教育アプリを提供します。",
  },
  {
    title: "ゲームアプリ",
    description: "エンターテインメント性の高いゲームアプリを制作します。",
  },
  {
    title: "フィットネスアプリ",
    description: "運動記録やトレーニングをサポートするフィットネスアプリを開発します。",
  },
  {
    title: "動画配信アプリ",
    description: "オンデマンド動画を視聴できるアプリを開発します。",
  },
  {
    title: "天気予報アプリ",
    description: "リアルタイムで天気情報を提供するアプリを構築します。",
  },
  {
    title: "ナビゲーションアプリ",
    description: "地図や経路案内を提供する高機能なナビゲーションアプリを開発します。",
  },
  {
    title: "金融アプリ",
    description: "資産管理や取引をスムーズに行える金融アプリを開発します。",
  },
]

export default function AppPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* ページヘッダー */}
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <PageHeader currentPage="APP開発" serviceName="APP開発" />
            <p className="text-base text-gray-400 max-w-2xl mt-4">
              iOS・Android向けのスマートフォンアプリ開発を承ります。直感的なUI設計と安定した動作で、ユーザー満足度の高いアプリを提供します。
            </p>
          </div>
        </section>

        {/* 開発例セクション */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-bold mb-8 text-white">開発例</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 開発例を表示 */}
              {apps.map((app, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg text-sm flex flex-col justify-between"
                >
                  <h3 className="text-base font-bold mb-2 text-white">{app.title}</h3>
                  <p className="text-gray-400">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FlowDiagramセクション */}
        <section className="bg-gray-900 py-16">
          <FlowDiagram />
        </section>

        <section className="bg-gray-900 py-16">
        <Price />
        </section>

        {/* ServiceCardsセクション */}
        <section className="bg-gray-800 py-16">
          <ServiceCards />
        </section>

      </main>

      {/* フッター */}
      <Footer />
    </div>
  )
}
