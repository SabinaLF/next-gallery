'use client'
import React, { FC } from 'react'
import styles from '../_styles/page.module.css'
import { useTheme } from '@mui/material/styles'
import { Product } from '../interfaces'
import { labels } from '@/app/labels'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useRouter } from 'next/navigation'

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  const theme = useTheme()
  return (
    <div
      className={styles.main}
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
      }}
    ></div>
  )
}

export default Cart
