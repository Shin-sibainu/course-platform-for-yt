export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-pulse mx-auto mb-4"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">読み込み中...</h2>
        <p className="text-gray-500">少々お待ちください</p>
      </div>
    </div>
  )
}