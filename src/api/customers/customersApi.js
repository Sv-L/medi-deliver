import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig"
import { toast } from "react-toastify";

export const fetchAllcustomers = createAsyncThunk(
    'customers/fetchAllcustomers', async ({ page, limit, name, sortBy, order }, { rejectWithValue }) => {
        try {
      const { data } = await axios.get('/customers', {
        params: { page, limit, name, sortBy, order}
      });
      
      return data;
        }
        catch {
            toast('Please, try again');
                  return rejectWithValue('Please, try again');
        }
    }
)