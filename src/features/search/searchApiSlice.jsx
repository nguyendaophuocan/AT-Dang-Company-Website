import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const searchSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchData: builder.mutation({
      query: (value) => ({
        url: `${API_ROUTES.NEWS}/search?term=${value}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSearchDataMutation } = searchSlice;
