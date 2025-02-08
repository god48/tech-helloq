import Link from 'next/link'

type Step = {
  step: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    step: 1,
    title: 'ヒアリング',
    description: 'お客様のビジネス成功のゴールを理解したうえで、システム開発の目的や将来性をヒアリングします。'
  },
  {
    step: 2,
    title: 'ご提案',
    description: 'ヒアリングの内容を基に、課題とご要望を整理し、最適なご提案をさせていただきます。'
  },
  {
    step: 3,
    title: 'ご契約',
    description: 'ご提示した要見積や開発仕様にご合意いただきましたら、ご契約を締結させていただきます。'
  },
  {
    step: 4,
    title: '開発開始',
    description: '技術のエスカレートが0%な社内で開発を進めます。'
  },
  {
    step: 5,
    title: 'テスト',
    description: '専門のチームによるテストを実施し、品質向上に努めます。'
  },
  {
    step: 6,
    title: '納品・運用',
    description: 'システムは納品してからがスタートです。お客様のビジネスをより成長させるために運用をサポートします。'
  }
]

export default function FlowDiagram() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-red-500 text-2xl font-bold mb-2">開発の流れ</h2>
        <p className="text-sm text-gray-400 mb-16">ご依頼から納品までの流れ</p>

        <div className="relative max-w-6xl mx-auto">
          {/* 左側のカラム */}
          <div className="space-y-24 relative z-10 w-1/2 pr-12">
            {[1, 3, 5].map((stepNum) => {
              const step = steps.find(s => s.step === stepNum)!
              return (
                <div key={stepNum} className="border border-zinc-800 p-6 rounded-lg bg-black">
                  <div className="flex items-start gap-4">
                    <div>
                      <span className="text-sm font-bold block mb-2">STEP {step.step}</span>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 右側のカラム - pl-24を削除し、右寄せに変更 */}
          <div className="absolute top-12 right-0 space-y-24 w-1/2 pl-10">
            {[2, 4, 6].map((stepNum) => {
              const step = steps.find(s => s.step === stepNum)!
              return (
                <div key={stepNum} className="border border-zinc-800 p-6 rounded-lg bg-black ml-auto mr-8">
                  <div className="flex items-start gap-4">
                    <div>
                      <span className="text-sm font-bold block mb-2">STEP {step.step}</span>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 接続線とマーカー - 位置とviewBoxを調整 */}
          <svg className="absolute top-8 left-1/2 w-24 h-[calc(100%-2rem)] -translate-x-1/2" viewBox="0 0 100 600" preserveAspectRatio="none">
            <defs>
              <marker
                id="arrow"
                markerWidth="6"
                markerHeight="6"
                refX="6"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 6 3, 0 6" fill="#ff0000" />
              </marker>
            </defs>
            <line 
              x1="0" y1="40" 
              x2="100" y2="140" 
              stroke="#ff0000" 
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <line 
              x1="100" y1="140" 
              x2="0" y2="260" 
              stroke="#ff0000" 
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <line 
              x1="0" y1="260" 
              x2="100" y2="380" 
              stroke="#ff0000" 
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <line 
              x1="100" y1="380" 
              x2="0" y2="500" 
              stroke="#ff0000" 
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
            <line 
              x1="0" y1="500" 
              x2="100" y2="600" 
              stroke="#ff0000" 
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          </svg>
        </div>

        {/* お問い合わせセクション */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-gray-400 mb-12">
            Webサービスやアプリ開発のご相談、協業パートナーや取材など<br />
            その他のお問い合わせはこちらから。
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center w-40 h-40 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  )
}

