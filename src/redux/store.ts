import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './slice/profileSlice';
import { useDispatch } from 'react-redux';
import registerSlice from './slice/registerSlice';
import { authApi } from './api/authApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './slice/authSlice';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    register: registerSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);

export default store;
