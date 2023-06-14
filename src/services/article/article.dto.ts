import { AuthorResponse } from '../../dtos/author.dto';
import { BasePaginationResponse } from '../../dtos/base';
import { CategoryResponse } from '../category/category.dto';
import { Media } from '../../dtos/media.dto';

export type ArticlesResponse = BasePaginationResponse<Article>;

export interface Article {
  title: string;
  description: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  thumbnail: Media;
  category: CategoryResponse;
  author: AuthorResponse;
}
