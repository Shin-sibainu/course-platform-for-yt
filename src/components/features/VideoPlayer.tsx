'use client'

import React from 'react'
import { Video } from '@/types/course'
import { YouTubeFacade } from './YouTubeFacade'

interface VideoPlayerProps {
  video: Video
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
      <YouTubeFacade 
        videoId={video.youtubeId}
        title={video.title}
      />
      
      <div className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h2>
        <p className="text-gray-600">{video.description}</p>
        
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{video.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}