import Link from 'next/link'

type PageHeaderProps = {
  currentPage: string
  serviceName: string
}

export default function PageHeader({ currentPage, serviceName }: PageHeaderProps) {
  return (
    <div className="mt-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 mt-4">
          <Link href="/" className="hover:text-white">
            HOME
          </Link>
          <span>{'>'}</span>
          <Link href="/service" className="hover:text-white">
            SERVICE
          </Link>
          <span>{'>'}</span>
          <span className="text-white">{serviceName}</span>
        </div>
      {/* <h2 className="text-[80px] font-bold opacity-20">{serviceName}</h2> */}
      <h2 className="text-3xl font-bold mt-8">{currentPage}</h2>
    </div>
  )
}
