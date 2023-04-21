import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';
import { API_ROUTES, BASE_API_URL } from '../../utils/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint }) => {
    // if(endpoint==='uploadDocumentFile')
    // {
    //   headers.set('content-type', 'multipart/form-data');
    // }
    // else{
    //   headers.set('content-type', 'application/json');
    // }
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const status = result?.error?.status;
  const message = result?.error?.data?.message;
  if (status === 403 || status === 500) {
    if (message.includes('JWT expired')) {
      api.dispatch(logOut());
    }
    // send refresh token to get new access token
    // const refreshResult = await baseQuery('/api/login', 'POST', extraOptions);
  }

  return result;
};
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
