import axiosClient from '@/utils/axiosClient';
import { GlobalResponse } from './global.dto';

export const getGlobal = async () => {
  const { data } = await axiosClient.get<GlobalResponse>('/global', {
    params: {
      populate: {
        favicon: '*',
        defaultSeo: {
          populate: '*',
        },
      },
    },
  });

  return data;
};
