'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface NewsItem {
  date: string
  title: string
  image: string
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news')
        if (!response.ok) {
          throw new Error(`News HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setNewsItems(data.slice(0, 3))
      } catch (error) {
        console.error('Failed to fetch news:', error)
        setError('Newsニュースの取得に失敗しました。後でもう一度お試しください。')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-red-500">NEWS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-700 h-48 w-full mb-4"></div>
                <div className="h-4 bg-gray-700 w-24 mb-4"></div>
                <div className="h-4 bg-gray-700 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-red-500">NEWS</h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-red-500">NEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="relative">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm">
                NEWS
              </div>
              <div className="mt-4">
                <span className="text-gray-400 text-sm">{item.date}</span>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
          >
            <span>NEWSをもっと見る</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
