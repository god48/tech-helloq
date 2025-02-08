import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  const menuItems = ['HOME', 'ABOUT', 'SERVICE', 'CONTACT']
  const socialIcons = [
    { Icon: MessageCircle, href: '#', label: 'Line' },
    { Icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ), href: '#', label: 'X (Twitter)' },
    { Icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ), href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            {/* <Link href="/" className="text-2xl font-bold flex items-center">
              <img src="/placeholder.svg?height=40&width=40" alt="" className="mr-2 h-10 w-10" />
              TECH INNOVATION
            </Link> */}
          </div>
          <div className="flex justify-between w-full md:w-auto mt-8 md:mt-0">
            <div className="mr-12">
              <div className="border-t border-gray-700 pt-4 mb-4">
                <h3 className="text-lg font-semibold mb-4">MENU</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                      className="hover:text-gray-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="border-t border-gray-700 pt-4 mb-4">
                <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
              </div>
              <div className="flex space-x-4">
                {socialIcons.map(({ Icon, href, label }, index) => (
                  <a key={index} href={href} className="text-white hover:text-gray-300" aria-label={label}>
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p className="mb-2">© TECH INNOVATION Corporation. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
