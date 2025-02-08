import Link from 'next/link'
import { Monitor, Database, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

const services: Service[] = [
  {
    icon: Monitor,
    title: 'ホームページ制作',
    description: '最新のWeb技術とデザインで、お客様のビジネスの価値を最大限に引き出すホームページを制作。スマートフォン対応やSEO対策も万全です。',
    link: '/service/hp',
  },
  {
    icon: Database,
    title: 'Webシステム開発',
    description: 'お客様の業務効率を向上させる管理システムや、顧客向けWebアプリケーションの開発を行います。要件定義から運用まで一貫してサポート。',
    link: '/service/web',
  },
  {
    icon: Smartphone,
    title: 'アプリ開発',
    description: 'iOS・Android向けのスマートフォンアプリ開発を承ります。使いやすいUIと安定した動作で、ユーザー満足度の高いアプリを提供します。',
    link: '/service/app',
  },
]

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
      {services.map((service, index) => (
        <Link href={service.link} key={index} className="group">
          <div className="bg-zinc-900 p-8 rounded-lg transition-transform transform hover:scale-105">
            <service.icon className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

