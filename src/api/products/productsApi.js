import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig"
import { toast } from "react-toastify";

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts', async ({ page, limit, name, sortBy, order,signal }, { rejectWithValue }) => {
        try {
      const { data } = await axios.get('/products', {
        params: { page, limit, name, sortBy, order}
      });
      
      return data;
        }
        catch(error) {
          if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      }
            // toast('Please, try again');
                  return rejectWithValue('Please, try again');
        }
    }
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async _id => {
    try {
      console.log('api id', _id)
      const response = await axios.delete(`/products/${_id}`);
      if (response.statusText === 'OK') {
        return response;
      } else {
        throw new Error();
      }
    } catch (e) {
      Notify.failure(
        e.message ? e.message : 'Error: the product was not deleted'
      );
    }
  }
);

export const undateProduct = createAsyncThunk(
  'products/undateProduct',
  async data => {

    try {
       const response = await axios.patch(`/products/${data['_id']}`, data);
      if (response.status === 200) {
        return response;
      } else {
        throw new Error();
      }
    } catch (e) {
      Notify.failure(
        e.message ? e.message : 'Error: the product was not update'
      );
    }
  }
);