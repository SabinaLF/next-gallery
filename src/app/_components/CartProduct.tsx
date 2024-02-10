import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { labels } from '@/app/labels'
import { Typography, Button } from '@mui/material'
import { CartProduct } from '@/app/interfaces'

interface CartProductProps {
  product: CartProduct
}

const CartProduct: FC<CartProductProps> = ({ product }) => {
  const theme = useTheme()

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.primary.light,
        }}
      >
        {labels.EMPTY_CART}
      </Typography>
      <Button
        aria-label="go to product gallery"
        style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.secondary.main,
          marginTop: '20px',
        }}
      >
        {labels.CONTINUE_WITH_YOUR_SHOPPING}
      </Button>
    </>
  )
}

export default CartProduct
