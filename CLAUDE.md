# VibeCoding 動画講座プラットフォーム要件定義書

## 1. プロジェクト概要

### 1.1 プロジェクト名

VibeCoding 動画講座プラットフォーム（MVP）

### 1.2 目的

VibeCoding の YouTube 動画コンテンツを体系的な講座として提供する学習プラットフォームの MVP を構築する。

### 1.3 ビジネスモデル

- 月額制サブスクリプション（2,980 円）
- 複数の料金プランを想定（将来的に実装）

## 2. 機能要件

### 2.1 MVP 必須機能

1. **ダッシュボード**

   - 講座一覧の表示
   - カテゴリによる分類表示（Next.js、Claude Code 等）
   - 講座サムネイル、タイトル、概要の表示

2. **講座詳細ページ**
   - カリキュラム形式での動画一覧表示
   - YouTube 動画の埋め込み再生
   - 動画タイトル、説明文の表示
   - 学習進捗の UI 表示（実機能はなし）

### 2.2 将来実装予定機能（MVP 対象外）

- ユーザー認証・認可
- 決済機能
- 実際の学習進捗管理
- 質問・コメント機能
- 修了証発行機能

## 3. 非機能要件

### 3.1 パフォーマンス

- ページ読み込み速度：3 秒以内
- スムーズな動画再生体験

### 3.2 ユーザビリティ

- レスポンシブデザイン（PC、タブレット、スマートフォン対応）
- 直感的な UI/UX
- Udemy ライクなモダンな学習プラットフォームデザイン

## 4. 技術仕様

### 4.1 技術スタック

- **フロントエンド**
  - Next.js 14（App Router）
  - TypeScript
  - Tailwind CSS
  - React 18

### 4.2 データ管理

- モックデータ（JSON 形式）
- 認証・データベース不要（MVP 段階）

### 4.3 外部サービス

- YouTube 埋め込み（iframe）

## 5. ページ構成

### 5.1 ルーティング

- `/` - ダッシュボード（講座一覧）
- `/courses/[id]` - 講座詳細・動画視聴ページ

### 5.2 ページ詳細

#### ダッシュボード（`/`）

- ヘッダー：プラットフォーム名、ナビゲーション（ダミー）
- メインコンテンツ：
  - カテゴリフィルター
  - 講座カード（グリッドレイアウト）
  - 各カードに含まれる情報：
    - サムネイル画像
    - 講座タイトル
    - 講師名（VibeCoding）
    - 動画本数
    - 想定学習時間
    - 価格表示（月額 2,980 円）

#### 講座詳細ページ（`/courses/[id]`）

- 講座ヘッダー：
  - 講座タイトル
  - 講座概要
  - 講師情報
- カリキュラムセクション：
  - セクション単位での動画グループ化
  - 各動画の再生時間表示
  - 完了チェックボックス（UI のみ）
- 動画プレーヤーエリア：
  - YouTube 埋め込みプレーヤー
  - 動画タイトル
  - 動画説明文

## 6. データ構造

### 6.1 講座（Course）

```typescript
interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  totalVideos: number;
  totalDuration: string;
  sections: Section[];
}
```

### 6.2 セクション（Section）

```typescript
interface Section {
  id: string;
  title: string;
  videos: Video[];
}
```

### 6.3 動画（Video）

```typescript
interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  order: number;
}
```

## 7. デザイン仕様

### 7.1 カラーパレット

- プライマリカラー：青系（信頼感）
- セカンダリカラー：緑系（成長・学習）
- 背景色：白・ライトグレー
- テキスト色：ダークグレー・ブラック

### 7.2 UI 要素

- カード型デザイン
- シャドウ効果による立体感
- ホバーエフェクト
- プログレスバー（進捗表示）

## 8. モックデータ仕様

### 8.1 講座カテゴリ

- Next.js
- Claude Code
- React
- TypeScript

### 8.2 サンプル講座

各カテゴリに 2-3 個の講座を用意
1 講座あたり 30-50 本の動画を含む

## 9. 開発スケジュール

### Phase 1: プロジェクトセットアップ

- Next.js プロジェクト作成
- 基本的なフォルダ構造の設定
- Tailwind CSS 設定

### Phase 2: UI 実装

- 共通コンポーネント作成
- ダッシュボード実装
- 講座詳細ページ実装

### Phase 3: モックデータ統合

- モックデータ作成
- データ表示の実装
- YouTube 埋め込み実装

### Phase 4: 仕上げ

- レスポンシブ対応
- UI/UX の調整
- 最終確認

## 10. 成功指標（MVP）

- 講座一覧が正しく表示される
- 講座詳細ページで動画が視聴できる
- レスポンシブデザインが機能する
- YouTube 動画が正常に再生される

## 11. 今後の拡張計画

1. **認証・ユーザー管理**

   - NextAuth.js による認証実装
   - ユーザープロファイル機能

2. **決済機能**

   - Stripe による月額課金実装
   - 複数プラン対応

3. **学習管理機能**

   - 実際の進捗トラッキング
   - 学習履歴の保存
   - レポート機能

4. **コミュニティ機能**
   - Q&A 機能
   - ディスカッションフォーラム
   - ライブセッション機能

## 12. Next.js 14 ベストプラクティス

### 12.1 プロジェクト構造

