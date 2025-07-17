import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTransactions } from "../../api/transactions/transactionsApi";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
}
    

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
  
    extraReducers: builder => {
      builder
        /*****************fetchAllcustomers********************/
        .addCase(fetchAllTransactions.pending, state => {
          state.isLoading = true;

        })
        .addCase(fetchAllTransactions.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.items = payload;

        })
        .addCase(fetchAllTransactions.rejected, state => {
          state.isLoading = false;
          state.items = [];

        })

    },
  });
  
  export const transactionsReducer = transactionsSlice.reducer;