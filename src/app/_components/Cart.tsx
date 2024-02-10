'use client'
import React, { FC } from 'react'
import styles from '../_styles/page.module.css'
import { useTheme } from '@mui/material/styles'
import { labels } from '@/app/labels'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/app/_store/rootReducer'
import EmptyCart from '@/app/_components/EmptyCart'

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const theme = useTheme()
  const router = useRouter()
  const { cart } = useAppSelector((state) => state.productsGallery)

  return (
    <div
      className={styles.main}
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
      }}
    >
      {cart?.length === 0 && <EmptyCart />}
      {cart?.length !== 0 && cart.map((c) => <p key={c.id}>{c.brand}</p>)}
    </div>
  )
}

export default Cart
