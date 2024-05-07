import { configureStore } from '@reduxjs/toolkit';
import payouts from './slices/payouts/payoutsSlice';

const store = configureStore({
	reducer: { payouts },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
