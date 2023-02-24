import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const newsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.mutation({
      query: ({ off_set, page_size }) => ({
        url: `${API_ROUTES.NEWS}?off_set=${off_set}&page_size=${page_size}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetNewsMutation } = newsSlice;
