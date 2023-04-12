import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constants';

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
      query: () => ({
        url: API_ROUTES.CONTACT_US,
        method: 'get',
      }),
    }),
    updateContactUs: builder.mutation({
      query: ({ id, payload }) => ({
        url: `${API_ROUTES.CONTACT_US}?id=${id}`,
        method: 'patch',
        body: { ...payload },
      }),
    }),
  }),
});

export const {
  usePostSubscriptionContactUsMutation,
  useGetContactUsMutation,
  useUpdateContactUsMutation,
} = contactUsSlice;
