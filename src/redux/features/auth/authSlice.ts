import { ChangePasswordPayload, LoginPayload, RegisterPayload } from '@/services/auth/auth.dto';
import { changePasswordAPI, loginAPI, logoutAPI, registerAPI } from '@/services/auth/auth.service';
import { getLoggedInUserAPI } from '@/services/user/user.service';
import { UserResponseData } from '@/services/user/users.dto';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface AuthState {
  user: UserResponseData | null;
  loading: boolean;
  error: boolean;
<<<<<<< HEAD
  isAuthenticated: boolean;
=======
  isAuthenticated?: boolean;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  isPasswordChanged: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: false,
<<<<<<< HEAD
  isAuthenticated: false,
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  isPasswordChanged: false,
};

export const postLogin = createAsyncThunk('Auth/login', async (loginPayload: LoginPayload) => loginAPI(loginPayload));
export const postLogout = createAsyncThunk('Auth/logout', async () => logoutAPI());
export const getMe = createAsyncThunk('users/getMe', async () => getLoggedInUserAPI());
export const postRegister = createAsyncThunk('users/register', async (registerPayload: RegisterPayload) =>
  registerAPI(registerPayload),
);
export const postChangePassword = createAsyncThunk('users/changePassword', async (payload: ChangePasswordPayload) =>
  changePasswordAPI(payload),
);

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    resetStateChangePassword: (state) => {
      state.isPasswordChanged = false;
    },
<<<<<<< HEAD
    resetStateError: (state) => {
      state.error = false;
    },
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.error = false;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(postLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(postLogout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(postLogout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(getMe.pending, (state) => {
        state.error = false;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isAuthenticated = false;
      })

      .addCase(postRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
<<<<<<< HEAD
=======
        state.loading = false;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
      })
      .addCase(postRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(postChangePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(postChangePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.isPasswordChanged = true;
        state.error = false;
      })
      .addCase(postChangePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

<<<<<<< HEAD
export const { resetStateChangePassword, resetStateError } = authSlice.actions;
=======
export const { resetStateChangePassword } = authSlice.actions;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
export default authSlice.reducer;
