import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const careerSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCareer: builder.mutation({
      query: ({ off_set, page_size }) => ({
        url: `${API_ROUTES.CAREER}?off_set=${off_set}&page_size=${page_size}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCareerMutation } = careerSlice;
