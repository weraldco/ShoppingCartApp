import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slicer/cartSlice';
import productReducer from './slicer/productSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
