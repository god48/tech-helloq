import { Metadata } from 'next'
import NewsFull from '../components/news-full'

export const metadata: Metadata = {
  title: 'News | TECH INNOVATION',
  description: 'Latest news and updates from TECH INNOVATION',
}

export default function NewsPage() {
  return <NewsFull />
}
