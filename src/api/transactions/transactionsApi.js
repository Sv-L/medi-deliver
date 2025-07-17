import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTransactions = createAsyncThunk(
    'transactions/fetchAllTransactions', 
  async ({ limit = 6 }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/transactions', {
                params: { limit }
            });
            return data;
        } catch (error) {
            console.log('catch', error.message);
            // toast('Please, try again');
            return rejectWithValue('Please, try again');
        }
    }
);