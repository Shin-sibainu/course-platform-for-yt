import { Category } from '@/types/course'

export const categories: Category[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    slug: 'nextjs',
    description: 'Reactベースの最新フルスタックフレームワーク',
    courseCount: 3,
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    slug: 'claude-code',
    description: 'AIペアプログラミングで開発効率を最大化',
    courseCount: 2,
  },
  {
    id: 'react',
    name: 'React',
    slug: 'react',
    description: 'モダンなUIを構築するためのJavaScriptライブラリ',
    courseCount: 3,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    slug: 'typescript',
    description: '型安全なJavaScriptで堅牢なアプリケーション開発',
    courseCount: 2,
  },
]