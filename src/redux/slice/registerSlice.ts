import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterInput } from '../../@types/schemaRegister';
import { RootState } from '../store';

const initialState = {
  email: '',
  password: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerFirstStep: (state, action: PayloadAction<RegisterInput>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { registerFirstStep } = registerSlice.actions;

export const selectRegisterData = (state: RootState) => ({
  email: state.register.email,
  password: state.register.password,
});

export default registerSlice.reducer;
