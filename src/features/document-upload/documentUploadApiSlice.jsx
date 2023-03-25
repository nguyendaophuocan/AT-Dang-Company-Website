import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES, BASE_API_URL } from '../../utils/constans';

export const uploadAPI = createApi({
  reducerPath: 'uploadAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    uploadSingleImage: builder.mutation({
      query(formData) {
        return {
          url: API_ROUTES.UPLOAD_FILE,
          method: 'POST',
          credentials: 'include',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZ3V5ZW5kYW9waHVvY2FuQGdtYWlsLmNvbSIsImV4cCI6MTY3OTgwMDc5NywiaWF0IjoxNjc5NzU3NTk3fQ.bKDRTm4zDo3J7rm6vUCUrXLPcgSBgk7YYAsN00EzQGU`,
          },
          body: { image: formData },
        };
      },
    }),
    // uploadMultipleImage: builder.mutation<{}, FormData>({
    //   query(data) {
    //     return {
    //       url: 'upload/multiple',
    //       method: 'POST',
    //       credentials: 'include',
    //       body: data,
    //     };
    //   },
    // }),
  }),
});

export const { useUploadSingleImageMutation } = uploadAPI;
