import { Article, ArticlesResponse } from '@/services/article/article.dto';
import { getArticlesAPI } from '@/services/article/article.service';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { HydrateAction } from '../users/userSlice';
import { BaseResponseData } from '@/dtos/base';

interface ArticlesState {
  data: BaseResponseData<Article>[];
  loading: boolean;
  error: boolean;
}

const initialState: ArticlesState = {
  data: [],
  loading: false,
  error: false,
};

export const getArticles = createAsyncThunk('articles/getArticles', (option: { page?: number }) =>
  getArticlesAPI(option),
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase<typeof HYDRATE, HydrateAction>(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload.articles,
        };
      })
      .addCase(getArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getArticles.rejected, (state) => {
        state.loading = false;
        state.error = false;
      });
  },
});
