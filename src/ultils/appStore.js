import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

// configured the store here using redux
const appStore = configureStore({
    reducer: {
        cart : cartReducer,
    },
})

export default appStore;