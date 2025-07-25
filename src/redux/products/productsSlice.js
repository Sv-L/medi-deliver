import { createSlice } from '@reduxjs/toolkit';
import {
  deleteProduct,
  fetchAllProducts,
  undateProduct,
} from '../../api/products/productsApi';

const initialState = {
  items: [],
  count: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,

  extraReducers: builder => {
    builder
      /*****************fetchAllcustomers********************/
      .addCase(fetchAllProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.data;
        state.count = payload.count;
      })
      .addCase(fetchAllProducts.rejected, state => {
        state.isLoading = false;
        state.items = [];
      })
      .addCase(deleteProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log('payload', payload.data.id);
        state.items = state.items.filter(
          item => item['_id'] !== payload.data.id
        );
      })
      .addCase(deleteProduct.rejected, state => {
        state.isLoading = false;
      })
      .addCase(undateProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(undateProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log('payload', payload.data);
        state.items = state.items.map(item =>
          item['_id'] === payload.data['_id'] ? payload.data : item
        );
      })
      .addCase(undateProduct.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const productsReducer = productsSlice.reducer;
