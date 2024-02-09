import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface productsGalleryState {
  cart: [] | null
  loading: boolean
  error: string | null
}

const initialState: productsGalleryState = {
  cart: null,
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
  },
})

export const { setError } = productsGallerySlice.actions

export default productsGallerySlice.reducer
