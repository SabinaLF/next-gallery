import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { labels } from '@/app/labels'
import styles from '../_styles/page.module.css'
import { CartProduct } from '@/app/interfaces'
import { Button } from '@mui/material'

interface CartProductProps {
  product: CartProduct
}

const CartProduct: FC<CartProductProps> = ({ product }) => {
  const theme = useTheme()

  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartProductInfosContainer}>
        <img
          src={product.thumbnail}
          className={styles.cartProductImage}
          alt={product.title}
        />
        <span className={styles.cartProductInfos}>
          <b>{product.brand}</b>
          <span>{product.title}</span>
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
          onClick={() => console.log('rimuovi')}
        >
          {labels.DELETE}
        </Button>
      </div>
    </div>
  )
}

export default CartProduct
