import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type User = {
  id: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
};

export interface IUserState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: IUserState = {
  user: localStorage.getItem('user')
    ? (JSON.parse(localStorage.getItem('user')!) as User)
    : null,
  accessToken: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserState>) => {
      localStorage.setItem('token', `${action.payload.accessToken}`);
      localStorage.setItem('refreshToken', `${action.payload.refreshToken}`);
      state.user = localStorage.getItem('user')
        ? (JSON.parse(localStorage.getItem('user')!) as User)
        : null;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    updateRefresh: (state, action: PayloadAction<IUserState>) => {
      state.refreshToken = action.payload.refreshToken;
    },
    setRefresh: (state, action: PayloadAction<IUserState>) => {
      localStorage.removeItem('token');
      localStorage.setItem('token', `${action.payload.accessToken}`);
      state.accessToken = action.payload.accessToken;
    },
    logOut: (state) => {
      localStorage.removeItem('token');
      state.accessToken = null;
    },
  },
});

export const selectIsAuth = (state: RootState) =>
  Boolean(state.auth.accessToken);
export const selectAuth = (state: RootState) => state.auth;

export const { login, logOut, setRefresh } = authSlise.actions;

export default authSlise.reducer;
