import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartProduct, Product } from '@/app/interfaces'
import product from '@/app/_components/Product'
import { mappingCartProduct } from '@/app/_libs/mappingCartProduct'

interface productsGalleryState {
  cart: CartProduct[]
  cartCount: number
  loading: boolean
  error: string | null
}

const initialState: productsGalleryState = {
  cart: [],
  cartCount: 0,
  loading: false,
  error: null,
}

const productsGallerySlice = createSlice({
  name: 'productsGallery',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const newProduct = mappingCartProduct(action.payload)
      const updatedCart = [...state.cart]
      const updatedCartCount = state.cartCount
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === newProduct.id
      )
      state.cartCount = updatedCartCount + 1
      if (existingProductIndex !== -1) {
        // If product exists in cart, update its quantity
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        }
        state.cart = updatedCart
      } else {
        // If product doesn't exist in cart, add it
        state.cart.push({ ...newProduct, quantity: 1 })
      }
    },
  },
})

export const { setError, addToCart } = productsGallerySlice.actions

export default productsGallerySlice.reducer
