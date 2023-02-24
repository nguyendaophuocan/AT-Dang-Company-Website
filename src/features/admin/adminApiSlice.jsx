import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const adminSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminHomePageContent: builder.mutation({
      query: () => ({
        url: `${API_ROUTES.ADMIN_HOME}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAdminHomePageContentMutation } = adminSlice;
