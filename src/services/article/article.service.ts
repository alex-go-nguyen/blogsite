import { BaseResponse } from '@/dtos/base';
import { Article, ArticlesResponse, PostArticlePayload } from '@/services/article/article.dto';
import axiosClient from '@/utils/axiosClient';
import { Avatar } from '../user/users.dto';

export const getArticlesAPI = async (option: { page?: number }) => {
  const { data } = await axiosClient.get<ArticlesResponse>('/articles', {
    params: {
      populate: {
        thumbnail: '*',
        category: {
          populate: '*',
        },
        author: {
          populate: {
            avatar: '*',
          },
        },
      },
      ...(option.page && {
        pagination: {
          page: option.page,
          pageSize: 6,
        },
      }),
    },
  });

  return data.data;
};

export const getArticleDetailAPI = async (slug: string) => {
  const { data } = await axiosClient.get<ArticlesResponse>('/articles', {
    params: {
      filters: {
        slug: slug,
      },
      populate: {
        thumbnail: '*',
        category: { populate: '*' },
        author: { populate: '*' },
      },
    },
  });

  return data.data[0].attributes;
};

export const getArticlesByWriterAPI = async (writerId: number) => {
  const { data } = await axiosClient.get<ArticlesResponse>('/articles', {
    params: {
      filters: {
        author: writerId,
      },
      populate: {
        thumbnail: '*',
        category: {
          populate: '*',
        },
        author: {
          populate: '*',
        },
      },
    },
  });

  return data.data;
};

export const postArticleAPI = async (payload: PostArticlePayload) => {
  const formData = new FormData();
  formData.append('files', payload.data.thumbnail[0]);

  const res = await axiosClient.post<Avatar[]>('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  const { data } = await axiosClient.post<BaseResponse<Article>>('/articles', {
    data: { ...payload.data, thumbnail: res.data[0].id },
  });

  return data;
};
