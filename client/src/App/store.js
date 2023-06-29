import {configureStore} from '@reduxjs/toolkit'
import photosReducer from '../Features/photosSlice'

export const store = configureStore({
    reducer: {
        photos: photosReducer,
    }
  })