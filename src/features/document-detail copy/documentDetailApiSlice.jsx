import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constants';

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
    updateDocumentDetail: builder.mutation({
      query: ({ id, payload }) => ({
        url: `${API_ROUTES.DOCUMENT_CONTEXT}/?id=${id}`,
        method: 'patch',
        body: { ...payload },
      }),
    }),
    uploadDocumentFile: builder.mutation({
      query: (formData) => ({
        url: `${API_ROUTES.UPLOAD_FILE}`,
        method: 'post',
        body:  formData
  
      }),
    }),
  }),
});

export const {
  useGetDocumentDetailMutation,
  useCreateDocumentDetailMutation,
  useGetAllDocumentsMutation,
  useUpdateDocumentDetailMutation,
  useUploadDocumentFileMutation,
} = documentDetailSlice;
