'use client'
import React, { FC, useMemo } from 'react'
import styles from '../_styles/page.module.css'
import { useTheme } from '@mui/material/styles'
import { labels } from '@/app/labels'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/app/_store/rootReducer'
import EmptyCart from '@/app/_components/EmptyCart'
import CartProduct from '@/app/_components/CartProduct'

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const theme = useTheme()
  const { cart } = useAppSelector((state) => state.productsGallery)
  console.log(cart)
  const total = useMemo(() => {
    return cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0)
  }, [cart])

  return (
    <div className={styles.main}>
      {cart?.length === 0 && <EmptyCart />}
      {cart?.length !== 0 && (
        <div className={styles.cartProducts}>
          {cart.map((item) => (
            <CartProduct key={item.id} product={item} />
          ))}
          <span className={styles.total}>
            <b>{labels.TOTAL}</b>: ${total}
          </span>
        </div>
      )}
    </div>
  )
}

export default Cart
