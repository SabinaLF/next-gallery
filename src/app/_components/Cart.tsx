'use client'
import React, { FC, useMemo } from 'react'
import styles from '../_styles/page.module.css'
import { labels } from '@/app/labels'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/app/_store/rootReducer'
import CartProduct from '@/app/_components/CartProduct'
import RefreshApp from '@/app/_components/RefreshApp'

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const { cart } = useAppSelector((state) => state.productsGallery)
  const router = useRouter()

  const total = useMemo(() => {
    return cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity
    }, 0)
  }, [cart])

  return (
    <div className={styles.main}>
      {cart?.length === 0 && (
        <RefreshApp
          title={labels.EMPTY_CART}
          button={labels.CONTINUE_WITH_YOUR_SHOPPING}
          handleRefresh={() => router.push('/')}
        />
      )}
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
