'use client'

import { labels } from '@/app/labels'
import React, { useEffect } from 'react'
import RefreshApp from '@/app/_components/RefreshApp'
import styles from '@/app/_styles/page.module.css'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  const router = useRouter()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={styles.main}>
      <RefreshApp
        title={labels.SOMETHING_WENT_WRONG}
        button={labels.RESET}
        handleRefresh={() => router.push('/')}
      />
    </div>
  )
}
