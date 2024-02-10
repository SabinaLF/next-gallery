'use client'
import { FC, useEffect } from 'react'
import styled from '../_styles/loading.module.css'

export const LoadingSpinner: FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className={styled.loadingScreen}>
      <div className={styled.loadingScreenIndicator}></div>
      <div className={styled.loadingScreenBackground}></div>
    </div>
  )
}
