<<<<<<< HEAD
import { axiosClient, axiosServer } from '@/utils/axiosClient';
import { AuthResponse, ChangePasswordPayload, LoginPayload, RegisterPayload } from './auth.dto';
import { updateUserAPI } from '../user/user.service';
import Cookies from 'js-cookie';

export const loginAPI = async (loginPayload: LoginPayload) => {
  const { data } = await axiosServer.post<AuthResponse>('/auth/local', loginPayload);

  Cookies.set('access_token', data.jwt);
};

export const logoutAPI = async () => {
  Cookies.remove('access_token');
};

export const registerAPI = async (registerPayload: RegisterPayload) => {
  const { data } = await axiosServer.post<AuthResponse>('/auth/local/register', registerPayload);

  Cookies.set('access_token', data.jwt);

  updateUserAPI(data.user, { name: data.user.username });
};

export const changePasswordAPI = async (changePasswordPayload: ChangePasswordPayload) =>
  await axiosClient.post('/auth/change-password', changePasswordPayload);
=======
import { axiosClient } from '@/utils/axiosClient';
import { ChangePasswordPayload, LoginPayload, RegisterPayload } from './auth.dto';
import { updateUserAPI } from '../user/user.service';
import { UserResponseData } from '../user/users.dto';

export const loginAPI = async (loginPayload: LoginPayload) => await axiosClient.post('/login', loginPayload);

export const logoutAPI = async () => await axiosClient.post('/logout');

export const registerAPI = async (registerPayload: RegisterPayload) => {
  const { data } = await axiosClient.post<UserResponseData>('/register', registerPayload);

  updateUserAPI(data, { name: data.username });
};

export const changePasswordAPI = async (changePasswordPayload: ChangePasswordPayload) =>
  await axiosClient.post('/change-password', changePasswordPayload);
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
