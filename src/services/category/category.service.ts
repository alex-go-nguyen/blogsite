import { CategoriesResponse } from '@/services/category/category.dto';
<<<<<<< HEAD
import { axiosServer } from '@/utils/axiosClient';
=======
import axiosServer from '@/utils/axiosClient';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

export const getCategoriesAPI = async () => {
  const { data } = await axiosServer.get<CategoriesResponse>('/categories', { params: { populate: '*' } });

  return data;
};

export const getCategoryDetailAPI = async (slug: string) => {
  const { data } = await axiosServer.get<CategoriesResponse>('/categories', {
    params: {
      filters: {
        slug,
      },
      populate: {
        articles: {
          populate: {
            thumbnail: '*',
<<<<<<< HEAD
=======
            category: {
              populate: '*',
            },
            author: {
              populate: '*',
            },
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
          },
        },
      },
    },
  });

<<<<<<< HEAD
  return data.data?.[0];
=======
  return data.data[0].attributes;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
};
