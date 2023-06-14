import axiosClient from '@/utils/axiosClient';
import { ChangePasswordPayload, LoginPayload, RegisterPayload } from './auth.dto';

export const loginAPI = async (loginPayload: LoginPayload) => await axiosClient.post('/login', loginPayload);

export const logoutAPI = async () => await axiosClient.post('/logout');

export const registerAPI = async (registerPayload: RegisterPayload) =>
  await axiosClient.post('/register', registerPayload);

export const changePasswordAPI = async (changePasswordPayload: ChangePasswordPayload) =>
  await axiosClient.post('/auth/change-password', changePasswordPayload);
