import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Skeleton'

export const CourseCardSkeleton: React.FC = () => {
  return (
    <Card className="h-full overflow-hidden">
      <Skeleton variant="rectangular" height={192} />
      
      <CardContent className="p-6 space-y-4">
        <div>
          <Skeleton variant="text" height={24} className="mb-2" />
          <Skeleton variant="text" height={16} />
          <Skeleton variant="text" height={16} width="80%" />
        </div>

        <Skeleton variant="text" height={16} width="40%" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton variant="text" height={16} width={60} />
            <Skeleton variant="text" height={16} width={60} />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <Skeleton variant="text" height={32} width={100} />
            <Skeleton variant="text" height={16} width={40} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}