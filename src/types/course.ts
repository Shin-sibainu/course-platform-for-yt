export interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  duration: string
  order: number
}

export interface Section {
  id: string
  title: string
  videos: Video[]
}

export interface Course {
  id: string
  title: string
  description: string
  category: string
  thumbnail: string
  totalVideos: number
  totalDuration: string
  sections: Section[]
  instructor: string
  price: string
  level: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  courseCount: number
}

export type CoursePreview = Pick<Course, 'id' | 'title' | 'description' | 'thumbnail' | 'category' | 'totalVideos' | 'totalDuration' | 'instructor' | 'price'>

export type CourseWithProgress = Course & { progress: number }