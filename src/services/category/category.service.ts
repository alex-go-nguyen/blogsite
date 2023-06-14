import { CategoriesResponse } from '@/services/category/category.dto';
import axiosClient from '@/utils/axiosClient';

export const getCategoriesAPI = async () => {
  const { data } = await axiosClient.get<CategoriesResponse>('/categories', { params: { populate: '*' } });

  return data.data;
};
