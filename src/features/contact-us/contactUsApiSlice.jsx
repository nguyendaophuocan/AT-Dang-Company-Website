import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const contactUsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postSubscriptionContactUs: builder.mutation({
      query: (value) => ({
        url: API_ROUTES.SUBSCRIPTION_CONTACT_US,
        method: 'post',
        body: { ...value },
      }),
    }),
    getContactUs: builder.mutation({
      query: (value) => ({
        url: API_ROUTES.CONTACT_US,
        method: 'get',
      }),
    }),
  }),
});

export const { usePostSubscriptionContactUsMutation, useGetContactUsMutation } =
  contactUsSlice;
