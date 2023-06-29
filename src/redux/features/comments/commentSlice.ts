import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD
import {
  AnswerCommentPayload,
  CommentAttribute,
  CommentPayload,
  UpdateCommentPayload,
} from '@/services/comment/comment.dto';
import {
  answerCommentAPI,
  createCommentAPI,
  deleteCommentAPI,
  updateCommentAPI,
} from '@/services/comment/comment.service';
=======
import { BaseResponseData } from '@/dtos/base';
import { Comment, CommentPayload } from '@/services/comment/comment.dto';
import { createCommentAPI, deleteCommentAPI } from '@/services/comment/comment.service';
import { stat } from 'fs';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

interface CommentState {
  isPostSuccess: boolean;
  isDeleteSuccess: boolean;
<<<<<<< HEAD
  isUpdateSuccess: boolean;
  isAnswerSuccess: boolean;
  loading: boolean;
  updateLoading: boolean;
  answerLoading: boolean;
=======
  loading: boolean;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  error: boolean;
}

const initialState: CommentState = {
  isPostSuccess: false,
  isDeleteSuccess: false,
<<<<<<< HEAD
  isUpdateSuccess: false,
  isAnswerSuccess: false,
  loading: false,
  updateLoading: false,
  answerLoading: false,
=======
  loading: false,
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  error: false,
};

export const postComment = createAsyncThunk('article/postComment', (payload: CommentPayload) =>
  createCommentAPI(payload),
);

export const deleteComment = createAsyncThunk('article/deleteComment', (commentId: number) =>
  deleteCommentAPI(commentId),
);

<<<<<<< HEAD
export const updateComment = createAsyncThunk('article/updateComment', (payload: UpdateCommentPayload) =>
  updateCommentAPI(payload),
);

export const answerComment = createAsyncThunk('article/answerComment', (payload: AnswerCommentPayload) =>
  answerCommentAPI(payload),
);

=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
export const handleCommentSlice = createSlice({
  name: 'handleComment',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isPostSuccess = false;
      state.isDeleteSuccess = false;
<<<<<<< HEAD
      state.isUpdateSuccess = false;
      state.isAnswerSuccess = false;
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.isPostSuccess = action.payload;
        state.loading = false;
      })
      .addCase(postComment.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

<<<<<<< HEAD
      .addCase(deleteComment.pending, (state) => {})
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isDeleteSuccess = action.payload;
      })
      .addCase(deleteComment.rejected, (state) => {
        state.error = true;
      })

      .addCase(updateComment.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.isUpdateSuccess = action.payload;
        state.updateLoading = false;
      })
      .addCase(updateComment.rejected, (state) => {
        state.updateLoading = false;
        state.error = true;
      })

      .addCase(answerComment.pending, (state) => {
        state.answerLoading = true;
      })
      .addCase(answerComment.fulfilled, (state, action) => {
        state.isAnswerSuccess = action.payload;
        state.answerLoading = false;
      })
      .addCase(answerComment.rejected, (state) => {
        state.answerLoading = false;
=======
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isDeleteSuccess = action.payload;
        state.loading = false;
      })
      .addCase(deleteComment.rejected, (state) => {
        state.loading = false;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
        state.error = true;
      });
  },
});

export const { resetState } = handleCommentSlice.actions;
