'use client'

import React, { useState } from 'react'
import { Section, Video } from '@/types/course'
import { VideoList } from './VideoList'
import { cn } from '@/lib/utils'
import { Progress } from '@/components/ui/Progress'

interface CurriculumProps {
  sections: Section[]
  currentVideo: Video | null
  onVideoSelect: (video: Video) => void
  completedVideos?: string[]
}

export const Curriculum: React.FC<CurriculumProps> = ({
  sections,
  currentVideo,
  onVideoSelect,
  completedVideos = [],
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sections.map(s => s.id) // 初期状態で全て展開
  )

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  // 全体の進捗を計算
  const totalVideos = sections.reduce((acc, section) => acc + section.videos.length, 0)
  const completedCount = completedVideos.length
  const progressPercentage = totalVideos > 0 ? (completedCount / totalVideos) * 100 : 0

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">カリキュラム</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">学習進捗</span>
            <span className="font-medium text-gray-900">
              {completedCount} / {totalVideos} 完了
            </span>
          </div>
          <Progress value={progressPercentage} variant="success" showLabel />
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {sections.map((section, sectionIndex) => {
          const isExpanded = expandedSections.includes(section.id)
          const sectionCompletedCount = section.videos.filter(v => 
            completedVideos.includes(v.id)
          ).length
          const isSectionCompleted = sectionCompletedCount === section.videos.length

          return (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                    isSectionCompleted
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-700'
                  )}>
                    {sectionIndex + 1}
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900">{section.title}</h4>
                    <p className="text-sm text-gray-500">
                      {sectionCompletedCount} / {section.videos.length} 動画完了
                    </p>
                  </div>
                </div>
                
                <svg
                  className={cn(
                    'w-5 h-5 text-gray-400 transition-transform',
                    isExpanded && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isExpanded && (
                <div className="px-6 pb-4">
                  <VideoList
                    videos={section.videos}
                    currentVideo={currentVideo}
                    onVideoSelect={onVideoSelect}
                    completedVideos={completedVideos}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}