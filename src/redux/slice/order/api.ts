import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../../config/api';
import { OrderType } from '../../types';

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        fetchOrder: builder.query<{ status: string, orders: OrderType[] }, string>({
            query: (userId) => `order/fetch/${userId}`,
        }),
    }),
})

export const { useFetchOrderQuery } = orderApi;