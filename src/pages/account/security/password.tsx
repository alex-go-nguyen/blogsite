import Input from '@/components/Input/Input';
import Button from '@/components/button/Button';
import { useAuth } from '@/components/context/auth';
import { useAppDispatch } from '@/redux/store';
import { ChangePasswordPayload } from '@/services/auth/auth.dto';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { resetState } from '@/redux/features/auth/authSlice';

export interface IUserPasswordProps {}

const schema = object({
  currentPassword: string()
    .required('Required')
    .min(4, 'Password length should be at least 4 characters')
    .max(12, 'Password cannot exceed more than 12 characters'),
  password: string()
    .required('Required')
    .min(4, 'Password length should be at least 4 characters')
    .max(12, 'Password cannot exceed more than 12 characters'),
  passwordConfirmation: string()
    .required('Required')
    .min(4, 'Password length should be at least 4 characters')
    .max(12, 'Password cannot exceed more than 12 characters')
    .oneOf([ref('password')], 'Password does not match'),
});

export default function UserPassword(props: IUserPasswordProps) {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<ChangePasswordPayload>({ resolver: yupResolver(schema) });

  const { loading, isPasswordChanged, changePassword } = useAuth();

  const onSubmitHandler = (ChangePasswordData: ChangePasswordPayload) => {
    changePassword(ChangePasswordData);
  };

  useEffect(() => {
    if (isPasswordChanged) {
      alert('password change');
      reset();
      dispatch(resetState());
    }
  }, [isPasswordChanged, reset, dispatch]);

  return (
    <div>
      <h1 className=" text-3xl mb-2">Change password</h1>
      <p>
        Change password for your account. You should use the strong password to prevent ilegal access for your account
      </p>
      <form className="my-4" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="mb-4">
          <span className="text-sm font-thin">
            <span className="text-red-500">*</span> Current password
          </span>
          <Input {...register('currentPassword')} type="password" />
        </div>

        <div className="mb-4">
          <span className="text-sm font-thin">
            <span className="text-red-500">*</span> New password
          </span>
          <Input {...register('password')} type="password" />
        </div>

        <div className="mb-4">
          <span className="text-sm font-thin">
            <span className="text-red-500">*</span>Confirm new password
          </span>
          <Input {...register('passwordConfirmation')} type="password" />
        </div>

        <Button type="submit" variant="solid" className="float-right ml-4">
          Submit
        </Button>
        <Button type="button" variant="outlined" className="float-right">
          Cancel
        </Button>
      </form>
    </div>
  );
}

UserPassword.Layout = 'UserManagement';
