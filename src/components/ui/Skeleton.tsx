import React from 'react'
import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className, 
    variant = 'text', 
    width, 
    height,
    animation = 'pulse',
    style,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-gray-200',
          {
            'rounded-md h-4': variant === 'text',
            'rounded-full': variant === 'circular',
            'rounded-none': variant === 'rectangular',
            'rounded-lg': variant === 'rounded',
            'animate-pulse': animation === 'pulse',
            'relative overflow-hidden': animation === 'wave',
          },
          className
        )}
        style={{
          width: width || (variant === 'circular' ? height : undefined),
          height: height || (variant === 'circular' ? width : undefined),
          ...style,
        }}
        {...props}
      >
        {animation === 'wave' && (
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        )}
      </div>
    )
  }
)

Skeleton.displayName = 'Skeleton'