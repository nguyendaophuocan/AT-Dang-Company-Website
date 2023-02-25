import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const adminSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomePageContent: builder.mutation({
      query: () => ({
        url: `${API_ROUTES.ADMIN_HOME_CONENTS}`,
        method: 'GET',
      }),
    }),
    updateHomePageContent: builder.mutation({
      query: ({ id, payload }) => ({
        url: `${API_ROUTES.ADMIN_HOME}?id=${id}`,
        method: 'PATCH',
        body: payload,
      }),
    }),
    updateNewsContent: builder.mutation({
      query: ({ id, payload }) => ({
        url: `${API_ROUTES.NEWS}?id=${id}`,
        method: 'PATCH',
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetHomePageContentMutation,
  useUpdateHomePageContentMutation,
  useUpdateNewsContentMutation,
} = adminSlice;
