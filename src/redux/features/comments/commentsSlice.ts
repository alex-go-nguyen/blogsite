import { BaseResponseData } from '@/dtos/base';
<<<<<<< HEAD
import { CommentAttribute } from '@/services/comment/comment.dto';
=======
import { Comment } from '@/services/comment/comment.dto';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import { getCommentsArticleAPI } from '@/services/comment/comment.service';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CommentsState {
<<<<<<< HEAD
  data: BaseResponseData<CommentAttribute>[];
=======
  data: BaseResponseData<Comment>[];
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  loading: boolean;
  error: boolean;
}

const initialState: CommentsState = {
  data: [],
  loading: false,
  error: false,
};

export const getCommentsArticle = createAsyncThunk('Categoriess/getCategory', (articleId: number) =>
  getCommentsArticleAPI(articleId),
);

export const commentsSlice = createSlice({
<<<<<<< HEAD
  name: 'Comments',
=======
  name: 'Comment',
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommentsArticle.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getCommentsArticle.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
