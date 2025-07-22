import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Progress } from '@/components/ui/Progress'

interface CourseCardProps {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  totalVideos: number
  totalDuration: string
  instructor: string
  price: string
  progress?: number
}

export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  category,
  totalVideos,
  totalDuration,
  instructor,
  price,
  progress = 0,
}) => {
  return (
    <Link href={`/courses/${id}`}>
      <Card hover className="h-full overflow-hidden group cursor-pointer animate-fadeIn">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge variant="primary" className="absolute top-4 left-4 z-20">
            {category}
          </Badge>
        </div>
        
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium">{instructor}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">{totalVideos}本</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">{totalDuration}</span>
              </div>
            </div>
          </div>

          {progress > 0 && (
            <Progress value={progress} size="sm" showLabel />
          )}

          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">{price}</span>
              <span className="text-sm text-gray-500">月額</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}