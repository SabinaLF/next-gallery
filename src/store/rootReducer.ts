import { combineReducers } from '@reduxjs/toolkit'
import productsGallerySlice from './slices/productsGallerySlice'

const rootReducer = combineReducers({
  productsGallery: productsGallerySlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
