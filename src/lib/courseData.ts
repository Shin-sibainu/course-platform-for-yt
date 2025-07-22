import { courses } from '@/data/courses'
import { categories } from '@/data/categories'
import { Course, Category } from '@/types/course'

// すべての講座を取得
export async function getCourses(): Promise<Course[]> {
  // 実際のAPIでは非同期処理になる
  return Promise.resolve(courses)
}

// IDで講座を取得
export async function getCourseById(id: string): Promise<Course | null> {
  const course = courses.find(c => c.id === id)
  return Promise.resolve(course || null)
}

// カテゴリで講座をフィルタリング
export async function getCoursesByCategory(categoryId: string): Promise<Course[]> {
  const category = categories.find(c => c.id === categoryId)
  if (!category) return []
  const filtered = courses.filter(c => c.category === category.name)
  return Promise.resolve(filtered)
}

// すべてのカテゴリを取得
export async function getCategories(): Promise<Category[]> {
  return Promise.resolve(categories)
}

// カテゴリIDでカテゴリを取得
export async function getCategoryById(id: string): Promise<Category | null> {
  const category = categories.find(c => c.id === id)
  return Promise.resolve(category || null)
}

// 講座の総数を取得
export function getTotalCourses(): number {
  return courses.length
}

// 講座のサンプル動画を生成（各セクションから最初の30-50本）
export function generateFullCourseVideos(course: Course): Course {
  const videoCount = Math.floor(Math.random() * 21) + 30 // 30-50本
  const sectionsCount = Math.floor(Math.random() * 6) + 5 // 5-10セクション
  
  const fullSections = []
  let videoIndex = 1
  
  for (let i = 0; i < sectionsCount; i++) {
    const videosInSection = Math.floor(videoCount / sectionsCount) + (i < videoCount % sectionsCount ? 1 : 0)
    const sectionVideos = []
    
    for (let j = 0; j < videosInSection; j++) {
      sectionVideos.push({
        id: `${course.id}-video-${videoIndex}`,
        title: `レッスン ${videoIndex}: ${generateVideoTitle(i, j)}`,
        description: `このレッスンでは、${generateVideoDescription(i, j)}について詳しく解説します。`,
        youtubeId: getRandomYoutubeId(), // VibeCodingの動画ID
        duration: `${Math.floor(Math.random() * 15) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
        order: videoIndex,
      })
      videoIndex++
    }
    
    fullSections.push({
      id: `${course.id}-section-${i + 1}`,
      title: `セクション ${i + 1}: ${generateSectionTitle(i)}`,
      videos: sectionVideos,
    })
  }
  
  return {
    ...course,
    sections: fullSections,
    totalVideos: videoIndex - 1,
  }
}

// ヘルパー関数
function generateSectionTitle(index: number): string {
  const titles = [
    '基礎知識と環境構築',
    '基本概念の理解',
    '実践的な実装',
    '応用テクニック',
    'ベストプラクティス',
    'プロジェクト構築',
    'デバッグとテスト',
    'デプロイと運用',
    'パフォーマンス最適化',
    'まとめと次のステップ',
  ]
  return titles[index % titles.length]
}

function generateVideoTitle(sectionIndex: number, videoIndex: number): string {
  const topics = [
    ['概要説明', 'インストール方法', '初期設定', '基本的な使い方', 'ファイル構成'],
    ['コンポーネント作成', 'Props入門', 'State管理', 'イベント処理', 'ライフサイクル'],
    ['フォーム実装', 'API連携', 'ルーティング', '状態管理', 'カスタムフック'],
    ['コード分割', 'メモ化', '最適化', 'エラー処理', 'セキュリティ'],
    ['テスト作成', 'CI/CD設定', 'ドキュメント', 'コードレビュー', 'チーム開発'],
  ]
  const sectionTopics = topics[sectionIndex % topics.length]
  return sectionTopics[videoIndex % sectionTopics.length]
}

function generateVideoDescription(sectionIndex: number, videoIndex: number): string {
  const descriptions = [
    '基本的な概念と実装方法',
    '実践的なテクニックと応用例',
    'よくあるエラーとその対処法',
    'パフォーマンスを意識した実装',
    '本番環境での運用方法',
  ]
  return descriptions[videoIndex % descriptions.length]
}

// VibeCodingのYouTube動画IDリスト
function getRandomYoutubeId(): string {
  const youtubeIds = [
    'gY5sGvq-8h8', // React useState
    'BUCiSSyIGGU', // React Hooks
    'oZbTqEmjfmo', // Firebase Auth
    '2g811Eo7K8U', // Node.js Crash Course
    'qI3P7zMMsgY', // GraphQL
    'ZV_1mBBEtwg', // Next.js
    'KhEc0hR3LhU', // TypeScript
    'Q5vMiXvdXR4', // Tailwind CSS
    'R-3uXlTudSQ', // React Query
    'dJjfBK-M0vI', // Redux Toolkit
    'sIhm1kBSNhY', // Supabase
    'T3n8U1BV2fk', // Prisma
    'uqpM7WVTKI4', // Stripe
    '3LKMwkuK0ZE', // Docker
    'GHTA143_b-s', // JavaScript ES6
  ]
  return youtubeIds[Math.floor(Math.random() * youtubeIds.length)]
}