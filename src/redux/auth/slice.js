import { createSlice } from '@reduxjs/toolkit';

import { Register, logIn, logOut, refreshUser } from './operations';

export const initialState = {
  user: {
    email: '',
  },

  accessToken: null,
  error: null,
  isLoading: true,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(Register.fulfilled, (state, { payload }) => {})
      .addCase(logIn.fulfilled, (state, { payload }) => {
        console.log(payload.data.payload.accessToken);
        state.user.email = payload.data.email;
        state.user.accessToken = payload.data.payload.accessToken;
        console.log(state.user.accessToken);
      })
      .addCase(logOut.fulfilled, state => {})
      .addCase(refreshUser.pending, state => {})
      .addCase(refreshUser.fulfilled, (state, { payload }) => {}),
});

export const authReducer = authSlice.reducer;
