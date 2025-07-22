import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto px-4 lg:px-6',
          {
            'max-w-3xl': size === 'sm',
            'max-w-5xl': size === 'md',
            'max-w-7xl': size === 'lg',
            'max-w-[1400px]': size === 'xl',
            'max-w-full': size === 'full',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'