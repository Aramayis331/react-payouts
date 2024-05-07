import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPayouts, searchPayouts } from 'services/payouts';
import type { Payout, Payouts } from 'types/payouts';
export const fetchPayoutsThunk = createAsyncThunk<Payouts, undefined, { rejectValue: string }>(
	'fetchPayouts',
	async (_, { rejectWithValue }) => {
		return getPayouts()
			.then(({ data }) => data)
			.catch(e => rejectWithValue(e.message));
	},
);

export const searchPayoutsThunk = createAsyncThunk<Payout[], string, { rejectValue: string }>(
	'searchPayouts',
	async (search, { rejectWithValue }) => {
		return searchPayouts(search)
			.then(({ data }) => data)
			.catch(e => rejectWithValue(e.message));
	},
);
