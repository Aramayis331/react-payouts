import { GET_PAYOUTS, SEARCH_PAYOUTS } from 'urls/payouts';
import axiosInstance from 'lib/axiosInstance';

export const getPayouts = () => axiosInstance(GET_PAYOUTS);
export const searchPayouts = (search: string) => axiosInstance(SEARCH_PAYOUTS, { params: { query: search } });
