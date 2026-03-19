import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

interface BucketStats {
  name: string
  fileCount: number
  totalSizeBytes: number
  totalSizeMB: number
}

export async function GET() {
  try {
    const admin = createAdminClient()

    const bucketNames = ['blog-images', 'avatars', 'videos', 'logos']
    const bucketStats: BucketStats[] = []

    for (const bucketName of bucketNames) {
      const { data: files, error } = await admin.storage
        .from(bucketName)
        .list('', { limit: 1000 })

      if (error) {
        bucketStats.push({
          name: bucketName,
          fileCount: 0,
          totalSizeBytes: 0,
          totalSizeMB: 0,
        })
        continue
      }

      // Filter out folders (items without metadata)
      const realFiles = (files || []).filter(
        (f) => f.metadata && f.metadata.size != null
      )

      const totalBytes = realFiles.reduce(
        (sum, f) => sum + (f.metadata?.size || 0),
        0
      )

      bucketStats.push({
        name: bucketName,
        fileCount: realFiles.length,
        totalSizeBytes: totalBytes,
        totalSizeMB: Math.round((totalBytes / (1024 * 1024)) * 100) / 100,
      })
    }

    const overallFiles = bucketStats.reduce((s, b) => s + b.fileCount, 0)
    const overallBytes = bucketStats.reduce((s, b) => s + b.totalSizeBytes, 0)
    const overallMB =
      Math.round((overallBytes / (1024 * 1024)) * 100) / 100
    const freeTierLimitMB = 1024 // 1 GB
    const usagePercent =
      Math.round((overallMB / freeTierLimitMB) * 10000) / 100

    return NextResponse.json({
      buckets: bucketStats,
      totals: {
        files: overallFiles,
        bytes: overallBytes,
        mb: overallMB,
        freeTierLimitMB,
        usagePercent,
      },
    })
  } catch (err) {
    console.error('Storage stats error:', err)
    return NextResponse.json(
      { error: 'Error fetching storage stats' },
      { status: 500 }
    )
  }
}
