'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg group-hover:shadow-lg transition-shadow" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              VibeCoding
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              講座一覧
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              学習進捗
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              お知らせ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              ログイン
            </Button>
            <Button variant="primary" size="sm">
              無料で始める
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                講座一覧
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                学習進捗
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                お知らせ
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="outline" fullWidth>
                  ログイン
                </Button>
                <Button variant="primary" fullWidth>
                  無料で始める
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}