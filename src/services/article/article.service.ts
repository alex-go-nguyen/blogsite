import { ArticlesResponse } from '@/services/article/article.dto';
import axiosClient from '@/utils/axiosClient';

export const getArticlesAPI = async (page: number) => {
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
      pagination: {
        page: page,
        pageSize: 6,
      },
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
