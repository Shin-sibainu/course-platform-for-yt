import React from 'react'
import { Button } from '@/components/ui/Button'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            月額2,980円で全講座見放題
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            最新技術を
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              楽しく学ぼう
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            VibeCodingが提供する高品質な動画講座で、<br className="hidden lg:inline" />
            Next.js、React、TypeScriptなどの最新技術をマスターしよう
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="primary" className="shadow-lg hover:shadow-xl">
              無料で始める
            </Button>
            <Button size="lg" variant="outline">
              講座一覧を見る
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
              <div className="text-sm text-gray-600">講座数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">動画数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-sm text-gray-600">時間</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
              <div className="text-sm text-gray-600">評価</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-grid-gray-100\/50 {
          background-image: 
            linear-gradient(to right, #f5f5f5 1px, transparent 1px),
            linear-gradient(to bottom, #f5f5f5 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </section>
  )
}