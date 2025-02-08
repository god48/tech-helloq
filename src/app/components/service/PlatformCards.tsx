import { type LucideIcon } from 'lucide-react'

type Platform = {
  icon: LucideIcon
  title: string
  description: string
}

type PlatformCardsProps = {
  platforms: Platform[]
}

export default function PlatformCards({ platforms }: PlatformCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {platforms.map((platform, index) => (
        <div key={index} className="p-6 border border-zinc-700 rounded-lg">
          <platform.icon className="w-12 h-12 mb-6" />
          <h3 className="text-xl font-bold mb-4">{platform.title}</h3>
          <p className="text-gray-400">{platform.description}</p>
        </div>
      ))}
    </div>
  )
}

