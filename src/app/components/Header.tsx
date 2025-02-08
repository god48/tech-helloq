import Link from 'next/link'
import names from "../names";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-xl">
            TECH INNOVATION
            {names.about}
          </Link>
          <nav className="flex space-x-8">
            {['HOME', 'ABOUT', 'SERVICE', 'CONTACT'].map((item) => (
              <Link
                key={item}
                href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-gray-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
