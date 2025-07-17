import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig"
// import { toast } from "react-toastify";

export const fetchAllorders = createAsyncThunk(
    'orders/fetchAllorders', async ({ page, limit, name, sortBy, order,signal }, { rejectWithValue }) => {
        try {
      const { data } = await axios.get('/orders', {
        params: { page, limit, name, sortBy, order}
      });
      
      return data;
        }
        catch {
          if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      }
            // toast('Please, try again');
                  return rejectWithValue('Please, try again');
        }
    }
)