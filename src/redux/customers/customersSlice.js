import { createSlice } from "@reduxjs/toolkit";
import { fetchAllcustomers } from "../../api/customers/customersApi";

const initialState = {
  items: [],
  count:null,
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
          state.items = payload.data;
          state.count = payload.count;

        })
        .addCase(fetchAllcustomers.rejected, state => {
          state.isLoading = false;
          state.items = [];
        })

    },
  });
  
  export const customersReducer = customersSlice.reducer;