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
    createDocumentDetail: builder.mutation({
      query: (payload) => ({
        url: `${API_ROUTES.DOCUMENT_DETAIL}`,
        method: 'POST',
        body: { ...payload },
      }),
    }),
    getAllDocuments: builder.mutation({
      query: () => ({
        url: `${API_ROUTES.DOCUMENT_DETAIL}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetDocumentDetailMutation,
  useCreateDocumentDetailMutation,
  useGetAllDocumentsMutation,
} = documentDetailSlice;
