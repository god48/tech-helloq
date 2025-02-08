import Image from 'next/image'

export default function CeoMessage() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">MESSAGE</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            {/* <Image
              src="/placeholder.svg?height=400&width=300"
              alt="CEO"
              width={300}
              height={400}
              className="rounded-lg"
            /> */}
          </div>
          <div className="md:w-2/3">
            <p className="mb-6">
              私は小学校時代から数学と小さな方法で社会を良くしようと思って色々挑戦出来る事を探求しておりませんでした。大学受験後にプログラミングと出会い、IT な学部、場所、回路する関係なく挑戦出来ることに魅力を感じプログラミングを学びエンジニアになりました。
            </p>
            <p className="mb-6">
              エンジニアとして働く中で面白いメンバーと面白いサービスを作りたいという気持ちが強くなり株式会社TECH WORLDを設立いたしました。一緒に世界をHackするようなサービスを作りましょう。
            </p>
            <p className="text-right mt-8">
              {/* 代表取締役 金子 遼 */}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}