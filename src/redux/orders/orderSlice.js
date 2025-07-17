import { createSlice } from "@reduxjs/toolkit";
import { fetchAllorders } from "../../api/orders/ordersApi";

const initialState = {
  items: [],
  count:null,
  isLoading: false,
    error: null,
}
    
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
  
    extraReducers: builder => {
      builder
        /*****************fetchAllcustomers********************/
        .addCase(fetchAllorders.pending, state => {
          state.isLoading = true;
        })
        .addCase(fetchAllorders.fulfilled, (state, {payload}) => {
            state.isLoading = false;
          state.items = payload.data;
          state.count = payload.count;

        })
        .addCase(fetchAllorders.rejected, state => {
          state.isLoading = false;
          state.items = [];
        })

    },
  });
  
  export const ordersReducer = ordersSlice.reducer;