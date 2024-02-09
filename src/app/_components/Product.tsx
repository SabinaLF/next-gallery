'use client'
import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { Product } from '../interfaces'
import { labels } from '@/app/labels'
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  ImageListItem,
  ImageList,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useRouter } from 'next/navigation'
import styles from '@/app/_styles/page.module.css'

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const theme = useTheme()
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/product/${product.id}`)
  }

  return (
    <div
      className={styles.main}
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
      }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.secondary.main,
        }}
        onClick={handleCardClick}
      >
        <ImageList
          sx={{
            width: '100%',
            maxWidth: 500,
            margin: 'auto',
            paddingTop: '20px',
          }}
          cols={2}
        >
          {product.images.slice(0, 4).map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={product.title}
                loading="lazy"
                style={{ width: '100%', height: '250px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
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
    </div>
  )
}

export default ProductCard
