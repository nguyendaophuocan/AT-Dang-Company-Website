import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constants';

export const headerSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHeader: builder.mutation({
      query: (value) => ({
        url: `${API_ROUTES.HEADER}?position=${value}`,
        method: 'GET',
      }),
    }),
    updateHeader: builder.mutation({
      query: ({ id, position, type, payload }) => ({
        url: `${API_ROUTES.HEADER}?position=${position}`,
        method: 'PATCH',
        body: { ...payload },
      }),
    }),
  }),
});

export const { useGetHeaderMutation, useUpdateHeaderMutation } = headerSlice;
