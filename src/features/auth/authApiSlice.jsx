import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: API_ROUTES.LOG_IN,
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
