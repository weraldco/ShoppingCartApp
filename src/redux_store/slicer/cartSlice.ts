import { createSlice } from '@reduxjs/toolkit';
import { ProductsT } from '../../pages/Home';

const initialState: ProductsT[] = [];

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			state.push(action.payload);
		},
		removeCart(state, action) {
			state.splice(action.payload, 1);
		},
	},
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
