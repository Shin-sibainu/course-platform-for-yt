'use client'

import React from 'react'
import { Video } from '@/types/course'
import { cn } from '@/lib/utils'

interface VideoListProps {
  videos: Video[]
  currentVideo: Video | null
  onVideoSelect: (video: Video) => void
  completedVideos?: string[]
}

export const VideoList: React.FC<VideoListProps> = ({
  videos,
  currentVideo,
  onVideoSelect,
  completedVideos = [],
}) => {
  return (
    <div className="space-y-1">
      {videos.map((video, index) => {
        const isCompleted = completedVideos.includes(video.id)
        const isCurrent = currentVideo?.id === video.id
        
        return (
          <button
            key={video.id}
            onClick={() => onVideoSelect(video)}
            className={cn(
              'w-full text-left p-4 rounded-lg transition-all duration-200 group',
              isCurrent
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'hover:bg-gray-50 border-2 border-transparent'
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div
                  className={cn(
                    'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors',
                    isCompleted
                      ? 'bg-emerald-500 border-emerald-500'
                      : isCurrent
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 group-hover:border-gray-400'
                  )}
                >
                  {isCompleted ? (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : isCurrent ? (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  ) : (
                    <span className="text-xs text-gray-500">{index + 1}</span>
                  )}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className={cn(
                  'font-medium line-clamp-2',
                  isCurrent ? 'text-blue-900' : 'text-gray-900'
                )}>
                  {video.title}
                </h4>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                  <span>{video.duration}</span>
                  {isCurrent && (
                    <span className="text-blue-600 font-medium">再生中</span>
                  )}
                </div>
              </div>
              
              {isCurrent && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}