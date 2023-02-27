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
    getNewsById: builder.mutation({
      query: ({ id }) => ({
        url: `${API_ROUTES.NEWS}/searchId?id=${id}`,
        method: 'GET',
      }),
    }),
    createNews: builder.mutation({
      query: (payload) => ({
        url: `${API_ROUTES.NEWS}`,
        method: 'POST',
        body: { ...payload },
      }),
    }),
  }),
});

export const {
  useGetNewsMutation,
  useGetNewsByIdMutation,
  useCreateNewsMutation,
} = newsSlice;
