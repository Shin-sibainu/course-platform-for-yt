'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  className?: string
}

export const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({
  videoId,
  title,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handlePlay = () => {
    setIsLoaded(true)
  }

  if (isLoaded) {
    return (
      <div className={`relative pb-[56.25%] ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className={`relative pb-[56.25%] cursor-pointer group ${className}`} onClick={handlePlay}>
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`${title} - YouTube thumbnail`}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-200 rounded-lg">
        <div className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full p-4 shadow-lg">
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      {/* YouTube logo */}
      <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
        YouTube
      </div>
    </div>
  )
}