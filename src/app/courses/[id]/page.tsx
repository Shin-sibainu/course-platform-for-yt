'use client'

import { useState, useEffect, Suspense } from 'react'
import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Container } from '@/components/layout/Container'
import { CourseHeader } from '@/components/features/CourseHeader'
import { getCourseById, generateFullCourseVideos } from '@/lib/courseData'
import { Course, Video } from '@/types/course'

// Dynamic imports for heavy components
const VideoPlayer = dynamic(() => import('@/components/features/VideoPlayer').then(mod => ({ default: mod.VideoPlayer })), {
  loading: () => (
    <div className="bg-black rounded-xl overflow-hidden shadow-2xl animate-pulse">
      <div className="relative pb-[56.25%] bg-gray-300"></div>
      <div className="p-6 bg-white">
        <div className="h-8 bg-gray-300 rounded mb-2"></div>
        <div className="h-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  ),
  ssr: false
})

const Curriculum = dynamic(() => import('@/components/features/Curriculum').then(mod => ({ default: mod.Curriculum })), {
  loading: () => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-4"></div>
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  ),
  ssr: false
})

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.id as string

  const [course, setCourse] = useState<Course | null>(null)
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)
  const [completedVideos, setCompletedVideos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCourse = async () => {
      setLoading(true)
      try {
        const courseData = await getCourseById(courseId)
        if (courseData) {
          // 動的に全ての動画を生成
          const fullCourse = generateFullCourseVideos(courseData)
          setCourse(fullCourse)
          
          // 最初の動画を自動選択
          if (fullCourse.sections.length > 0 && fullCourse.sections[0].videos.length > 0) {
            setCurrentVideo(fullCourse.sections[0].videos[0])
          }
        }
      } catch (error) {
        console.error('Failed to load course:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCourse()
  }, [courseId])

  const handleVideoSelect = (video: Video) => {
    setCurrentVideo(video)
    
    // 動画を完了済みにする（デモ用）
    if (!completedVideos.includes(video.id)) {
      setTimeout(() => {
        setCompletedVideos(prev => [...prev, video.id])
      }, 3000) // 3秒後に完了マーク
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">講座を読み込んでいます...</p>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">講座が見つかりません</h1>
          <p className="text-gray-600">指定された講座は存在しないか、削除された可能性があります。</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <CourseHeader
        title={course.title}
        description={course.description}
        category={course.category}
        instructor={course.instructor}
        totalVideos={course.totalVideos}
        totalDuration={course.totalDuration}
        level={course.level}
        tags={course.tags}
      />

      <section className="py-8 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左側: 動画プレーヤー */}
            <div className="lg:col-span-2">
              {currentVideo && (
                <Suspense fallback={
                  <div className="bg-black rounded-xl overflow-hidden shadow-2xl animate-pulse">
                    <div className="relative pb-[56.25%] bg-gray-300"></div>
                    <div className="p-6 bg-white">
                      <div className="h-8 bg-gray-300 rounded mb-2"></div>
                      <div className="h-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                }>
                  <VideoPlayer video={currentVideo} />
                </Suspense>
              )}
              
              {/* 次の動画の提案 */}
              {currentVideo && course.sections.map(section => {
                const currentIndex = section.videos.findIndex(v => v.id === currentVideo.id)
                if (currentIndex !== -1 && currentIndex < section.videos.length - 1) {
                  const nextVideo = section.videos[currentIndex + 1]
                  return (
                    <div key={nextVideo.id} className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">次の動画</p>
                      <button
                        onClick={() => handleVideoSelect(nextVideo)}
                        className="text-left hover:text-blue-600 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">{nextVideo.title}</h4>
                        <p className="text-sm text-gray-500">{nextVideo.duration}</p>
                      </button>
                    </div>
                  )
                }
                return null
              })}
            </div>

            {/* 右側: カリキュラム */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Suspense fallback={
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-pulse">
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-12 bg-gray-300 rounded"></div>
                      ))}
                    </div>
                  </div>
                }>
                  <Curriculum
                    sections={course.sections}
                    currentVideo={currentVideo}
                    onVideoSelect={handleVideoSelect}
                    completedVideos={completedVideos}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 講座の詳細情報 */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">この講座について</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">学習内容</h3>
              <div className="prose prose-gray max-w-none">
                <p>{course.description}</p>
                
                <h4 className="text-base font-semibold mt-6 mb-3">この講座で学べること：</h4>
                <ul className="space-y-2">
                  {course.tags.map((tag) => (
                    <li key={tag} className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{tag}の実践的な使い方</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}