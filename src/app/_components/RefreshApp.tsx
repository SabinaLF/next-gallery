import React, { FC } from 'react'
import styles from '../_styles/page.module.css'
import { useTheme } from '@mui/material/styles'
import { labels } from '@/app/labels'
import { Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export interface RefreshAppProps {
  title: string
  button: string
  handleRefresh: () => void
}
const RefreshApp: FC<RefreshAppProps> = ({ title, button, handleRefresh }) => {
  const theme = useTheme()

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        {title}
      </Typography>
      <Button
        aria-label="go to product gallery"
        style={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          marginTop: '20px',
        }}
        onClick={handleRefresh}
      >
        {button}
      </Button>
    </>
  )
}

export default RefreshApp
