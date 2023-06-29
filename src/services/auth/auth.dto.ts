<<<<<<< HEAD
import { UserResponseData } from '../user/users.dto';

=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
export type LoginPayload = {
  identifier: string;
  password: string;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export type ChangePasswordPayload = {
  password: string;
  currentPassword: string;
  passwordConfirmation: string;
};
<<<<<<< HEAD

export type AuthResponse = {
  jwt: string;
  user: UserResponseData;
};
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
