import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">ページが見つかりません</h1>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、<br />
          移動した可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary">
              ホームに戻る
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline">
              講座を探す
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}