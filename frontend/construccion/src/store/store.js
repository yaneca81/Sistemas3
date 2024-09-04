import { configureStore } from '@reduxjs/toolkit'
import { globalSlice } from './global/globalSlice';

export const store = configureStore({
    devTools: true,
    reducer: {
        globalStates: globalSlice.reducer
    },
});