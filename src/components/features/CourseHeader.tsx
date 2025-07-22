import React from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface CourseHeaderProps {
  title: string
  description: string
  category: string
  instructor: string
  totalVideos: number
  totalDuration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({
  title,
  description,
  category,
  instructor,
  totalVideos,
  totalDuration,
  level,
  tags,
}) => {
  const levelText = {
    beginner: '初級',
    intermediate: '中級',
    advanced: '上級',
  }

  const levelColor = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'danger',
  } as const

  return (
    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="primary" className="bg-white/20 text-white border-white/30">
              {category}
            </Badge>
            <Badge variant={levelColor[level]} className="bg-white/20 text-white border-white/30">
              {levelText[level]}
            </Badge>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg lg:text-xl text-white/90 mb-6">{description}</p>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">V</span>
              </div>
              <span>{instructor}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{totalVideos}本の動画</span>
            </div>
            
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{totalDuration}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              今すぐ受講を始める
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              お気に入りに追加
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}