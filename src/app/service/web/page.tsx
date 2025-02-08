import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FlowDiagram from '../../components/service/FlowDiagram'
import ServiceCards from '../../components/service/Cards'
import PageHeader from '../../components/service/ServiceHeader'
import Price from '../../components/service/web/Price'

const systems = [
  {
    title: "WEB会員サービス",
    description: "ユーザー登録や管理を簡単に行える会員サービスを提供します。",
  },
  {
    title: "サブスクシステム",
    description: "定期購入やサブスクリプション型サービスを効率的に運用します。",
  },
  {
    title: "メディアシステム",
    description: "情報配信やコンテンツ管理が可能なメディアシステムを構築します。",
  },
  {
    title: "シュミレーションシステム",
    description: "多様なシナリオを再現し、分析・計画を支援するシステムを提供します。",
  },
  {
    title: "CtoCプラットフォーム",
    description: "ユーザー間の取引を安全かつ効率的に行えるプラットフォームを構築します。",
  },
  {
    title: "不動産ポータルサイト",
    description: "不動産の情報を一元管理し、物件検索を効率化するポータルサイトを開発します。",
  },
  {
    title: "求人ポータルサイト",
    description: "企業と求職者を繋ぐ求人情報プラットフォームを構築します。",
  },
  {
    title: "インフラ構築",
    description: "システム全体の基盤を設計・構築し、安定した運用を実現します。",
  },
  {
    title: "業務基幹システム",
    description: "企業の業務効率を向上させる基幹システムを開発します。",
  },
  {
    title: "顧客管理システム",
    description: "顧客情報を一元管理し、営業活動をサポートします。",
  },
  {
    title: "勤怠システム",
    description: "従業員の勤怠管理を効率化し、正確な記録を提供します。",
  },
  {
    title: "物流システム",
    description: "物流の追跡や管理をスムーズに行えるシステムを構築します。",
  },
  {
    title: "営業管理システム",
    description: "営業活動の状況を可視化し、管理を効率化します。",
  },
  {
    title: "予約管理システム",
    description: "予約受付や管理を簡単に行えるシステムを提供します。",
  },
  {
    title: "アンケートシステム",
    description: "ユーザーからのフィードバックを収集・分析できるアンケートシステムを開発します。",
  },
]

export default function SystemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* ページヘッダー */}
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <PageHeader currentPage="Webシステム開発" serviceName="Webシステム開発" />
            <p className="text-base text-gray-400 max-w-2xl mt-4">
              お客様の業務効率を向上させる管理システムや、顧客向けWebアプリケーションの開発を行います。要件定義から運用まで一貫してサポート。
            </p>
          </div>
        </section>

        {/* 開発例セクション */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-bold mb-8 text-white">開発例</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 開発例を表示 */}
              {systems.map((system, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg text-sm flex flex-col justify-between"
                >
                  <h3 className="text-base font-bold mb-2 text-white">{system.title}</h3>
                  <p className="text-gray-400">{system.description}</p>
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
