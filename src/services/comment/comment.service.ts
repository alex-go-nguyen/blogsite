<<<<<<< HEAD
import { axiosClient, axiosServer } from '@/utils/axiosClient';
import {
  AnswerCommentPayload,
  CommentPayload,
  CommentResponse,
  CommentsResponse,
  UpdateCommentPayload,
} from './comment.dto';
import Cookies from 'js-cookie';

export const getCommentAPI = async (commentId: number) => {
  const { data } = await axiosClient.get<CommentResponse>(`/comments/${commentId}`);

  return data;
};

export const createCommentAPI = async (commentPayload: CommentPayload) => {
  const { data } = await axiosClient.post<CommentResponse>('/comments', commentPayload);

  if (data.data) {
    return true;
  }
=======
import axiosServer, { axiosClient } from '@/utils/axiosClient';
import { CommentPayload, CommentResponse, CommentsResponse } from './comment.dto';

export const createCommentAPI = async (commentPayload: CommentPayload) => {
  commentPayload.data.content.replaceAll(/http:\/\/localhost:1337\/uploads/g, '/uploads');
  const { data } = await axiosClient.post<CommentResponse>('/comments', commentPayload);
  if (data.data) {
    return true;
  }

>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  return false;
};

export const getCommentsArticleAPI = async (articleId: number) => {
  const { data } = await axiosServer.get<CommentsResponse>('/comments', {
    params: {
      filters: {
        article: {
          id: articleId,
        },
      },
      populate: {
        user: {
          populate: '*',
        },
<<<<<<< HEAD
        answers: {
          populate: '*',
        },
        comment: {
          populate: '*',
        },
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
      },
      sort: {
        publishedAt: 'desc',
      },
    },
  });

  return data.data;
};

export const deleteCommentAPI = async (commentId: number) => {
<<<<<<< HEAD
  await axiosClient.delete(`/comments/${commentId}`);

  return true;
};

export const updateCommentAPI = async (payload: UpdateCommentPayload) => {
  const { commentId, newContent } = payload;

  await axiosClient.put<CommentsResponse>(`/comments/${commentId}`, { data: { content: newContent } });

  return true;
};

export const answerCommentAPI = async (commentPayload: AnswerCommentPayload) => {
  const { commentId, reply, user, article } = commentPayload;

  const payload = {
    data: {
      article,
      user,
      content: reply,
      comment: commentId,
    },
  };

  await axiosClient.post<CommentResponse>('/comments', payload);

  return true;
=======
  try {
    await axiosClient.delete(`/comments/${commentId}`);
    return true;
  } catch (error) {}
  return false;
};

export const updateCommentAPI = async (commentId: number, newContent: string) => {
  const { data } = await axiosClient.put<CommentsResponse>(`/comments/${commentId}`, { data: { content: newContent } });

  return data;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
};
