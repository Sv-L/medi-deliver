import { createSlice } from "@reduxjs/toolkit";
import { signInAPI } from "../../api/auth/authApi";
import { fetchAllcustomers } from "../../api/customers/customersApi";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}
    

const customersSlice = createSlice({
    name: 'customers',
    initialState,
  
    extraReducers: builder => {
      builder
        /*****************fetchAllcustomers********************/
        .addCase(fetchAllcustomers.pending, state => {
          state.isLoading = true;
        })
        .addCase(fetchAllcustomers.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;

        })
        .addCase(fetchAllcustomers.rejected, state => {
          state.isLoading = false;
          state.items = [];
        })

    },
  });
  
  export const customersReducer = customersSlice.reducer;