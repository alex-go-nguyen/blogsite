import { BaseResponse } from '@/dtos/base';
import { Article, ArticlesResponse, PostArticlePayload } from '@/services/article/article.dto';
<<<<<<< HEAD
import { axiosClient, axiosServer } from '@/utils/axiosClient';
import { Avatar } from '../user/users.dto';
import { PaginationOption } from '@/dtos/api.dto';
import { OrderEnum } from '@/constants';
import Cookies from 'js-cookie';

export const getArticlesAPI = async ({ page, pageSize }: PaginationOption = {}) => {
=======
import axiosServer, { axiosClient } from '@/utils/axiosClient';
import { Avatar } from '../user/users.dto';
import { PaginationOption } from '@/dtos/api.dto';
import { OrderEnum } from '@/constants';

export const getArticlesAPI = async ({ page, pageSize }: PaginationOption) => {
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  const { data } = await axiosServer.get<ArticlesResponse>('/articles', {
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
      sort: {
        publishedAt: OrderEnum.DESC,
      },
      pagination: {
        page,
        pageSize,
      },
    },
  });

  return data;
};

export const getArticleDetailAPI = async (slug: string) => {
  const { data } = await axiosServer.get<ArticlesResponse>('/articles', {
    params: {
      filters: {
        slug,
      },
      populate: {
        thumbnail: '*',
        category: { populate: '*' },
        author: { populate: '*' },
      },
    },
  });

<<<<<<< HEAD
  return data.data?.[0];
=======
  return data.data[0];
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
};

export const getArticlesByWriterAPI = async (writerId: number, { page, pageSize }: PaginationOption) => {
  const { data } = await axiosServer.get<ArticlesResponse>('/articles', {
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
        pagination: {
          page,
          pageSize,
        },
      },
      sort: {
        publishedAt: OrderEnum.DESC,
      },
    },
  });

  return data.data;
};

<<<<<<< HEAD
export const getArticlesByCategoryAPI = async (
  categoryId: number,
  { page, pageSize }: PaginationOption,
  sort?: string,
) => {
  const { data } = await axiosServer.get<ArticlesResponse>('/articles', {
    params: {
      filters: {
        category: categoryId,
      },
      populate: {
        thumbnail: '*',
        category: {
          populate: '*',
        },
        author: {
          populate: '*',
        },
        pagination: {
          page,
          pageSize,
        },
      },
      sort: {
        publishedAt: sort || OrderEnum.DESC,
      },
    },
  });

  return data;
};

export const postArticleAPI = async (payload: PostArticlePayload) => {
  const formData = new FormData();
  formData.append('files', payload.data.thumbnail?.[0]);

  const accessToken = Cookies.get('access_token');

  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer ' + accessToken,
  };

  const res = await axiosServer.post<Avatar[]>('/upload', formData, { headers });

  const { data } = await axiosClient.post<BaseResponse<Article>>('/articles', {
    data: { ...payload.data, thumbnail: res.data?.[0].id },
=======
export const postArticleAPI = async (payload: PostArticlePayload) => {
  const formData = new FormData();
  formData.append('files', payload.data.thumbnail[0]);

  const res = await axiosClient.post<Avatar[]>('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  payload.data.content = payload.data.content.replaceAll(/http:\/\/127.0.0.1:1337\/uploads/g, '/uploads');

  const { data } = await axiosClient.post<BaseResponse<Article>>('/articles', {
    data: { ...payload.data, thumbnail: res.data[0].id },
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  });

  return data;
};

export const searchArticlesAPI = async (searchQuery: string, { page, pageSize }: PaginationOption, sort?: string) => {
  const { data } = await axiosServer.get<ArticlesResponse>('/articles', {
    params: {
      _q: searchQuery,
      category: {
        data: {
          attributes: {
            name: 'technology',
          },
        },
      },
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
      sort: {
<<<<<<< HEAD
        publishedAt: sort || OrderEnum.DESC,
=======
        publishedAt: sort || 'desc',
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
      },
      pagination: {
        page,
        pageSize,
      },
    },
  });

  return data;
};
