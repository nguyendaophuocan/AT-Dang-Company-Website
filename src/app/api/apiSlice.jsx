import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';
import { API_ROUTES, BASE_API_URL } from '../../utils/constans';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint }) => {
    console.log('ENDPOINT', endpoint);
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

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   console.log('RESULT', result);
//   const status = result?.error?.originalStatus
//   if (status === 403) {
//     console.log('sending refresh token');
//     // send refresh token to get new access token
//     const refreshResult = await baseQuery('/refresh', api, extraOptions);
//     console.log(refreshResult);
//     if (refreshResult?.data) {
//       const user = api.getState().auth.user;
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       // retry the original query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }

//   return result;
// };

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const status = result?.error?.status;
  if (status === 403 || status === 500) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    // const refreshResult = await baseQuery('/api/login', 'POST', extraOptions);
    // api.dispatch(logOut());
  }

  return result;
};
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
