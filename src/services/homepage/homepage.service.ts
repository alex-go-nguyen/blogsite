import { HomepageResponse } from '@/services/homepage/homepage.dto';
import axiosClient from '@/utils/axiosClient';

export const getHomepage = async () => {
  const { data } = await axiosClient.get<HomepageResponse>('/homepage', {
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
