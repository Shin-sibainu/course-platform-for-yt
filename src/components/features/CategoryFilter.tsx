'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Category } from '@/types/course'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string | null
  onCategorySelect: (categoryId: string | null) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategorySelect(null)}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95',
          selectedCategory === null
            ? 'bg-blue-600 text-white shadow-sm hover:shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
        )}
      >
        すべて
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category.id)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95',
            selectedCategory === category.id
              ? 'bg-blue-600 text-white shadow-sm hover:shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
          )}
        >
          {category.name}
          <span className="ml-1 text-xs opacity-75">({category.courseCount})</span>
        </button>
      ))}
    </div>
  )
}