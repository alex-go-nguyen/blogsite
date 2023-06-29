import { HomepageResponse } from '@/services/homepage/homepage.dto';
<<<<<<< HEAD
import { axiosServer } from '@/utils/axiosClient';
=======
import axiosServer from '@/utils/axiosClient';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

export const getHomepageAPI = async () => {
  const { data } = await axiosServer.get<HomepageResponse>('/homepage', {
    params: {
      populate: {
        favicon: '*',
        seo: {
          populate: '*',
        },
      },
    },
  });
  return data;
};
