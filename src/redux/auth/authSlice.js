import {createSlice} from '@reduxjs/toolkit';
import {signInAPI} from '../../api/auth/authApi';

const initialState = {
  user: {
    email: null,
  },
  token: null,
  isLoading: false
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
            .addCase(signInAPI.fulfilled, (state, {payload}) => {
                console.log('payload', payload)
                state.isLoading = false;
                state.user = payload.user.email;
                state.token = payload.token;
            })
            .addCase(signInAPI.rejected, state => {
                state.isLoading = false;
            })
    }
})

export const authReducer = authSlice.reducer;