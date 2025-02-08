'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ImageSlider() {
  const images = [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden h-[400px]">
      <div className="flex transition-transform duration-500 ease-in-out h-full"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`Office image ${index + 1}`}
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}