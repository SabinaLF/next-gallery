import { combineReducers } from '@reduxjs/toolkit'
import productsGallerySlice from './slices/productsGallerySlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/app/_store/store'

const rootReducer = combineReducers({
  productsGallery: productsGallerySlice,
})

export type RootState = ReturnType<typeof rootReducer>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
