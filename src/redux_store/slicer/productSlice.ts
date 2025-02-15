import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsT } from '../../pages/Home';

export const fetchData = createAsyncThunk<ProductsT[]>(
	'product/fetchData',
	async () => {
		const res = await fetch('https://fakestoreapi.com/products');
		const data = await res.json();
		return data;
	}
);

type InitialStateType = {
	data: ProductsT[];
	loading: boolean;
	error: string | null;
};
const productData: ProductsT[] = [];

const initialState: InitialStateType = {
	data: productData,
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: 'product',
	initialState: initialState,
	reducers: {
		// addToCart(state, action) {e
		// 	state.push(action.payload);
		// 	console.log(action);
		// },
		// removeCart(state, action) {
		// 	state.splice(action.payload, 1);
		// },
		setProductData(state, action) {
			state.data = action.payload;
			console.log('test', action);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				fetchData.fulfilled,
				(state, action: PayloadAction<ProductsT[]>) => {
					state.loading = false;
					state.data = action.payload; // The data returned from the API call
				}
			)
			.addCase(fetchData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Unknown Error';
			});
	},
});

export const { setProductData } = productSlice.actions;
// export const {} = productSlice.actions;

export default productSlice.reducer;
