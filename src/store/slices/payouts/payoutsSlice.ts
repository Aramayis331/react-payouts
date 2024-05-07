import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { fetchPayoutsThunk, searchPayoutsThunk } from './thunk';

const { reducer } = createSlice({
	name: 'payouts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPayoutsThunk.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchPayoutsThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.payouts = payload;
				state.error = '';
			})
			.addCase(fetchPayoutsThunk.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(searchPayoutsThunk.pending, state => {
				state.isLoading = true;
			})
			.addCase(searchPayoutsThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				if (state.payouts) state.payouts.data = payload;
				state.error = '';
			})
			.addCase(searchPayoutsThunk.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});
export default reducer;
