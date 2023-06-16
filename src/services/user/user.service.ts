import { Avatar, UpdateUserPayload, UserResponseData } from '@/services/user/users.dto';
import axiosClient from '@/utils/axiosClient';
import { AxiosResponse } from 'axios';

export const getUserDetailAPI = async (id: number) => {
  const { data } = await axiosClient.get<UserResponseData>(`/users/${id}`, {
    params: {
      populate: '*',
    },
  });

  return data;
};

export const getUsersAPI = async () => {
  const { data } = await axiosClient.get<UserResponseData[]>('/users', {
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
  const { data } = await axiosClient.get<UserResponseData>('/users/me', { params: { populate: '*' } });

  return data;
};

export const forgotPassword = async (email: string) => {
  const { data } = await axiosClient.post('/auth/forgot-password', email);

  return data;
};

export const updateUserAPI = async (user: UserResponseData, payload: UpdateUserPayload) => {
  const { name, about, major, avatar } = payload;

  let response: AxiosResponse;

  if (avatar && avatar.length > 0) {
    if (user.avatar) {
      await axiosClient.delete(`/upload/files/${user.avatar.id}`);
    }

    const formData = new FormData();
    formData.append('files', avatar[0]);

    const res = await axiosClient.post<Avatar[]>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    response = await axiosClient.put(`/users/${user.id}`, { ...payload, avatar: res.data[0].id });
  } else {
    response = await axiosClient.put(`/users/${user.id}`, { name, about, major });
  }

  return response.data;
};
