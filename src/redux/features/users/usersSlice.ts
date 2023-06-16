import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { HydrateAction } from './userSlice';
import { getUsersAPI } from '@/services/user/user.service';
import { UserResponseData } from '@/services/user/users.dto';

interface UsersState {
  data: UserResponseData[];
  loading: boolean;
  error: boolean;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: false,
};

export const getUsers = createAsyncThunk('users/getUser', () => getUsersAPI());

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: HydrateAction) => {
        return {
          ...state,
          ...action.payload.users,
        };
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});
