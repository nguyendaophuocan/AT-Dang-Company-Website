import { apiSlice } from '../../app/api/apiSlice';
import { API_ROUTES } from '../../utils/constans';

export const subscriptionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postSubscription: builder.mutation({
      query: (formValue) => ({
        url: API_ROUTES.SUBSCRIPTION,
        method: 'post',
        body: { ...formValue },
      }),
    }),
  }),
});

export const { usePostSubscriptionMutation } = subscriptionSlice;
