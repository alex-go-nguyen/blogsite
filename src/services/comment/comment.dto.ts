import { AuthorResponse } from '@/dtos/author.dto';
import { ArticleResponse } from '../article/article.dto';
<<<<<<< HEAD
import { BasePaginationResponse, BaseResponse, BaseSingleResponse } from '@/dtos/base';

export type CommentsResponse = BasePaginationResponse<CommentAttribute>;
export type CommentResponse = BaseSingleResponse<CommentAttribute>;
=======
import { BasePaginationResponse, BaseSingleResponse } from '@/dtos/base';

export type CommentsResponse = BasePaginationResponse<Comment>;
export type CommentResponse = BaseSingleResponse<Comment>;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

export type CommentPayload = {
  data: {
    content: string;
    user: number;
    article: number;
  };
};

<<<<<<< HEAD
export type UpdateCommentPayload = {
  commentId: number;
  newContent: string;
};

export type AnswerCommentPayload = {
  article: number;
  user: number;
  commentId: number;
  reply: string;
};

export interface CommentAttribute {
  content: string;
  article: ArticleResponse;
  user: AuthorResponse;
  answers: BaseResponse<CommentAttribute>;
  comment: BaseSingleResponse<CommentAttribute>;
=======
export interface Comment {
  content: string;
  article: ArticleResponse;
  user: AuthorResponse;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
