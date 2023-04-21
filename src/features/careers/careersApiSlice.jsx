import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constants';

export const careerSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCareer: builder.mutation({
      query: ({ off_set, page_size }) => ({
        url: `${API_ROUTES.CAREER}?off_set=${off_set}&page_size=${page_size}`,
        method: 'GET',
      }),
    }),
    getCareersDetail: builder.mutation({
      query: ({ id }) => ({
        url: `${API_ROUTES.CAREER}?off_set=0&page_size=1&id=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCareerMutation, useGetCareersDetailMutation } =
  careerSlice;
