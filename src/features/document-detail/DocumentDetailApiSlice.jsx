import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const documentDetailSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDocumentDetail: builder.mutation({
      query: (id) => ({
        url: `${API_ROUTES.DOCUMENT_DETAIL}/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDocumentDetailMutation } = documentDetailSlice;
