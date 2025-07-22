import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: 'default' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value, 
    max = 100,
    variant = 'default',
    size = 'md',
    showLabel = false,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    return (
      <div className="space-y-1">
        {showLabel && (
          <div className="flex justify-between text-sm text-gray-600">
            <span>進捗</span>
            <span>{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          ref={ref}
          className={cn(
            'w-full bg-gray-200 rounded-full overflow-hidden',
            {
              'h-2': size === 'sm',
              'h-3': size === 'md',
              'h-4': size === 'lg',
            },
            className
          )}
          {...props}
        >
          <div
            className={cn(
              'h-full transition-all duration-500 ease-out rounded-full',
              {
                'bg-blue-600': variant === 'default',
                'bg-emerald-600': variant === 'success',
                'bg-amber-600': variant === 'warning',
              }
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = 'Progress'