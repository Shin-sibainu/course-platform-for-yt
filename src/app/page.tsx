'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Container } from '@/components/layout/Container'
import { HeroSection } from '@/components/features/HeroSection'
import { CategoryFilter } from '@/components/features/CategoryFilter'
import { CourseCardSkeleton } from '@/components/features/CourseCardSkeleton'
import { getCourses, getCategories, getCoursesByCategory } from '@/lib/courseData'
import { Course, Category } from '@/types/course'

// Dynamic import for CourseGrid with loading fallback
const CourseGrid = dynamic(() => import('@/components/features/CourseGrid').then(mod => ({ default: mod.CourseGrid })), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </div>
  ),
  ssr: false
})

export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const [coursesData, categoriesData] = await Promise.all([
          getCourses(),
          getCategories(),
        ])
        setCourses(coursesData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    const filterCourses = async () => {
      if (selectedCategory) {
        setLoading(true)
        try {
          const filtered = await getCoursesByCategory(selectedCategory)
          setCourses(filtered)
        } catch (error) {
          console.error('Failed to filter courses:', error)
        } finally {
          setLoading(false)
        }
      } else {
        // カテゴリが選択されていない場合は全講座を表示
        const allCourses = await getCourses()
        setCourses(allCourses)
      }
    }

    filterCourses()
  }, [selectedCategory])

  return (
    <>
      <HeroSection />
      
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              講座を探す
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              あなたの学びたい技術から講座を選んでください
            </p>
            
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>
          }>
            <CourseGrid courses={courses} loading={loading} />
          </Suspense>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              VibeCodingで学ぶメリット
            </h2>
            <p className="text-lg text-gray-600">
              質の高い動画講座で効率的にスキルアップ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">体系的なカリキュラム</h3>
              <p className="text-gray-600">
                基礎から応用まで、段階的に学習できる構成で着実にスキルアップ
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">実践的な内容</h3>
              <p className="text-gray-600">
                実際のプロジェクトで使える技術を、手を動かしながら学習
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">いつでもどこでも</h3>
              <p className="text-gray-600">
                スマホやタブレットでも視聴可能。通勤時間も学習時間に
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
