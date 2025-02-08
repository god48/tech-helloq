export default function CompanyInfo() {
  const companyDetails = [
    {label: '開発経験', value: '5年強'},
    // { label: '会社名', value: '株式会社TECH WORLD', subValue: '(TECH WORLD Inc.)' },
    // { label: '設立', value: '2022年3月24日' },
    // { label: '所在地', value: '〒150-0043', subValue: '東京都渋谷区道玄坂5-13-1\n渋谷マークシティ W25F' },
    // { label: '資本金', value: '1,000万円' },
    // { label: '顧問弁護士', value: 'TECH GOAT PARTNERS法律事務所', subValue: '代表弁護士 新井 考樹' },
    { label: '事業内容', value: 'HP制作、Webシステム、モバイルアプリ（iOS/Android）、AI を活用したシステムやアプリのコンサルティング、設計、開発、保守運用' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">COMPANY</h2>
        <div className="space-y-8">
          {companyDetails.map((detail, index) => (
            <div key={index} className="border-b border-gray-800 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="font-bold">{detail.label}</div>
                <div className="md:col-span-3">
                  <div>{detail.value}</div>
                  {/* {detail.subValue && (
                    <div className="text-gray-400 mt-1">{detail.subValue}</div>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}