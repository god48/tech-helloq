import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Recruit() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-500">RECRUIT</h2>
        <h3 className="text-6xl font-bold mb-8">JOIN TECH INNOVATION</h3>
        <p className="mb-8 text-lg">
          TECH INNOVATIONではインターン、業界未経験からのポテンシャル採用、中途採用と幅広くご用意しております。挑戦を恐れず積極的に事業を推し進めていける方を募集しております。
        </p>
        <p className="mb-12 text-lg">
          チャレンジしたい方は是非お待ちしております。
        </p>
        <Link 
          href="/recruit" 
          className="inline-flex items-center text-lg font-semibold text-white hover:text-red-500 transition-colors"
        >
          採用について
          <ArrowUpRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}