```
src/
├── app/                    # App Router
│   ├── (auth)/            # 認証が必要なルートグループ（将来用）
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── globals.css        # グローバルスタイル
│   └── courses/
│       └── [id]/
│           └── page.tsx   # 動的ルート
├── components/            # 共通コンポーネント
│   ├── ui/               # 基本UIコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   └── features/         # 機能別コンポーネント
├── lib/                  # ユーティリティ関数
│   ├── utils.ts          # 汎用ユーティリティ
│   └── constants.ts      # 定数定義
├── hooks/                # カスタムフック
├── types/                # TypeScript型定義
└── data/                 # モックデータ
```

### 12.2 App Router のベストプラクティス

#### 12.2.1 サーバーコンポーネントの活用
```typescript
// デフォルトでサーバーコンポーネント
// データフェッチはコンポーネント内で直接実行
async function CoursePage({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);
  return <CourseDetail course={course} />;
}
```

#### 12.2.2 クライアントコンポーネントの使用
```typescript
'use client'; // 必要な場合のみ使用

// インタラクティブな要素、hooks、ブラウザAPIを使用する場合
export function VideoPlayer({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);
  // ...
}
```

#### 12.2.3 loading.tsx の活用
```typescript
// app/courses/[id]/loading.tsx
export default function Loading() {
  return <CourseSkeleton />;
}
```

#### 12.2.4 error.tsx の実装
```typescript
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>エラーが発生しました</h2>
      <button onClick={() => reset()}>再試行</button>
    </div>
  );
}
```

### 12.3 パフォーマンス最適化

#### 12.3.1 画像最適化
```typescript
import Image from 'next/image';

// next/imageを使用して自動最適化
<Image
  src="/course-thumbnail.jpg"
  alt="Course thumbnail"
  width={300}
  height={200}
  priority // LCPの場合
/>
```

#### 12.3.2 動的インポート
```typescript
import dynamic from 'next/dynamic';

// 重いコンポーネントの遅延読み込み
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  loading: () => <VideoPlayerSkeleton />,
  ssr: false, // クライアントサイドのみ
});
```

#### 12.3.3 Suspense の活用
```typescript
import { Suspense } from 'react';

export default function CoursesPage() {
  return (
    <Suspense fallback={<CourseListSkeleton />}>
      <CourseList />
    </Suspense>
  );
}
```

### 12.4 データフェッチング

#### 12.4.1 並列データフェッチ
```typescript
// 並列でデータを取得
async function CoursePage({ params }: { params: { id: string } }) {
  const [course, relatedCourses] = await Promise.all([
    getCourse(params.id),
    getRelatedCourses(params.id),
  ]);
  
  return (
    <>
      <CourseDetail course={course} />
      <RelatedCourses courses={relatedCourses} />
    </>
  );
}
```

#### 12.4.2 キャッシュ戦略
```typescript
// データキャッシュの設定
async function getCourses() {
  const res = await fetch('/api/courses', {
    next: { revalidate: 3600 } // 1時間キャッシュ
  });
  return res.json();
}
```

### 12.5 TypeScript ベストプラクティス

#### 12.5.1 厳格な型定義
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

#### 12.5.2 型の再利用
```typescript
// types/course.ts
export interface Course {
  id: string;
  title: string;
  // ...
}

// Utility Types の活用
export type CoursePreview = Pick<Course, 'id' | 'title' | 'thumbnail'>;
export type CourseWithSections = Course & { sections: Section[] };
```

### 12.6 Tailwind CSS ベストプラクティス

#### 12.6.1 カスタムコンポーネント
```typescript
// components/ui/Button.tsx
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-colors',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  );
}
```

#### 12.6.2 レスポンシブデザイン
```typescript
// Mobile First アプローチ
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* コンテンツ */}
</div>
```

### 12.7 SEO 最適化

#### 12.7.1 Metadata API
```typescript
// app/courses/[id]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const course = await getCourse(params.id);
  
  return {
    title: course.title,
    description: course.description,
    openGraph: {
      images: [course.thumbnail],
    },
  };
}
```

#### 12.7.2 構造化データ
```typescript
// JSON-LD の実装
export default function CourseLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'VibeCoding講座',
    description: '...',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
```

### 12.8 開発環境のベストプラクティス

#### 12.8.1 ESLint 設定
```javascript
// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
```

#### 12.8.2 Git フック (Husky + lint-staged)
```json
// package.json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

### 12.9 セキュリティベストプラクティス

#### 12.9.1 環境変数の管理
```typescript
// 公開可能な環境変数
NEXT_PUBLIC_API_URL=https://api.example.com

// サーバーサイドのみ
DATABASE_URL=postgresql://...
```

#### 12.9.2 CSPヘッダーの設定
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.youtube.com",
          },
        ],
      },
    ];
  },
};
```

### 12.10 デバッグとロギング

#### 12.10.1 開発時のデバッグ
```typescript
// lib/logger.ts
export const logger = {
  debug: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG]', ...args);
    }
  },
  error: (...args: any[]) => {
    console.error('[ERROR]', ...args);
  },
};
```

## 13. タスク管理

### チケット管理
- 各チケットは`/docs`ディレクトリに連番付きのマークダウンファイルとして保存
- タスクの完了状態は以下のように管理：
  - 未完了: `- [ ]`
  - 完了: `- [x]`
- 各チケットファイル内でTODOリストを作成し、進捗を管理
