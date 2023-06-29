import { Article } from '@/services/article/article.dto';
<<<<<<< HEAD
import { getArticlesByCategoryAPI, getArticlesByWriterAPI } from '@/services/article/article.service';
=======
import { getArticlesByWriterAPI } from '@/services/article/article.service';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HydrateAction } from '../users/userSlice';
import { HYDRATE } from 'next-redux-wrapper';
import { BaseResponseData } from '@/dtos/base';
<<<<<<< HEAD
import { FilterArticlesProps } from '@/dtos/api.dto';
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

interface ArticlesState {
  data: BaseResponseData<Article>[];
  loading: boolean;
  error: boolean;
<<<<<<< HEAD
  pageCount: number;
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
}

const initialState: ArticlesState = {
  data: [],
  loading: false,
  error: false,
<<<<<<< HEAD
  pageCount: 0,
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
};

export const getArticlesByWriter = createAsyncThunk('articles/getArticlesByWriter', (id: number) =>
  getArticlesByWriterAPI(id, {}),
);

<<<<<<< HEAD
export const getArticlesByCategory = createAsyncThunk(
  'articles/getArticlesByCategory',
  ({ id, options, sort }: FilterArticlesProps) => getArticlesByCategoryAPI(id, options, sort),
);

export const articlesFilterSlice = createSlice({
=======
export const articlesWriterSlice = createSlice({
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  name: 'articlesFilter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase<typeof HYDRATE, HydrateAction>(HYDRATE, (state, action) => {
        return {
          ...state,
<<<<<<< HEAD
          ...action.payload.articlesFilter,
=======
          ...action.payload.articlesWriter,
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
        };
      })
      .addCase(getArticlesByWriter.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArticlesByWriter.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getArticlesByWriter.rejected, (state) => {
        state.loading = false;
        state.error = true;
<<<<<<< HEAD
      })

      .addCase(getArticlesByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArticlesByCategory.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.pageCount = action.payload.meta.pagination.pageCount;
      })
      .addCase(getArticlesByCategory.rejected, (state) => {
        state.loading = false;
        state.error = true;
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
      });
  },
});
