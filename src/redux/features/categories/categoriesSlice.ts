import { BaseResponseData } from '@/dtos/base';
import { Category } from '@/services/category/category.dto';
import { getCategoriesAPI } from '@/services/category/category.service';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CategoriesState {
  data: BaseResponseData<Category>[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk('Categoriess/getCategories', () => getCategoriesAPI());

export const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loading = false;
      state.error = 'Error occured';
    });
  },
});
