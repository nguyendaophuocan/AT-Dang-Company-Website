import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const subscriptionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postSubscription: builder.mutation({
      query: (email) => ({
        url: API_ROUTES.SUBSCRIPTION,
        method: 'post',
        body: { email },
      }),
    }),
  }),
});

export const { usePostSubscriptionMutation } = subscriptionSlice;
