import { Course } from '@/types/course'

export const courses: Course[] = [
  // Next.js Courses
  {
    id: 'nextjs-fundamentals',
    title: 'Next.js 14 完全入門 - App Routerで作るモダンWebアプリ',
    description: 'Next.js 14の新機能App Routerを使って、高速でSEOに強いWebアプリケーションを構築する方法を基礎から学びます。',
    category: 'Next.js',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    totalVideos: 45,
    totalDuration: '8時間30分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'beginner',
    tags: ['Next.js', 'React', 'TypeScript', 'App Router'],
    sections: [
      {
        id: 'nextjs-intro',
        title: 'イントロダクション',
        videos: [
          {
            id: 'nf-001',
            title: 'Next.js 14とは？従来のReactアプリとの違い',
            description: 'Next.jsの概要と、なぜNext.jsを選ぶべきかを解説します。',
            youtubeId: 'gY5sGvq-8h8',
            duration: '12:30',
            order: 1,
          },
          {
            id: 'nf-002',
            title: '開発環境のセットアップ',
            description: 'Node.js、VS Code、必要な拡張機能のインストール方法',
            youtubeId: 'gY5sGvq-8h8',
            duration: '8:15',
            order: 2,
          },
          {
            id: 'nf-003',
            title: 'create-next-appで最初のプロジェクト作成',
            description: 'CLIツールを使った効率的なプロジェクトセットアップ',
            youtubeId: 'gY5sGvq-8h8',
            duration: '10:45',
            order: 3,
          },
        ],
      },
      {
        id: 'nextjs-routing',
        title: 'App Routerの基礎',
        videos: [
          {
            id: 'nf-004',
            title: 'App Routerの仕組みを理解する',
            description: 'ファイルベースルーティングの概念と実装方法',
            youtubeId: 'ZV_1mBBEtwg',
            duration: '15:20',
            order: 4,
          },
          {
            id: 'nf-005',
            title: '動的ルーティングとパラメータ',
            description: '[slug]を使った動的なページ生成',
            youtubeId: 'KhEc0hR3LhU',
            duration: '13:45',
            order: 5,
          },
        ],
      },
    ],
  },
  {
    id: 'nextjs-advanced',
    title: 'Next.js実践開発 - ECサイトを作りながら学ぶ',
    description: '実際のECサイトを構築しながら、Next.jsの実践的な使い方を学びます。認証、決済、CMSとの連携など。',
    category: 'Next.js',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    totalVideos: 52,
    totalDuration: '12時間15分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'intermediate',
    tags: ['Next.js', 'E-commerce', 'Stripe', 'Prisma'],
    sections: [
      {
        id: 'na-setup',
        title: 'プロジェクトセットアップ',
        videos: [
          {
            id: 'na-001',
            title: 'ECサイトの要件定義と技術選定',
            description: 'これから作るECサイトの機能と使用技術の解説',
            youtubeId: 'uqpM7WVTKI4',
            duration: '18:30',
            order: 1,
          },
        ],
      },
    ],
  },
  {
    id: 'nextjs-performance',
    title: 'Next.jsパフォーマンス最適化マスター講座',
    description: 'Core Web Vitalsを改善し、Lighthouseスコア100点を目指すNext.jsの最適化テクニック',
    category: 'Next.js',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    totalVideos: 38,
    totalDuration: '7時間45分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'advanced',
    tags: ['Next.js', 'Performance', 'SEO', 'Core Web Vitals'],
    sections: [],
  },

  // Claude Code Courses
  {
    id: 'claude-code-basics',
    title: 'Claude Code入門 - AIペアプログラミングの新時代',
    description: 'Claude Codeを使って開発効率を10倍にする方法を学びます。基本的な使い方から高度なプロンプトエンジニアリングまで。',
    category: 'Claude Code',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    totalVideos: 35,
    totalDuration: '6時間20分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'beginner',
    tags: ['Claude Code', 'AI', 'Productivity', 'VS Code'],
    sections: [
      {
        id: 'cc-intro',
        title: 'Claude Codeとは',
        videos: [
          {
            id: 'cc-001',
            title: 'AIペアプログラミングの革命',
            description: 'Claude Codeがもたらす開発体験の変化',
            youtubeId: 'GHTA143_b-s',
            duration: '10:15',
            order: 1,
          },
        ],
      },
    ],
  },
  {
    id: 'claude-code-advanced',
    title: 'Claude Code実践テクニック - プロジェクト開発を加速する',
    description: '実際のプロジェクトでClaude Codeを最大限活用する方法。大規模アプリケーションの開発フローを解説。',
    category: 'Claude Code',
    thumbnail: 'https://images.unsplash.com/photo-1686191128892-3b58f0b7b89a?w=800&h=450&fit=crop',
    totalVideos: 42,
    totalDuration: '9時間30分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'intermediate',
    tags: ['Claude Code', 'Project Management', 'Best Practices'],
    sections: [],
  },

  // React Courses
  {
    id: 'react-fundamentals',
    title: 'React 18 基礎マスター講座',
    description: 'Reactの基本概念から、Hooks、状態管理まで体系的に学習。モダンなReactアプリケーション開発の基礎を固めます。',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=450&fit=crop',
    totalVideos: 48,
    totalDuration: '10時間15分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'beginner',
    tags: ['React', 'JavaScript', 'Hooks', 'Components'],
    sections: [],
  },
  {
    id: 'react-patterns',
    title: 'Reactデザインパターン＆ベストプラクティス',
    description: '実務で使えるReactの設計パターンとアンチパターン。保守性の高いコンポーネント設計を学びます。',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop',
    totalVideos: 36,
    totalDuration: '8時間00分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'intermediate',
    tags: ['React', 'Design Patterns', 'Architecture', 'Clean Code'],
    sections: [],
  },
  {
    id: 'react-testing',
    title: 'React Testing完全ガイド',
    description: 'Jest、React Testing Library、Cypressを使った包括的なテスト戦略。品質の高いReactアプリを作る。',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1516116736313-6e3c02e8a904?w=800&h=450&fit=crop',
    totalVideos: 32,
    totalDuration: '6時間45分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'advanced',
    tags: ['React', 'Testing', 'Jest', 'TDD'],
    sections: [],
  },

  // TypeScript Courses
  {
    id: 'typescript-basics',
    title: 'TypeScript 5 完全入門',
    description: 'JavaScriptに型安全性をもたらすTypeScriptの基礎から応用まで。型システムを完全にマスターします。',
    category: 'TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
    totalVideos: 40,
    totalDuration: '8時間30分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'beginner',
    tags: ['TypeScript', 'JavaScript', 'Type Safety', 'Programming'],
    sections: [],
  },
  {
    id: 'typescript-advanced',
    title: 'TypeScript高度な型プログラミング',
    description: 'ジェネリクス、条件型、マップ型など、TypeScriptの高度な型機能を使いこなす方法を学びます。',
    category: 'TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=450&fit=crop',
    totalVideos: 38,
    totalDuration: '9時間00分',
    instructor: 'VibeCoding',
    price: '¥2,980',
    level: 'advanced',
    tags: ['TypeScript', 'Advanced Types', 'Generics', 'Type Guards'],
    sections: [],
  },
]