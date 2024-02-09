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

interface ProductsProps {
  products: Product[] | null
}

const Products: FC<ProductsProps> = ({ products }) => {
  const theme = useTheme()
  const router = useRouter()

  if (!products?.length) {
    return (
      <div
        className={styles.main}
        style={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.light,
        }}
      >
        <Typography variant="h5" component="div">
          {labels.NO_PRODUCTS}
        </Typography>
      </div>
    )
  }

  return (
    <div
      className={styles.main}
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
      }}
    >
      <Grid container spacing={2} sx={{ padding: '100px', maxWidth: '1500px' }}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.secondary.main,
              }}
              onClick={() => {
                router.push(`/product/${product.id}`)
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" component="p">
                  <b>{product.brand}</b> - {product.description}
                </Typography>
              </CardContent>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  padding: '20px',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <b>{labels.PRICE}</b>: ${product.price.toFixed(2)}
                </Typography>
                <IconButton
                  aria-label="add to cart"
                  sx={{
                    borderRadius: '50%',
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.secondary.main,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log(product.brand)
                  }}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products
