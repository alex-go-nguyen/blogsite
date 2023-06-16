import Input from '@/components/Input/Input';
import Avatar from '@/components/avatar/Avatar';
import Button from '@/components/button/Button';
import { useAuth } from '@/components/context/auth';
import { getMe } from '@/redux/features/auth/authSlice';
import { updateUser } from '@/redux/features/users/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { UpdateUserPayload } from '@/services/user/users.dto';
import { getAvatarUser } from '@/utils/media';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { ToastContainer, toast } from 'react-toastify';

const schema = object({
  avatar: mixed(),
  about: string(),
  name: string().required('required'),
  major: string(),
});

export default function Personal() {
  const { user } = useAuth({ redirectTo: '/login' });

  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.userDetail);

  const { register, setValue, handleSubmit, reset } = useForm<UpdateUserPayload>({ resolver: yupResolver(schema) });

  const onSubmitHandler = (payload: UpdateUserPayload) => {
    if (user) {
      dispatch(updateUser({ user, payload }));
    }
  };

  useEffect(() => {
    if (data && !loading) {
      toast.success('Update successfully!');
      dispatch(getMe());
    }
  }, [data, loading]);

  if (!user) return null;

  return (
    <div>
      <ToastContainer />
      <h1 className=" text-3xl mb-2">Personal Info</h1>
      <p>Manage your personal info. </p>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="my-8 flex justify-center">
          <Avatar
            isPicker
            src={user.avatar && getAvatarUser(user.avatar)}
            width={100}
            height={100}
            alt={user.name}
            onChange={(data) => setValue('avatar', data)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4 col-span-2">
            <span className="text-sm font-thin">Username</span>
            <Input disabled value={user.username} />
          </div>
          <div className="mb-4">
            <span className="text-sm font-thin">
              <span className="text-red-500">*</span> Display Name
            </span>
            <Input {...register('name')} defaultValue={user.name} />
          </div>
          <div className="mb-4">
            <span className="text-sm font-thin">Major</span>
            <Input {...register('major')} defaultValue={user.major} />
          </div>
          <div className="mb-4 col-span-2">
            <span className="text-sm font-thin">About you</span>
            <Input {...register('about')} defaultValue={user.about} />
          </div>
        </div>
        <Button type="submit" variant="solid" className="float-right ml-4">
          Confirm
        </Button>
        <Button type="button" variant="outlined" className="float-right" onClick={() => reset()}>
          Cancel
        </Button>
      </form>
    </div>
  );
}

Personal.Layout = 'UserManagement';
