import { createSlice } from '@reduxjs/toolkit';
import { logOutAPI, signInAPI } from '../../api/auth/authApi';

const initialState = {
  user: {
    email: null,
    id: null,
  },
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      /*****************signIn********************/
      .addCase(signInAPI.pending, state => {
        state.isLoading = true;
      })
      .addCase(signInAPI.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.id = payload.user['_id'];
        state.user.email = payload.user.email;
        state.token = payload.token;
      })
      .addCase(signInAPI.rejected, state => {
        state.isLoading = false;
      })
      /*****************logOut********************/
      .addCase(logOutAPI.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutAPI.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.id = null;
        state.user.email = null;
        state.token = null;
      })
      .addCase(logOutAPI.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log('payload logOutAPI.rejected', payload);
      });
  },
});

export const authReducer = authSlice.reducer;
