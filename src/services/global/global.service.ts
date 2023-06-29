<<<<<<< HEAD
import { axiosServer } from '@/utils/axiosClient';
import { GlobalResponse } from './global.dto';

export const getGlobalAPI = async () => {
=======
import axiosServer from '@/utils/axiosClient';
import { GlobalResponse } from './global.dto';

export const getGlobal = async () => {
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  const { data } = await axiosServer.get<GlobalResponse>('/global', {
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
