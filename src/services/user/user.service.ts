import { PaginationOption } from '@/dtos/api.dto';
import { Avatar, UpdateUserPayload, UserResponseData } from '@/services/user/users.dto';
<<<<<<< HEAD
import { axiosClient, axiosServer } from '@/utils/axiosClient';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { AuthResponse } from '../auth/auth.dto';
=======
import axiosServer, { axiosClient } from '@/utils/axiosClient';
import { AxiosResponse } from 'axios';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

export const getUserDetailAPI = async (id: number) => {
  const { data } = await axiosServer.get<UserResponseData>(`/users/${id}`, {
    params: {
      populate: {
        avatar: {
          populate: '*',
        },
      },
    },
  });

  return data;
};

export const getUsersAPI = async () => {
  const { data } = await axiosServer.get<UserResponseData[]>('/users', {
    params: {
      populate: {
        avatar: {
          populate: '*',
        },
      },
    },
  });

  return data;
};

export const getLoggedInUserAPI = async () => {
<<<<<<< HEAD
  const { data } = await axiosClient.get<UserResponseData>('/users/me', {
    params: { populate: '*' },
  });
=======
  const { data } = await axiosClient.get<UserResponseData>('/users/me', { params: { populate: '*' } });

  return data;
};

export const forgotPassword = async (email: string) => {
  const { data } = await axiosClient.post('/auth/forgot-password', email);
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

  return data;
};

export const updateUserAPI = async (user: UserResponseData, payload: UpdateUserPayload) => {
  const { name, about, major, avatar } = payload;

  let response: AxiosResponse;

<<<<<<< HEAD
  const accessToken = Cookies.get('access_token');

  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer ' + accessToken,
  };

=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  if (avatar && avatar.length > 0) {
    if (user.avatar) {
      await axiosClient.delete(`/upload/files/${user.avatar.id}`);
    }

    const formData = new FormData();
<<<<<<< HEAD
    formData.append('files', avatar?.[0]);

    const { data } = await axiosServer.post<Avatar[]>('/upload', formData, { headers });

    response = await axiosClient.put(`/users/${user.id}`, { ...payload, avatar: data?.[0].id });
=======
    formData.append('files', avatar[0]);

    const { data } = await axiosClient.post<Avatar[]>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    response = await axiosClient.put(`/users/${user.id}`, { ...payload, avatar: data[0].id });
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  } else {
    response = await axiosClient.put(`/users/${user.id}`, { name, about, major });
  }

  return response.data;
};

export const searchUsersAPI = async (searchQuery: string, { page, pageSize }: PaginationOption) => {
  const { data } = await axiosServer.get<UserResponseData[]>('/users', {
    params: {
      _q: searchQuery,
      populate: {
        avatar: {
          populate: '*',
        },
        articles: {
          populate: '*',
        },
      },
      pagination: {
        page,
        pageSize,
      },
    },
  });

  return data;
};
