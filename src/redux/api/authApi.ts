import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { toast } from 'react-toastify';
import {
  requesLogin,
  requestEditUser,
  requestRegister,
  responseEditUser,
  responseLogin,
  responseRegister,
} from './types';
import { IUserState, logOut, setRefresh } from '../slice/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl:
    'http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com',
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.accessToken ||
      localStorage.getItem('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error?.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    const refreshResult = await baseQuery('/auth/refresh', api, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
      ...extraOptions,
    });

    if (refreshResult.data) {
      api.dispatch(setRefresh(refreshResult.data as IUserState));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<responseLogin, requesLogin>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'post',
        body: credentials,
      }),
    }),
    register: builder.mutation<responseRegister, requestRegister>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'post',
        body: credentials,
      }),
      transformErrorResponse: (error) => {
        if (error.status === 409) {
          toast.error('Пользователь уже зарегистрирован');
        }
      },
    }),
    editData: builder.mutation<responseEditUser, requestEditUser>({
      query: (credentials) => ({
        url: '/users',
        method: 'patch',
        body: credentials,
      }),
      transformErrorResponse: (error) => {
        if (error.status === 409) {
          toast.error('Пользователь с этим электронным письмом уже существует');
        }
      },
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation, useEditDataMutation } =
  authApi;
