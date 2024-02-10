'use client'
import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeIcon from '@mui/icons-material/Home'
import { useTheme } from '@mui/material/styles'
import { labels } from '../labels'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/app/_store/rootReducer'

const Header = () => {
  const theme = useTheme()
  const router = useRouter()
  const { cartCount } = useAppSelector((state) => state.productsGallery)

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={() => {
            router.push('/')
          }}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          {labels.NEXT_GALLERY_LOGO}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="cart"
          onClick={() => {
            router.push('/cart')
          }}
        >
          <ShoppingCartIcon />
          <Typography variant="body1" component="span" style={{ flexGrow: 1 }}>
            {cartCount}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
