import {createSlice} from '@reduxjs/toolkit';

export const photosSlice= createSlice(
    {
        name: 'photos',
        initialState: {photos: [],},
        reducers: {
            getPhotos: (state, action) => {
                state.photos = action.payload
            }
        }
    }
)

export const {getPhotos} =  photosSlice.actions
export default photosSlice.reducer