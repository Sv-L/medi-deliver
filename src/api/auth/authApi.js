import axios from '../axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const signInAPI = createAsyncThunk(
  'signIn/signInAPI',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
       toast('Log in successful.');
      return data;
    } catch (error) {
       toast('Not valid email or password. Please, try again');
      return rejectWithValue('Not valid email or password. Please, try again');
    }
  }
);

export const logOutAPI = createAsyncThunk(
  'logOut/logOutAPI', 
  async(_, {rejectWithValue}) => {
    try {
    await axios.post('/users/logout');
      axios.defaults.headers.common.Authorization = '';
      toast('Log out successful.');
    } catch (error) {
      toast('Please, try again');
      console.error('err logout', error);
      return rejectWithValue('Please, try again');
  }
  }
)