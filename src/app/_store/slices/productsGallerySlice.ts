import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartProduct, Product } from '@/app/interfaces'
import product from '@/app/_components/Product'
import { mappingCartProduct } from '@/app/_libs/mappingCartProduct'

interface productsGalleryState {
  cart: CartProduct[]
  cartCount: number
}

const initialState: productsGalleryState = {
  cart: [],
  cartCount: 0,
}

const productsGallerySlice = createSlice({
  name: 'productsGallery',
  initialState,
  reducers: {
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
    removeFromCart: (state, action: PayloadAction<CartProduct>) => {
      const updatedCart = [...state.cart]
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      )

      if (existingProductIndex !== -1) {
        const updatedProduct = { ...updatedCart[existingProductIndex] }

        if (updatedProduct.quantity === 1) {
          // If product quantity is 1, remove it
          updatedCart.splice(existingProductIndex, 1)
        } else {
          // If product quantity is more than 1, update its quantity
          updatedProduct.quantity--
          updatedCart[existingProductIndex] = updatedProduct
        }

        state.cart = updatedCart
        state.cartCount--
      }
    },
  },
})

export const { addToCart, removeFromCart } = productsGallerySlice.actions

export default productsGallerySlice.reducer
