import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { labels } from '@/app/labels'
import styles from '../_styles/page.module.css'
import { CartProduct, Product } from '@/app/interfaces'
import { Button } from '@mui/material'
import { useAppDispatch } from '@/app/_store/rootReducer'
import {
  addToCart,
  removeFromCart,
} from '@/app/_store/slices/productsGallerySlice'

interface CartProductProps {
  product: CartProduct
}

const CartProduct: FC<CartProductProps> = ({ product }) => {
  const theme = useTheme()

  const dispatch = useAppDispatch()
  const handleRemoveFromCart = (product: CartProduct) => {
    dispatch(removeFromCart(product))
  }

  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartProductInfosContainer}>
        <img
          src={product.thumbnail}
          className={styles.cartProductImage}
          alt={product.title}
        />
        <span className={styles.cartProductInfos}>
          <b>{product.title}</b>
          <span>${product.price}</span>
        </span>
      </div>
      <div className={styles.cartProductButtonContainer}>
        <span className={styles.cartProductQuantity}>{product.quantity}</span>
        <Button
          aria-label="go to product gallery"
          style={{
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.secondary.main,
            marginTop: '20px',
          }}
          onClick={() => handleRemoveFromCart(product)}
        >
          {labels.DELETE}
        </Button>
      </div>
    </div>
  )
}

export default CartProduct
