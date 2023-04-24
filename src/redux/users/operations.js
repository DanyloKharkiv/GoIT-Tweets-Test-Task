import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://644033e8b9e6d064be0aa8cb.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'tweets/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/tweets');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'tweets/followUser',
  async (id, thunkAPI) => {
    const { users } = thunkAPI.getState();
    const user = users.all.find(user => user.id === id);

    try {
      const { data } = await axios.put(`/tweets/${id}`, {
        followers: Number(user.followers) + 1,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  'tweets/unFollowUser',
  async (id, thunkAPI) => {
    const { users } = thunkAPI.getState();
    const user = users.following.find(user => user.id === id);

    try {
      const { data } = await axios.put(`/tweets/${id}`, {
        followers: Number(user.followers) - 1,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
