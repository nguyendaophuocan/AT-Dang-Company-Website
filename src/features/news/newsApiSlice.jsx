import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const newsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.mutation({
      query: () => ({
        url: API_ROUTES.NEWS,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetNewsMutation } = newsSlice;
